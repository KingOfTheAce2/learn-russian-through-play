import Phaser from 'phaser';
import { PLAYER_SPEED, TILE_SIZE, INTERACTION_RADIUS, FONT_FAMILY } from '@/game/config';
import { isWalkable } from '@/data/tilemaps/village';

export type Direction = 'down' | 'up' | 'left' | 'right';

export class Player extends Phaser.GameObjects.Container {
  private sprite: Phaser.GameObjects.Image;
  private dirIndicator: Phaser.GameObjects.Graphics;
  public facing: Direction = 'down';
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private interactKey!: Phaser.Input.Keyboard.Key;
  private spaceKey!: Phaser.Input.Keyboard.Key;
  public onInteract: (() => void) | null = null;
  private isMovementEnabled = true;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    this.sprite = scene.add.image(0, 0, 'player');
    this.sprite.setOrigin(0.5, 0.5);
    this.add(this.sprite);

    // Direction indicator (small triangle showing facing)
    this.dirIndicator = scene.add.graphics();
    this.updateDirectionIndicator();
    this.add(this.dirIndicator);

    // Input
    if (scene.input.keyboard) {
      this.cursors = scene.input.keyboard.createCursorKeys();
      this.interactKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
      this.spaceKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    this.setSize(16, 24);
    scene.add.existing(this);
  }

  enableMovement(enabled: boolean): void {
    this.isMovementEnabled = enabled;
  }

  update(): void {
    if (!this.isMovementEnabled || !this.cursors) return;

    let vx = 0;
    let vy = 0;

    if (this.cursors.left.isDown) {
      vx = -PLAYER_SPEED;
      this.facing = 'left';
    } else if (this.cursors.right.isDown) {
      vx = PLAYER_SPEED;
      this.facing = 'right';
    }

    if (this.cursors.up.isDown) {
      vy = -PLAYER_SPEED;
      this.facing = 'up';
    } else if (this.cursors.down.isDown) {
      vy = PLAYER_SPEED;
      this.facing = 'down';
    }

    // Normalize diagonal
    if (vx !== 0 && vy !== 0) {
      vx *= 0.707;
      vy *= 0.707;
    }

    const dt = this.scene.game.loop.delta / 1000;
    const newX = this.x + vx * dt;
    const newY = this.y + vy * dt;

    // Tile-based collision check
    const col = Math.floor(newX / TILE_SIZE);
    const row = Math.floor(newY / TILE_SIZE);

    if (vx !== 0) {
      const checkCol = Math.floor(newX / TILE_SIZE);
      const checkRow = Math.floor(this.y / TILE_SIZE);
      if (isWalkable(checkCol, checkRow)) {
        this.x = newX;
      }
    }

    if (vy !== 0) {
      const checkCol = Math.floor(this.x / TILE_SIZE);
      const checkRow = Math.floor(newY / TILE_SIZE);
      if (isWalkable(checkCol, checkRow)) {
        this.y = newY;
      }
    }

    this.updateDirectionIndicator();

    // Interaction check
    if (
      Phaser.Input.Keyboard.JustDown(this.interactKey) ||
      Phaser.Input.Keyboard.JustDown(this.spaceKey)
    ) {
      this.onInteract?.();
    }
  }

  private updateDirectionIndicator(): void {
    this.dirIndicator.clear();
    this.dirIndicator.fillStyle(0xffffff, 0.8);

    switch (this.facing) {
      case 'down':
        this.dirIndicator.fillTriangle(0, 14, -3, 11, 3, 11);
        break;
      case 'up':
        this.dirIndicator.fillTriangle(0, -14, -3, -11, 3, -11);
        break;
      case 'left':
        this.dirIndicator.fillTriangle(-10, 0, -7, -3, -7, 3);
        break;
      case 'right':
        this.dirIndicator.fillTriangle(10, 0, 7, -3, 7, 3);
        break;
    }
  }

  /** Get the point in front of the player (for interaction checks). */
  getInteractionPoint(): { x: number; y: number } {
    const offset = INTERACTION_RADIUS * 0.5;
    switch (this.facing) {
      case 'down': return { x: this.x, y: this.y + offset };
      case 'up': return { x: this.x, y: this.y - offset };
      case 'left': return { x: this.x - offset, y: this.y };
      case 'right': return { x: this.x + offset, y: this.y };
    }
  }
}
