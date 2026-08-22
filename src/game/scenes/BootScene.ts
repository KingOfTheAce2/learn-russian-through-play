import Phaser from 'phaser';
import { SCENES, GAME_WIDTH, GAME_HEIGHT, FONT_FAMILY } from '@/game/config';
import { GameState } from '@/systems/progress';
import { AudioManager } from '@/systems/audio';

export class BootScene extends Phaser.Scene {
  constructor() {
    super(SCENES.BOOT);
  }

  create(): void {
    GameState.getInstance().load();
    AudioManager.getInstance();

    this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x1a1a2e);

    this.add.text(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 40, 'THE LOST LETTERS', {
      fontFamily: FONT_FAMILY,
      fontSize: '20px',
      color: '#ffd700',
    }).setOrigin(0.5);

    const tapText = this.add.text(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 20, 'Tap anywhere to begin', {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#ffffff',
    }).setOrigin(0.5);

    this.tweens.add({
      targets: tapText,
      alpha: 0.3,
      duration: 900,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    this.input.once('pointerdown', () => {
      AudioManager.getInstance().unlock();
      this.cameras.main.fadeOut(300, 0, 0, 0);
      this.time.delayedCall(300, () => this.scene.start(SCENES.PRELOAD));
    });
  }
}
