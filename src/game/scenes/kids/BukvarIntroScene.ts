import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/kids/act1_story_script';
import { BUKVAR_INTRO_SCRIPT } from '@/data/scenes/kids/act1_intro_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

/**
 * Bukvar Introduction Scene
 *
 * A heartfelt primer explaining the 400-year tradition of the Russian Ð±ÑƒÐºÐ²Ð°Ñ€ÑŒ.
 * Introduces Masha and Shura as guides before the adventure begins.
 */
export class BukvarIntroScene extends StoryScene {
  private masha?: Character;
  private shura?: Character;
  private bookGraphic?: Phaser.GameObjects.Graphics;

  constructor() {
    super('BukvarIntroScene');
  }

  protected getScript(): SceneScript {
    return this.BUKVAR_INTRO_SIMPLE;
  }

  private get BUKVAR_INTRO_SIMPLE(): SceneScript {
    return {
      id: 'bukvar_intro',
      title: 'Welcome',
      letter: '',
      setup: 'Learn Russian letters.',
      stages: [
        {
          id: 'welcome',
          narration: {
            russian: 'Ð”Ð¾Ð±Ñ€Ð¾ Ð¿Ð¾Ð¶Ð°Ð»Ð¾Ð²Ð°Ñ‚ÑŒ!',
            transliteration: 'Dobro pozhalovat!',
            translation: 'Welcome!',
          },
        },
        {
          id: 'how_it_works',
          narration: {
            russian: 'Ð’Ñ‹ Ð¸Ð·ÑƒÑ‡Ð¸Ñ‚Ðµ 33 Ð±ÑƒÐºÐ²Ñ‹.',
            transliteration: 'Vy izuchite 33 bukvy.',
            translation: 'You will learn 33 letters.',
          },
        },
        {
          id: 'lets_start',
          narration: {
            russian: 'ÐÐ°Ñ‡Ð½Ñ‘Ð¼ Ñ Ð±ÑƒÐºÐ²Ñ‹ Ð!',
            transliteration: 'Nachnyom s bukvy A!',
            translation: 'Let us begin with letter A!',
          },
        },
      ],
      letterDiscovery: {
        letter: '',
        russian: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹?',
        transliteration: 'Gotovy?',
        translation: 'Ready?',
        mouthShape: '',
        examples: [],
      },
    };
  }

  protected createBackground(): void {
    // Warm, parchment-like background - ONLY PICTURE AREA
    const PICTURE_HEIGHT = 360;
    const bg = this.add.graphics();

    // Gradient from warm cream to soft gold
    bg.fillGradientStyle(0xf5e6d3, 0xf5e6d3, 0xe8d4b8, 0xe8d4b8, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);
    bg.setDepth(0);

    // Subtle texture lines (like old paper)
    bg.lineStyle(1, 0xd4c5a9, 0.3);
    for (let i = 0; i < 15; i++) {
      const y = (i / 15) * PICTURE_HEIGHT;
      bg.lineBetween(0, y, GAME_WIDTH, y);
    }

    this.background = bg;
  }

  protected createCharacters(): void {
    // Characters will appear during specific stages
    // Not created initially
  }

  protected createHotspots(): void {
    // No hotspots in intro - just narrative
  }

  protected playStage(stage: import('@/data/scenes/types').SceneStage): void {
    super.playStage(stage);

    // Custom stage handling
    switch (stage.id) {
      case 'welcome':
        this.showBookIllustration();
        break;

      case 'bukvar_explanation':
        this.animateBookOpen();
        break;

      case 'first_letters':
        this.showLetterPreview();
        break;

      case 'meet_masha':
        this.introduceMasha();
        break;

      case 'meet_shura':
        this.introduceShura();
        break;

      case 'together':
        this.showCharactersTogether();
        break;

      case 'ready':
        this.prepareForAdventure();
        break;
    }
  }

  private showBookIllustration(): void {
    // Draw a simple book illustration
    this.bookGraphic = this.add.graphics();
    const centerX = GAME_WIDTH / 2;
    const centerY = 200;

    // Book cover (dark brown)
    this.bookGraphic.fillStyle(0x5d4e37, 1);
    this.bookGraphic.fillRect(centerX - 80, centerY - 60, 160, 120);

    // Book spine highlight
    this.bookGraphic.fillStyle(0x8b7355, 1);
    this.bookGraphic.fillRect(centerX - 80, centerY - 60, 10, 120);

    // Gold ornament
    this.bookGraphic.fillStyle(0xffd700, 1);
    this.bookGraphic.fillCircle(centerX, centerY, 30);

    // Cyrillic Ð‘ in the center
    const bookTitle = this.add.text(centerX, centerY, 'Ð‘', {
      fontFamily: '"Press Start 2P"',
      fontSize: '32px',
      color: '#5d4e37',
    });
    bookTitle.setOrigin(0.5);

    // Fade in
    this.bookGraphic.setAlpha(0);
    bookTitle.setAlpha(0);

    this.tweens.add({
      targets: [this.bookGraphic, bookTitle],
      alpha: 1,
      duration: 1500,
      ease: 'Sine.easeIn',
    });
  }

