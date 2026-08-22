import Phaser from 'phaser';
import { FONT_FAMILY, GAME_WIDTH, GAME_HEIGHT, COLORS } from '@/game/config';
import { LetterData } from '@/types';
import { AudioManager } from '@/systems/audio';
import { GameState } from '@/systems/progress';

export class LetterRevealUI extends Phaser.GameObjects.Container {
  public onComplete: (() => void) | null = null;

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0);
    this.setScrollFactor(0);
    this.setDepth(250);
    this.setVisible(false);
    scene.add.existing(this);
  }

  show(letter: LetterData): void {
    this.removeAll(true);
    this.setVisible(true);
    this.setAlpha(0);

    // Dark backdrop
    const backdrop = this.scene.add.rectangle(
      GAME_WIDTH / 2, GAME_HEIGHT / 2,
      GAME_WIDTH, GAME_HEIGHT,
      0x000000, 0.85
    );
    this.add(backdrop);

    // Large letter
    const letterText = this.scene.add.text(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 60, letter.character, {
      fontFamily: FONT_FAMILY,
      fontSize: '72px',
      color: '#ffd700',
      stroke: '#000000',
      strokeThickness: 4,
    });
    letterText.setOrigin(0.5, 0.5);
    letterText.setAlpha(0);
    letterText.setScale(0.3);
    this.add(letterText);

    // Transliteration
    const state = GameState.getInstance();
    const translitLabel = this.scene.add.text(
      GAME_WIDTH / 2, GAME_HEIGHT / 2 + 10,
      state.data.translitEnabled ? `"${letter.transliteration}"` : '',
      {
        fontFamily: FONT_FAMILY,
        fontSize: '14px',
        color: '#aaaaaa',
      }
    );
    translitLabel.setOrigin(0.5, 0.5);
    this.add(translitLabel);

    // Sound description
    const soundDesc = this.scene.add.text(
      GAME_WIDTH / 2, GAME_HEIGHT / 2 + 40,
      letter.soundDescription,
      {
        fontFamily: FONT_FAMILY,
        fontSize: '8px',
        color: '#88aacc',
      }
    );
    soundDesc.setOrigin(0.5, 0.5);
    this.add(soundDesc);

    // False friend warning
    if (letter.falseFriend) {
      const warning = this.scene.add.text(
        GAME_WIDTH / 2, GAME_HEIGHT / 2 + 65,
        `Looks like "${letter.falseFriend.latin}" - ${letter.falseFriend.note}`,
        {
          fontFamily: FONT_FAMILY,
          fontSize: '7px',
          color: '#ff8866',
          wordWrap: { width: 500 },
          align: 'center',
        }
      );
      warning.setOrigin(0.5, 0.5);
      this.add(warning);
    }

    // Example word
    if (letter.exampleWords.length > 0) {
      const exampleLabel = this.scene.add.text(
        GAME_WIDTH / 2, GAME_HEIGHT / 2 + 100,
        `Example: ${letter.exampleWords[0]}`,
        {
          fontFamily: FONT_FAMILY,
          fontSize: '10px',
          color: '#ffffff',
        }
      );
      exampleLabel.setOrigin(0.5, 0.5);
      this.add(exampleLabel);
    }

    // Collect prompt
    const collectText = this.scene.add.text(
      GAME_WIDTH / 2, GAME_HEIGHT - 60,
      'Tap or press SPACE to collect!',
      {
        fontFamily: FONT_FAMILY,
        fontSize: '8px',
        color: '#666666',
      }
    );
    collectText.setOrigin(0.5, 0.5);
    collectText.setAlpha(0);
    this.add(collectText);

    // Animation sequence
    this.scene.tweens.add({
      targets: this,
      alpha: 1,
      duration: 300,
    });

    this.scene.tweens.add({
      targets: letterText,
      alpha: 1,
      scaleX: 1,
      scaleY: 1,
      duration: 600,
      delay: 200,
      ease: 'Back.easeOut',
      onComplete: () => {
        AudioManager.getInstance().speakLetter(letter.character);

        this.scene.tweens.add({
          targets: collectText,
          alpha: 1,
          duration: 500,
          delay: 500,
        });
      },
    });

    // Pulsing letter animation
    this.scene.tweens.add({
      targets: letterText,
      scaleX: 1.05,
      scaleY: 1.05,
      duration: 800,
      delay: 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    // Allow closing after delay
    this.scene.time.delayedCall(1000, () => {
      backdrop.setInteractive();
      backdrop.on('pointerdown', () => this.close());

      if (this.scene.input.keyboard) {
        const spaceKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        spaceKey.once('down', () => this.close());
      }
    });
  }

  private close(): void {
    this.scene.tweens.add({
      targets: this,
      alpha: 0,
      duration: 300,
      onComplete: () => {
        this.setVisible(false);
        this.removeAll(true);
        this.onComplete?.();
      },
    });
  }
}
