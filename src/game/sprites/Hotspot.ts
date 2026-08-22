import Phaser from 'phaser';

export type HotspotShape = 'circle' | 'rectangle' | 'polygon';

export interface HotspotConfig {
  x: number;
  y: number;
  shape: HotspotShape;
  width?: number;
  height?: number;
  radius?: number;
  points?: Phaser.Types.Math.Vector2Like[];
  id: string;
  hoverTint?: number;
  onClick?: () => void;
  visualFeedback?: boolean;
  debugDraw?: boolean;
}

/**
 * Hotspot - Clickable interactive area for point-and-click adventure style
 * Replaces WASD movement with click-based interaction
 */
export class Hotspot extends Phaser.GameObjects.Container {
  private config: HotspotConfig;
  private hitArea: Phaser.GameObjects.Graphics;
  private isHovered = false;
  private debugGraphics?: Phaser.GameObjects.Graphics;

  constructor(scene: Phaser.Scene, config: HotspotConfig) {
    super(scene, config.x, config.y);
    this.config = config;

    // Create invisible hit area
    this.hitArea = scene.add.graphics();
    this.add(this.hitArea);

    this.setupInteraction();

    if (config.debugDraw) {
      this.drawDebug();
    }

    scene.add.existing(this);
  }

  private setupInteraction(): void {
    let interactiveArea: Phaser.GameObjects.GameObject;

    switch (this.config.shape) {
      case 'circle':
        interactiveArea = this.scene.add.circle(
          0, 0,
          this.config.radius || 50,
          0x000000,
          0 // invisible
        );
        interactiveArea.setInteractive(
          new Phaser.Geom.Circle(0, 0, this.config.radius || 50),
          Phaser.Geom.Circle.Contains
        );
        break;

      case 'rectangle':
        interactiveArea = this.scene.add.rectangle(
          0, 0,
          this.config.width || 100,
          this.config.height || 100,
          0x000000,
          0 // invisible
        );
        interactiveArea.setInteractive();
        break;

      case 'polygon':
        if (this.config.points) {
          const polygon = new Phaser.Geom.Polygon(this.config.points);
          interactiveArea = this.scene.add.polygon(0, 0, this.config.points, 0x000000, 0);
          interactiveArea.setInteractive(polygon, Phaser.Geom.Polygon.Contains);
        } else {
          throw new Error('Polygon hotspot requires points array');
        }
        break;
    }

    this.add(interactiveArea);

    // Hover effects
    interactiveArea.on('pointerover', () => {
      this.isHovered = true;
      if (this.config.visualFeedback) {
        this.showHoverFeedback();
      }
      this.scene.input.setDefaultCursor('pointer');
    });

    interactiveArea.on('pointerout', () => {
      this.isHovered = false;
      if (this.config.visualFeedback) {
        this.hideHoverFeedback();
      }
      this.scene.input.setDefaultCursor('default');
    });

    // Click
    interactiveArea.on('pointerdown', () => {
      if (this.config.onClick) {
        this.playClickFeedback();
        this.config.onClick();
      }
    });
  }

  private showHoverFeedback(): void {
    // Pulse effect
    this.scene.tweens.add({
      targets: this,
      scale: 1.05,
      duration: 200,
      ease: 'Sine.easeInOut',
    });

    // Tint if specified
    if (this.config.hoverTint !== undefined) {
      this.hitArea.clear();
      this.drawShape(this.config.hoverTint, 0.2);
    }
  }

  private hideHoverFeedback(): void {
    this.scene.tweens.add({
      targets: this,
      scale: 1.0,
      duration: 200,
      ease: 'Sine.easeInOut',
    });

    this.hitArea.clear();
  }

  private playClickFeedback(): void {
    // Quick scale bounce
    this.scene.tweens.add({
      targets: this,
      scale: 0.95,
      duration: 100,
      yoyo: true,
      ease: 'Power2',
    });

    // Flash effect
    this.hitArea.clear();
    this.drawShape(0xffffff, 0.4);
    this.scene.time.delayedCall(150, () => {
      this.hitArea.clear();
    });
  }

  private drawShape(color: number, alpha: number): void {
    this.hitArea.fillStyle(color, alpha);

    switch (this.config.shape) {
      case 'circle':
        this.hitArea.fillCircle(0, 0, this.config.radius || 50);
        break;
      case 'rectangle':
        this.hitArea.fillRect(
          -(this.config.width || 100) / 2,
          -(this.config.height || 100) / 2,
          this.config.width || 100,
          this.config.height || 100
        );
        break;
      case 'polygon':
        if (this.config.points) {
          this.hitArea.fillPoints(this.config.points, true);
        }
        break;
    }
  }

  private drawDebug(): void {
    this.debugGraphics = this.scene.add.graphics();
    this.debugGraphics.lineStyle(2, 0xff0000, 0.5);

    switch (this.config.shape) {
      case 'circle':
        this.debugGraphics.strokeCircle(this.x, this.y, this.config.radius || 50);
        break;
      case 'rectangle':
        this.debugGraphics.strokeRect(
          this.x - (this.config.width || 100) / 2,
          this.y - (this.config.height || 100) / 2,
          this.config.width || 100,
          this.config.height || 100
        );
        break;
      case 'polygon':
        if (this.config.points) {
          this.debugGraphics.strokePoints(this.config.points, true);
        }
        break;
    }

    // Label
    const label = this.scene.add.text(this.x, this.y, this.config.id, {
      fontSize: '12px',
      color: '#ff0000',
      backgroundColor: '#000000',
    });
    label.setOrigin(0.5);
  }

  enable(): void {
    this.setActive(true);
    this.setVisible(true);
  }

  disable(): void {
    this.setActive(false);
    this.setVisible(false);
  }

  destroy(): void {
    if (this.debugGraphics) {
      this.debugGraphics.destroy();
    }
    super.destroy();
  }
}