  private animateBookOpen(): void {
    if (this.bookGraphic) {
      // Book opens (scale out)
      this.tweens.add({
        targets: this.bookGraphic,
        scaleX: 1.5,
        alpha: 0.5,
        duration: 1000,
        ease: 'Quad.easeOut',
      });
    }
  }

  private showLetterPreview(): void {
    // Show the first 6 letters floating
    const letters = ['Ð', 'Ð£', 'Ðœ', 'Ð¨', 'Ð ', 'Ð'];
    const startX = 150;
    const spacing = 100;
    const y = 200;

    letters.forEach((letter, i) => {
      this.time.delayedCall(i * 200, () => {
        const text = this.add.text(startX + i * spacing, y, letter, {
          fontFamily: '"Press Start 2P"',
          fontSize: '28px',
          color: '#ffd700',
        });
        text.setOrigin(0.5);
        text.setAlpha(0);
        text.setScale(0);

        this.tweens.add({
          targets: text,
          alpha: 1,
          scale: 1,
          duration: 500,
          ease: 'Back.easeOut',
        });

        // Gentle float
        this.tweens.add({
          targets: text,
          y: y - 10,
          duration: 2000,
          yoyo: true,
          repeat: -1,
          ease: 'Sine.easeInOut',
        });
      });
    });
  }

  private introduceMasha(): void {
    // Masha appears on the left - IN PICTURE AREA
    this.masha = new Character(this, {
      name: 'masha',
      x: 200,
      y: 280, // Picture area (0-360)
      scale: 2,
      emotion: 'happy',
    });

    this.addCharacter('masha', this.masha);

    // Fade in with bounce
    this.masha.setAlpha(0);
    this.masha.setY(250);

    this.tweens.add({
      targets: this.masha,
      alpha: 1,
      y: 280,
      duration: 800,
      ease: 'Bounce.easeOut',
    });

    // Masha waves
    this.time.delayedCall(1000, () => {
      this.masha?.setEmotion('excited');
      this.masha?.speak('ÐŸÑ€Ð¸Ð²ÐµÑ‚! (Privet!)', 2000);
    });
  }

  private introduceShura(): void {
    // Shura appears on the right - IN PICTURE AREA
    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH - 200,
      y: 280, // Picture area (0-360)
      scale: 2,
      emotion: 'happy',
    });

    this.addCharacter('shura', this.shura);

    // Fade in with bounce
    this.shura.setAlpha(0);
    this.shura.setY(250);

    this.tweens.add({
      targets: this.shura,
      alpha: 1,
      y: 280,
      duration: 800,
      ease: 'Bounce.easeOut',
    });

    // Shura waves
    this.time.delayedCall(1000, () => {
      this.shura?.setEmotion('excited');
      this.shura?.speak('Ð—Ð´Ñ€Ð°Ð²ÑÑ‚Ð²ÑƒÐ¹! (Zdravstvuy!)', 2000);
    });
  }

  private showCharactersTogether(): void {
    if (this.masha && this.shura) {
      // Characters move closer together
      this.tweens.add({
        targets: this.masha,
        x: GAME_WIDTH / 2 - 80,
        duration: 800,
        ease: 'Sine.easeInOut',
      });

      this.tweens.add({
        targets: this.shura,
        x: GAME_WIDTH / 2 + 80,
        duration: 800,
        ease: 'Sine.easeInOut',
      });

      this.time.delayedCall(1000, () => {
        this.masha?.setEmotion('happy');
        this.shura?.setEmotion('happy');
      });
    }
  }

  private prepareForAdventure(): void {
    // Fade out everything except characters
    this.tweens.add({
      targets: this.background,
      alpha: 0.3,
      duration: 1000,
    });

    if (this.masha) {
      this.masha.setEmotion('determined');
    }

    if (this.shura) {
      this.shura.setEmotion('determined');
    }
  }

  protected transitionToNextScene(): void {
    // Fade out
    this.cameras.main.fadeOut(1000, 0, 0, 0);

    this.time.delayedCall(1000, () => {
      // Go to Scene 1: The Echo
      this.scene.start(SCENES.ACT1_SCENE1);
    });
  }

  protected playAmbientAudio(): void {
    // Gentle, contemplative ambient sound
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];

      // Very low, warm drone
      const drone = ctx.createOscillator();
      const gain = ctx.createGain();
      drone.type = 'sine';
      drone.frequency.value = 65.41; // C2
      gain.gain.value = 0.015;
      drone.connect(gain);
      gain.connect(ctx.destination);
      drone.start();

      // Gentle harmonic
      const harmonic = ctx.createOscillator();
      const harmonicGain = ctx.createGain();
      harmonic.type = 'sine';
      harmonic.frequency.value = 130.81; // C3
      harmonicGain.gain.value = 0.01;
      harmonic.connect(harmonicGain);
      harmonicGain.connect(ctx.destination);
      harmonic.start();

      // Stop when scene ends
      this.events.on('shutdown', () => {
        drone.stop();
        harmonic.stop();
      });
    }
  }
}
