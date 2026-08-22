import Phaser from 'phaser';
import { FONT_FAMILY, COLORS } from '@/game/config';

export interface LetterParticleConfig {
  x: number;
  y: number;
  letter: string;
  color?: number;
  glowColor?: number;
  size?: number;
  interactive?: boolean;
  onCollect?: () => void;
}

/**
 * LetterParticle - Visual representation of floating, collectible letters
 * Replaces "runes" with beautiful glowing letter particles
 */
export class LetterParticle extends Phaser.GameObjects.Container {
  private letter: string;
  private letterText: Phaser.GameObjects.Text;
  private glow: Phaser.GameObjects.Graphics;
  private isCollected = false;
  private onCollectCallback?: () => void;

  constructor(scene: Phaser.Scene, config: LetterParticleConfig) {
    super(scene, config.x, config.y);

    this.letter = config.letter;
    this.onCollectCallback = config.onCollect;

    // Glow effect
    this.glow = scene.add.graphics();
    this.add(this.glow);
    this.drawGlow(config.glowColor || COLORS.GOLD);

    // Letter text
    this.letterText = scene.add.text(0, 0, config.letter, {
      fontFamily: FONT_FAMILY,
      fontSize: `${config.size || 48}px`,
      color: `#${(config.color || 0xffffff).toString(16).padStart(6, '0')}`,
    });
    this.letterText.setOrigin(0.5);
    this.letterText.setShadow(2, 2, '#000000', 5);
    this.add(this.letterText);

    if (config.interactive) {
      this.setupInteraction();
    }

    this.startFloatAnimation();
    this.startPulseAnimation();

    scene.add.existing(this);
  }

  private drawGlow(color: number): void {
    // Multiple layers of glow for depth
    const layers = [
      { radius: 40, alpha: 0.1 },
      { radius: 30, alpha: 0.15 },
      { radius: 20, alpha: 0.2 },
    ];

    layers.forEach((layer) => {
      this.glow.fillStyle(color, layer.alpha);
      this.glow.fillCircle(0, 0, layer.radius);
    });
  }

  private setupInteraction(): void {
    this.letterText.setInteractive({ useHandCursor: true });

    this.letterText.on('pointerover', () => {
      this.scene.tweens.add({
        targets: this,
        scale: 1.2,
        duration: 200,
        ease: 'Back.easeOut',
      });
    });

    this.letterText.on('pointerout', () => {
      if (!this.isCollected) {
        this.scene.tweens.add({
          targets: this,
          scale: 1.0,
          duration: 200,
          ease: 'Back.easeIn',
        });
      }
    });

    this.letterText.on('pointerdown', () => {
      this.collect();
    });
  }

  private startFloatAnimation(): void {
    // Gentle bobbing motion
    this.scene.tweens.add({
      targets: this,
      y: this.y - 10,
      duration: 2000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });
  }

  private startPulseAnimation(): void {
    // Glow pulse
    this.scene.tweens.add({
      targets: this.glow,
      alpha: 0.5,
      duration: 1500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });
  }

  collect(): void {
    if (this.isCollected) return;

    this.isCollected = true;
    this.scene.tweens.killTweensOf(this);

    // Collection animation
    this.playCollectionAnimation();

    if (this.onCollectCallback) {
      this.scene.time.delayedCall(500, () => {
        this.onCollectCallback!();
      });
    }
  }

  private playCollectionAnimation(): void {
    // Sparkle effect
    this.createSparkles();

    // Scale up and fade out
    this.scene.tweens.add({
      targets: this,
      scaleX: 2,
      scaleY: 2,
      alpha: 0,
      duration: 600,
      ease: 'Back.easeIn',
      onComplete: () => this.destroy(),
    });

    // Spin
    this.scene.tweens.add({
      targets: this,
      angle: 360,
      duration: 600,
      ease: 'Quad.easeOut',
    });
  }

  private createSparkles(): void {
    const particleCount = 12;
    const radius = 60;

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const sparkle = this.scene.add.circle(this.x, this.y, 3, 0xffd700);
      sparkle.setAlpha(1);

      this.scene.tweens.add({
        targets: sparkle,
        x: this.x + x,
        y: this.y + y,
        alpha: 0,
        duration: 500,
        ease: 'Quad.easeOut',
        onComplete: () => sparkle.destroy(),
      });
    }
  }

  /**
   * Fly to a target position (e.g., to the journal or HUD)
   */
  flyTo(targetX: number, targetY: number, onComplete?: () => void): void {
    this.scene.tweens.killTweensOf(this);

    this.scene.tweens.add({
      targets: this,
      x: targetX,
      y: targetY,
      scale: 0.5,
      duration: 800,
      ease: 'Quad.easeInOut',
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
        this.destroy();
      },
    });
  }

  /**
   * Spawn multiple particles in a circle pattern
   */
  static createCirclePattern(
    scene: Phaser.Scene,
    centerX: number,
    centerY: number,
    letter: string,
    count: number = 5,
    radius: number = 100,
    onCollect?: () => void
  ): LetterParticle[] {
    const particles: LetterParticle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const particle = new LetterParticle(scene, {
        x,
        y,
        letter,
        interactive: true,
        onCollect,
      });

      particles.push(particle);

      // Stagger spawn animation
      particle.setAlpha(0);
      particle.setScale(0);
      scene.time.delayedCall(i * 100, () => {
        scene.tweens.add({
          targets: particle,
          alpha: 1,
          scale: 1,
          duration: 400,
          ease: 'Back.easeOut',
        });
      });
    }

    return particles;
  }

  /**
   * Create a trail of particles along a path
   */
  static createPathTrail(
    scene: Phaser.Scene,
    path: { x: number; y: number }[],
    letter: string,
    onCollect?: () => void
  ): LetterParticle[] {
    return path.map((point, i) => {
      const particle = new LetterParticle(scene, {
        x: point.x,
        y: point.y,
        letter,
        interactive: true,
        onCollect,
      });

      // Stagger appearance
      particle.setAlpha(0);
      scene.time.delayedCall(i * 150, () => {
        scene.tweens.add({
          targets: particle,
          alpha: 1,
          duration: 300,
        });
      });

      return particle;
    });
  }
}
