import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { GAME_WIDTH, GAME_HEIGHT } from '@/game/config';

/**
 * ADULT MODE - Introduction
 * Brief, professional intro - no fluff
 */
export class AdultIntroScene extends StoryScene {
  constructor() {
    super('AdultIntroScene');
  }

  protected getScript(): SceneScript {
    return {
      id: 'adult_intro',
      title: 'Russian Alphabet',
      letter: '',
      setup: 'Learn the Russian alphabet.',

      stages: [
        {
          id: 'welcome',
          narration: {
            russian: 'Ð ÑƒÑÑÐºÐ¸Ð¹ Ð°Ð»Ñ„Ð°Ð²Ð¸Ñ‚: 33 Ð±ÑƒÐºÐ²Ñ‹.',
            transliteration: 'Russkiy alfavit: 33 bukvy.',
            translation: 'Russian alphabet: 33 letters.',
          },
        },
        {
          id: 'practical',
          narration: {
            russian: 'Ð’Ñ‹ Ð¸Ð·ÑƒÑ‡Ð¸Ñ‚Ðµ Ð±ÑƒÐºÐ²Ñ‹ Ñ‡ÐµÑ€ÐµÐ· Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ ÑÐ¸Ñ‚ÑƒÐ°Ñ†Ð¸Ð¸.',
            transliteration: 'Vy izuchite bukvy cherez prakticheskiye situatsii.',
            translation: 'You will learn letters through practical situations.',
          },
        },
        {
          id: 'begin',
          narration: {
            russian: 'ÐÐ°Ñ‡Ð½Ñ‘Ð¼ Ñ Ð±ÑƒÐºÐ²Ñ‹ Ð.',
            transliteration: 'Nachnyom s bukvy A.',
            translation: 'Let us begin with letter Ð.',
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
    // Clean, professional background - ONLY PICTURE AREA (0-360)
    const PICTURE_HEIGHT = 360;
    const bg = this.add.graphics();
    bg.fillStyle(0xecf0f1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);
    bg.setDepth(0);

    // Cyrillic letters watermark
    const letters = 'ÐÐ‘Ð’Ð“Ð”Ð•ÐÐ–Ð—Ð˜Ð™ÐšÐ›ÐœÐÐžÐŸÐ Ð¡Ð¢Ð£Ð¤Ð¥Ð¦Ð§Ð¨Ð©ÐªÐ«Ð¬Ð­Ð®Ð¯';
    const text = this.add.text(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 50, letters, {
      fontFamily: 'Georgia',
      fontSize: '18px',
      color: '#bdc3c7',
      align: 'center',
      wordWrap: { width: GAME_WIDTH - 100 },
      lineSpacing: 10,
    });
    text.setOrigin(0.5);
    text.setAlpha(0.3);

    this.background = bg;
  }

  protected createCharacters(): void {
    // No characters
  }

  protected createHotspots(): void {
    // None
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      this.scene.start('AdultAct1Scene1');
    });
  }
}
