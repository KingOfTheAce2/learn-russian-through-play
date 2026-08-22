import { SceneScript } from '../types';

/**
 * SIMPLIFIED BUKVAR INTRO - Adult learners
 * Get straight to learning, skip the fluff
 */

export const BUKVAR_INTRO_SIMPLE: SceneScript = {
  id: 'bukvar_intro',
  title: 'Welcome',
  letter: '',
  setup: 'Learn Russian letters through interactive stories.',

  stages: [
    {
      id: 'welcome',
      narration: {
        russian: 'Ð”Ð¾Ð±Ñ€Ð¾ Ð¿Ð¾Ð¶Ð°Ð»Ð¾Ð²Ð°Ñ‚ÑŒ Ð² Ñ€ÑƒÑÑÐºÐ¸Ð¹ Ð°Ð»Ñ„Ð°Ð²Ð¸Ñ‚!',
        transliteration: 'Dobro pozhalovat v russkiy alfavit!',
        translation: 'Welcome to Russian alphabet!',
      },
    },
    {
      id: 'how_it_works',
      narration: {
        russian: 'Ð’Ñ‹ Ð¸Ð·ÑƒÑ‡Ð¸Ñ‚Ðµ 33 Ð±ÑƒÐºÐ²Ñ‹ Ñ‡ÐµÑ€ÐµÐ· Ð¸ÑÑ‚Ð¾Ñ€Ð¸Ð¸ Ð¸ Ð¸Ð³Ñ€Ñ‹.',
        transliteration: 'Vy izuchite 33 bukvy cherez istorii i igry.',
        translation: 'You will learn 33 letters through stories and games.',
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
    russian: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹ Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ?',
    transliteration: 'Gotovy nachat?',
    translation: 'Ready to start?',
    mouthShape: '',
    examples: [],
  },
};
