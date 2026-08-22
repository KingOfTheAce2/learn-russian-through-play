import Phaser from 'phaser';
import { SCENES, GAME_WIDTH, GAME_HEIGHT, COLORS, FONT_FAMILY } from '@/game/config';
import { GameState } from '@/systems/progress';
import { startScene } from '@/systems/sceneLoader';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SCENES.PRELOAD);
  }

  create(): void {
    // Loading bar (placeholder for future real asset loading)
    const barWidth = 300;
    const barHeight = 20;
    const x = (GAME_WIDTH - barWidth) / 2;
    const y = GAME_HEIGHT / 2;

    // Background bar
    this.add.rectangle(x + barWidth / 2, y, barWidth, barHeight, 0x333333);

    // Fill bar
    const fill = this.add.rectangle(x, y, 0, barHeight - 4, COLORS.GOLD);
    fill.setOrigin(0, 0.5);

    // Title
    this.add.text(GAME_WIDTH / 2, y - 40, 'RUSSIAN ABCs ADVENTURE', {
      fontFamily: FONT_FAMILY,
      fontSize: '12px',
      color: '#ffd700',
    }).setOrigin(0.5, 0.5);

    // Simulate loading
    this.tweens.add({
      targets: fill,
      width: barWidth - 4,
      duration: 500,
      ease: 'Linear',
      onComplete: () => {
        this.time.delayedCall(200, () => {
          // Load saved state if exists (mode is already set by entry point)
          const state = GameState.getInstance();
          if (state.hasSave()) {
            state.load();
          }

          // Go directly to main menu (no mode selection)
          startScene(this, SCENES.MAIN_MENU);
        });
      },
    });
  }
}
