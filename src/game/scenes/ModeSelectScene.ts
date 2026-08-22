import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { GameState } from '@/systems/progress';
import { AudioManager } from '@/systems/audio';

/**
 * Mode Selection Scene
 * Choose between Kids Mode and Adult Mode
 */
export class ModeSelectScene extends Phaser.Scene {
  constructor() {
    super('ModeSelectScene');
  }

  create(): void {
    const state = GameState.getInstance();
    const audio = AudioManager.getInstance();

    // Background - split design
    const bg = this.add.graphics();

    // Kids side (left) - colorful gradient
    bg.fillGradientStyle(0x87ceeb, 0x87ceeb, 0xffd700, 0xff6b9d, 1);
    bg.fillRect(0, 0, GAME_WIDTH / 2, GAME_HEIGHT);

    // Adult side (right) - professional gradient
    bg.fillGradientStyle(0x2c3e50, 0x34495e, 0x2c3e50, 0x34495e, 1);
    bg.fillRect(GAME_WIDTH / 2, 0, GAME_WIDTH / 2, GAME_HEIGHT);

    // Title
    this.add.text(GAME_WIDTH / 2, 80, 'Choose Your Learning Mode', {
      fontFamily: 'Arial',
      fontSize: '24px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
    }).setOrigin(0.5);

    // Kids Mode Button (Left)
    this.createModeButton(
      GAME_WIDTH / 4,
      GAME_HEIGHT / 2,
      'KIDS MODE',
      'Stories with Masha & Shura\nColorful • Fun • Ages 5-12',
      0xffd700,
      0xff6b9d,
      () => {
        audio.sfxClick();
        state.setLearningMode('kids');
        this.scene.start(SCENES.MAIN_MENU);
      }
    );

    // Adult Mode Button (Right)
    this.createModeButton(
      (GAME_WIDTH / 4) * 3,
      GAME_HEIGHT / 2,
      'ADULT MODE',
      'Cultural context & grammar\nProfessional • Practical • Ages 13+',
      0x3498db,
      0x2c3e50,
      () => {
        audio.sfxClick();
        state.setLearningMode('adult');
        this.scene.start(SCENES.MAIN_MENU);
      }
    );

    // Subtitle
    this.add.text(GAME_WIDTH / 2, GAME_HEIGHT - 60, 'Learn all 33 Russian letters', {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3,
    }).setOrigin(0.5);

    this.add.text(GAME_WIDTH / 2, GAME_HEIGHT - 30, '(You can change this later in settings)', {
      fontFamily: 'Arial',
      fontSize: '12px',
      color: '#cccccc',
      fontStyle: 'italic',
    }).setOrigin(0.5);
  }

  private createModeButton(
    x: number,
    y: number,
    title: string,
    description: string,
    colorPrimary: number,
    colorSecondary: number,
    onClick: () => void
  ): void {
    const container = this.add.container(x, y);

    // Button background
    const bg = this.add.rectangle(0, 0, 280, 200, colorPrimary, 0.2);
    bg.setStrokeStyle(4, colorPrimary, 1);
    bg.setInteractive({ useHandCursor: true });

    // Title
    const titleText = this.add.text(0, -50, title, {
      fontFamily: 'Arial',
      fontSize: '24px',
      color: '#ffffff',
      fontStyle: 'bold',
      stroke: '#000000',
      strokeThickness: 3,
    });
    titleText.setOrigin(0.5);

    // Description
    const descText = this.add.text(0, 10, description, {
      fontFamily: 'Arial',
      fontSize: '14px',
      color: '#ffffff',
      align: 'center',
      wordWrap: { width: 250 },
      lineSpacing: 8,
    });
    descText.setOrigin(0.5);

    // Click button
    const clickBtn = this.add.rectangle(0, 70, 140, 45, colorSecondary);
    clickBtn.setStrokeStyle(3, 0xffffff);
    const btnText = this.add.text(0, 70, 'SELECT', {
      fontFamily: 'Arial',
      fontSize: '18px',
      color: '#ffffff',
      fontStyle: 'bold',
    });
    btnText.setOrigin(0.5);

    container.add([bg, titleText, descText, clickBtn, btnText]);

    // Hover effects
    bg.on('pointerover', () => {
      bg.setFillStyle(colorPrimary, 0.4);
      container.setScale(1.05);
      this.tweens.add({
        targets: container,
        y: y - 10,
        duration: 200,
        ease: 'Back.easeOut',
      });
    });

    bg.on('pointerout', () => {
      bg.setFillStyle(colorPrimary, 0.2);
      container.setScale(1.0);
      this.tweens.add({
        targets: container,
        y: y,
        duration: 200,
        ease: 'Sine.easeOut',
      });
    });

    bg.on('pointerdown', onClick);
  }
}
