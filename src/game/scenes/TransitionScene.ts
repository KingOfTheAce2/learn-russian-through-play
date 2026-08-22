import Phaser from 'phaser';
import { SCENES, GAME_WIDTH, GAME_HEIGHT, COLORS, FONT_FAMILY } from '@/game/config';
import { GameState } from '@/systems/progress';

export class TransitionScene extends Phaser.Scene {
  constructor() {
    super(SCENES.TRANSITION);
  }

  create(): void {
    const state = GameState.getInstance();
    state.completeAct(1);
    state.save();

    // Background
    this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, COLORS.UI_DARK);

    // Title
    const title = this.add.text(GAME_WIDTH / 2, 120, 'ACT 1 COMPLETE!', {
      fontFamily: FONT_FAMILY,
      fontSize: '20px',
      color: '#ffd700',
    });
    title.setOrigin(0.5, 0.5);
    title.setAlpha(0);

    // Stats
    const learned = state.data.learnedLetters;
    const statsText = this.add.text(GAME_WIDTH / 2, 200, `Letters learned: ${learned.length}/33`, {
      fontFamily: FONT_FAMILY,
      fontSize: '10px',
      color: '#ffffff',
    });
    statsText.setOrigin(0.5, 0.5);
    statsText.setAlpha(0);

    // Letter display
    const letterDisplay = this.add.text(GAME_WIDTH / 2, 250, learned.join('  '), {
      fontFamily: FONT_FAMILY,
      fontSize: '24px',
      color: '#ffd700',
    });
    letterDisplay.setOrigin(0.5, 0.5);
    letterDisplay.setAlpha(0);

    // Coming soon
    const comingSoon = this.add.text(GAME_WIDTH / 2, 340, 'Act 2 coming soon...', {
      fontFamily: FONT_FAMILY,
      fontSize: '10px',
      color: '#888888',
    });
    comingSoon.setOrigin(0.5, 0.5);
    comingSoon.setAlpha(0);

    // Menu button
    const menuBtn = this.add.rectangle(GAME_WIDTH / 2, 440, 200, 40, 0x2a2a4e);
    menuBtn.setStrokeStyle(2, COLORS.GOLD);
    menuBtn.setInteractive({ useHandCursor: true });
    menuBtn.setAlpha(0);

    const menuText = this.add.text(GAME_WIDTH / 2, 440, 'MAIN MENU', {
      fontFamily: FONT_FAMILY,
      fontSize: '10px',
      color: '#ffd700',
    });
    menuText.setOrigin(0.5, 0.5);
    menuText.setAlpha(0);

    menuBtn.on('pointerdown', () => {
      this.scene.start(SCENES.MAIN_MENU);
    });

    // Animated reveals
    this.tweens.add({ targets: title, alpha: 1, duration: 800, delay: 200 });
    this.tweens.add({ targets: statsText, alpha: 1, duration: 800, delay: 600 });
    this.tweens.add({ targets: letterDisplay, alpha: 1, duration: 800, delay: 1000 });
    this.tweens.add({ targets: comingSoon, alpha: 1, duration: 800, delay: 1400 });
    this.tweens.add({ targets: [menuBtn, menuText], alpha: 1, duration: 800, delay: 1800 });
  }
}
