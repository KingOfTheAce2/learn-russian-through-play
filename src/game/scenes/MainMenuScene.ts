import Phaser from 'phaser';
import { SCENES, GAME_WIDTH, GAME_HEIGHT, COLORS, FONT_FAMILY } from '@/game/config';
import { GameState } from '@/systems/progress';
import { AudioManager } from '@/systems/audio';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(SCENES.MAIN_MENU);
  }

  create(): void {
    const state = GameState.getInstance();
    const hasSave = state.hasSave();

    // Background
    this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, COLORS.UI_DARK);

    // Title
    this.add.text(GAME_WIDTH / 2, 120, 'THE LOST LETTERS', {
      fontFamily: FONT_FAMILY,
      fontSize: '24px',
      color: '#ffd700',
    }).setOrigin(0.5, 0.5);

    this.add.text(GAME_WIDTH / 2, 160, 'A Russian ABC Adventure', {
      fontFamily: FONT_FAMILY,
      fontSize: '12px',
      color: '#ffffff',
    }).setOrigin(0.5, 0.5);

    // All 33 letters display
    const acts = [
      { letters: 'А У М Ш Р Н', color: '#ffd700', y: 190 },
      { letters: 'Л Ы О С И К', color: '#4a90e2', y: 215 },
      { letters: 'Т В П Е Д З', color: '#ff6b9d', y: 240 },
      { letters: 'Б Г Ч Ж Ь Й', color: '#7bed9f', y: 265 },
      { letters: 'Х Ц Ф Щ Э Я Ё Ю Ъ', color: '#ff7f50', y: 290 },
    ];

    acts.forEach(act => {
      this.add.text(GAME_WIDTH / 2, act.y, act.letters, {
        fontFamily: FONT_FAMILY,
        fontSize: '14px',
        color: act.color,
        fontStyle: 'bold',
      }).setOrigin(0.5, 0.5);
    });

    // Helper text
    this.add.text(GAME_WIDTH / 2, 315, '(All 33 Russian letters!)', {
      fontFamily: 'Arial',
      fontSize: '9px',
      color: '#ffffff',
      fontStyle: 'italic',
    }).setOrigin(0.5, 0.5);

    // New Game button
    this.createButton(GAME_WIDTH / 2, 350, 'NEW GAME', () => {
      AudioManager.getInstance().unlock();
      state.reset();

      // Route to correct intro based on learning mode
      const mode = state.getLearningMode();
      if (mode === 'adult') {
        this.scene.start('AdultIntroScene');
      } else {
        this.scene.start(SCENES.BUKVAR_INTRO);
      }
    });

    // Continue button (only if save exists)
    if (hasSave) {
      this.createButton(GAME_WIDTH / 2, 400, 'CONTINUE', () => {
        AudioManager.getInstance().unlock();
        state.load();

        // Route based on saved mode
        const mode = state.getLearningMode();
        if (mode === 'adult') {
          this.scene.start('AdultIntroScene');
        } else {
          this.scene.start(SCENES.BUKVAR_INTRO);
        }
      });
    }

    // Credits
    this.add.text(GAME_WIDTH / 2, GAME_HEIGHT - 30, 'Learn Russian Through Play', {
      fontFamily: FONT_FAMILY,
      fontSize: '7px',
      color: '#555555',
    }).setOrigin(0.5, 0.5);
  }

  private createButton(x: number, y: number, label: string, onClick: () => void): void {
    const bg = this.add.rectangle(x, y, 220, 40, 0x2a2a4e);
    bg.setStrokeStyle(2, COLORS.GOLD);
    bg.setInteractive({ useHandCursor: true });

    const text = this.add.text(x, y, label, {
      fontFamily: FONT_FAMILY,
      fontSize: '12px',
      color: '#ffd700',
    });
    text.setOrigin(0.5, 0.5);

    bg.on('pointerover', () => {
      bg.setFillStyle(0x3a3a5e);
      bg.setStrokeStyle(2, 0xffffff);
    });
    bg.on('pointerout', () => {
      bg.setFillStyle(0x2a2a4e);
      bg.setStrokeStyle(2, COLORS.GOLD);
    });
    bg.on('pointerdown', () => {
      AudioManager.getInstance().sfxClick();
      onClick();
    });
  }
}
