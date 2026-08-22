import Phaser from 'phaser';
import { FONT_FAMILY, COLORS } from '@/game/config';
import { AudioManager } from '@/systems/audio';

export class LetterRune extends Phaser.GameObjects.Container {
  private glow: Phaser.GameObjects.Image;
  private letterText: Phaser.GameObjects.Text;
  public letter: string;
  public collected = false;

  constructor(scene: Phaser.Scene, x: number, y: number, letter: string) {
    super(scene, x, y);

    this.letter = letter;

    this.glow = scene.add.image(0, 0, 'rune');
    this.glow.setOrigin(0.5, 0.5);
    this.add(this.glow);

    this.letterText = scene.add.text(0, 0, letter, {
      fontFamily: FONT_FAMILY,
      fontSize: '10px',
      color: '#1a1a2e',
      stroke: '#000000',
      strokeThickness: 1,
    });
    this.letterText.setOrigin(0.5, 0.5);
    this.add(this.letterText);

    // Pulse animation
    scene.tweens.add({
      targets: this.glow,
      scaleX: 1.3,
      scaleY: 1.3,
      alpha: 0.7,
      duration: 700,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    // Subtle float
    scene.tweens.add({
      targets: this,
      y: y - 3,
      duration: 1200,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    this.setSize(16, 16);
    scene.add.existing(this);
  }

  isInRange(px: number, py: number, radius: number): boolean {
    const dist = Phaser.Math.Distance.Between(this.x, this.y, px, py);
    return dist <= radius;
  }

  collect(): Promise<void> {
    if (this.collected) return Promise.resolve();
    this.collected = true;
    AudioManager.getInstance().sfxRuneCollect();

    return new Promise((resolve) => {
      this.scene.tweens.add({
        targets: this,
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        duration: 300,
        ease: 'Back.easeIn',
        onComplete: () => {
          this.setVisible(false);
          this.setActive(false);
          resolve();
        },
      });
    });
  }
}
