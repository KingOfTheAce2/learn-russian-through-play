/**
 * ACT 3: "VILLAGE DAYS"
 *
 * Story Script for letters Ð¢, Ð’, ÐŸ, Ð•, Ð”, Ð—
 * Based on Arkhangelskaya 1967 bukvar pedagogy
 *
 * Emotional Arc: Play â†’ Adventure â†’ Learning â†’ Creativity â†’ Giving â†’ Laughter
 * Pedagogy: Verb forms â†’ Dental consonants â†’ Past tense â†’ Iotated vowels
 */

import type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery } from '../types';
export type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery };

// =============================================================================
// SCENE 1: "CAT AND MOUSE" (Letter Ð¢)
// =============================================================================

export const SCENE_1_CAT_MOUSE: SceneScript = {
  id: 'act3_scene1_cat_mouse',
  title: 'Cat and Mouse',
  letter: 'Ð¢',
  setup: 'Kids play a game. Antosha is the cat, Natasha is the mouse.',

  stages: [
    {
      id: 'game_starts',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'ÐÐ½Ñ‚Ð¾ÑˆÐ°! Ð¢Ñ‹ ÐºÐ¾ÑˆÐºÐ°. ÐÐ°Ñ‚Ð°ÑˆÐ°, Ñ‚Ñ‹ Ð¼Ñ‹ÑˆÐºÐ°!',
          transliteration: 'Antosha! Ty koshka. Natasha, ty myshka!',
          translation: 'Antosha! You cat. Natasha, you mouse!',
          sound: 'Ð¢',
        },
      ],
    },
    {
      id: 'chase',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'ÐšÐ¾ÑˆÐºÐ° Ð»Ð¾Ð²Ð¸Ñ‚ Ð¼Ñ‹ÑˆÐºÑƒ! Ð¢ÑƒÑ‚ ÐºÐ¾Ñ‚! Ð¢Ð°Ð¼ Ð¼Ñ‹ÑˆÐºÐ°!',
          transliteration: 'Koshka lovit myshku! Tut kot! Tam myshka!',
          translation: 'Cat catches mouse! Here cat! There mouse!',
          sound: 'Ð¢',
        },
      ],
      interaction: {
        type: 'click',
        target: 'characters',
        feedback: 'Chase around the room!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð¢',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð¢ â€” ÑÐ·Ñ‹Ðº ÐºÐ°ÑÐ°ÐµÑ‚ÑÑ Ð·ÑƒÐ±Ð¾Ð²!',
    transliteration: 'Bukva T â€” yazyk kasaetsya zubov!',
    translation: 'Letter T â€” tongue touches teeth!',
    mouthShape: 'Tongue tip on teeth (dental, not alveolar)',
    examples: ['Ð¢ÑƒÑ‚', 'Ñ‚Ð°Ð¼', 'ÐÐ°Ñ‚Ð°ÑˆÐ°', 'ÐÐ½Ñ‚Ð¾ÑˆÐ°'],
  },
};

// =============================================================================
// SCENE 2: "FISHING" (Letter Ð’)
// =============================================================================

export const SCENE_2_FISHING: SceneScript = {
  id: 'act3_scene2_fishing',
  title: 'Fishing',
  letter: 'Ð’',
  setup: 'Vova and Ivan go fishing. They catch fish and cook soup.',

  stages: [
    {
      id: 'at_river',
      narration: {
        russian: 'Ð£ Ð¸Ð²Ñ‹ ÑˆÐ°Ð»Ð°Ñˆ. Ð’Ð¾Ð²Ð° Ð¸ Ð˜Ð²Ð°Ð½ Ð»Ð¾Ð²Ð¸Ð»Ð¸ Ñ€Ñ‹Ð±Ñƒ.',
        transliteration: 'U ivy shalash. Vova i Ivan lovili rybu.',
        translation: 'By willow hut. Vova and Ivan caught fish.',
      },
    },
    {
      id: 'cooking',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'excited',
          russian: 'Ð¡Ð¸Ð¼Ð°, Ð²Ð°Ñ€Ð¸ ÑƒÑ…Ñƒ! Ð’-Ð²-Ð²! Ð’Ð°Ñ€Ð¸Ð»Ð¸, Ð²Ð°Ñ€Ð¸Ð»Ð¸!',
          transliteration: 'Sima, vari ukhu! V-v-v! Varili, varili!',
          translation: 'Sima, cook soup! V-v-v! Were cooking, were cooking!',
          sound: 'Ð’',
        },
      ],
      interaction: {
        type: 'click',
        target: 'pot',
        feedback: 'Stir the fish soup!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð’',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð’ â€” ÐºÐ°Ðº Ð°Ð½Ð³Ð»Ð¸Ð¹ÑÐºÐ°Ñ "V"!',
    transliteration: 'Bukva V â€” kak angliyskaya "V"!',
    translation: 'Letter Ð’ â€” like English "V"!',
    mouthShape: 'Teeth on lower lip, like "vine"',
    examples: ['Ð’Ð¾Ð²Ð°', 'Ð˜Ð²Ð°Ð½', 'Ð¸Ð²Ð°', 'Ð²Ð°Ñ€Ð¸Ð»Ð¸'],
  },
};

// =============================================================================
// SCENE 3: "LESSONS" (Letter ÐŸ)
// =============================================================================

export const SCENE_3_LESSONS: SceneScript = {
  id: 'act3_scene3_lessons',
  title: 'Lessons',
  letter: 'ÐŸ',
  setup: 'Papa helps kids with homework.',

  stages: [
    {
      id: 'homework_time',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'ÐŸÐ°ÑˆÐ°, Ð¿Ð¸ÑˆÐ¸! Ð¡Ð¸Ð¼Ð°, Ð¿Ð¸ÑˆÐ¸!',
          transliteration: 'Pasha, pishi! Sima, pishi!',
          translation: 'Pasha, write! Sima, write!',
          sound: 'ÐŸ',
        },
      ],
    },
    {
      id: 'finished',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'happy',
          russian: 'ÐŸÐ°ÑˆÐ° Ð¸ Ð¡Ð¸Ð¼Ð° Ð½Ð°Ð¿Ð¸ÑÐ°Ð»Ð¸ Ñ…Ð¾Ñ€Ð¾ÑˆÐ¾! ÐŸ-Ð¿-Ð¿!',
          transliteration: 'Pasha i Sima napisali khorosho! P-p-p!',
          translation: 'Pasha and Sima wrote well! P-p-p!',
          sound: 'ÐŸ',
        },
      ],
      interaction: {
        type: 'sequence',
        target: 'writing',
        feedback: 'Help write the letters!',
        items: ['П', 'А', 'П', 'А'],
      },
    },
  ],

  letterDiscovery: {
    letter: 'ÐŸ',
    russian: 'Ð‘ÑƒÐºÐ²Ð° ÐŸ â€” Ð¿Ð°Ð¿Ð° Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÐµÑ‚ Ð¿Ð¸ÑÐ°Ñ‚ÑŒ!',
    transliteration: 'Bukva P â€” papa pomogaet pisat!',
    translation: 'Letter ÐŸ â€” papa helps write!',
    mouthShape: 'Unaspirated "p", lips together',
    examples: ['Ð¿Ð°Ð¿Ð°', 'ÐŸÐ°ÑˆÐ°', 'Ð¿Ð¸ÑˆÐ¸', 'Ð½Ð°Ð¿Ð¸ÑÐ°Ð»Ð¸'],
  },
};

// =============================================================================
// SCENE 4: "DRAWING" (Letter Ð•)
// =============================================================================

export const SCENE_4_DRAWING: SceneScript = {
  id: 'act3_scene4_drawing',
  title: 'Drawing',
  letter: 'Ð•',
  setup: 'Kids come home and draw pictures.',

  stages: [
    {
      id: 'getting_ready',
      narration: {
        russian: 'ÐŸÑ€Ð¸ÑˆÐ»Ð¸ ÑÐ¾ Ð´Ð²Ð¾Ñ€Ð°. Ð”Ð¾ÑÑ‚Ð°Ð»Ð¸ Ð°Ð»ÑŒÐ±Ð¾Ð¼Ñ‹, ÐºÐ°Ñ€Ð°Ð½Ð´Ð°ÑˆÐ¸.',
        transliteration: 'Prishli so dvora. Dostali albomy, karandashi.',
        translation: 'Came from yard. Got albums, pencils.',
      },
    },
    {
      id: 'drawing_scene',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'happy',
          russian: 'Ð¡Ð»Ð°Ð²Ð° Ñ€Ð¸ÑÑƒÐµÑ‚ ÐµÐ»ÑŒ! Ð•-Ðµ-Ðµ! Ð£ ÐµÐ»Ð¸ Ð·Ð°Ð¹ÐºÐ°!',
          transliteration: 'Slava risuet yel! Ye-ye-ye! U yeli zayka!',
          translation: 'Slava draws fir-tree! Ye-ye-ye! By fir bunny!',
          sound: 'Ð•',
        },
      ],
      interaction: {
        type: 'click',
        target: 'drawings',
        feedback: 'Look at the drawings!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð•',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð• â€” ÑÑ‚Ð¾ "Ð¹Ðµ"! Ð¡Ð¼ÑÐ³Ñ‡Ð°ÐµÑ‚ ÑÐ¾Ð³Ð»Ð°ÑÐ½Ñ‹Ðµ!',
    transliteration: 'Bukva E â€” eto "ye"! Smyagchaet soglasnye!',
    translation: 'Letter Ð• â€” this "ye"! Softens consonants!',
    mouthShape: 'Start with "y", then "e" as in "yes"',
    examples: ['ÐµÐ»ÑŒ', 'Ñ€Ð¸ÑÑƒÐµÐ¼', 'Ñƒ ÐµÐ»Ð¸'],
  },
};

// =============================================================================
// SCENE 5: "GIFTS" (Letter Ð”)
// =============================================================================

export const SCENE_5_GIFTS: SceneScript = {
  id: 'act3_scene5_gifts',
  title: 'Gifts',
  letter: 'Ð”',
  setup: 'Kids visit kindergarten with gifts.',

  stages: [
    {
      id: 'arriving',
      narration: {
        russian: 'ÐÐ°ÑˆÐ¸ Ð¼Ð°Ð»Ñ‹ÑˆÐ¸ Ð² ÑÐ°Ð´Ñƒ. ÐœÑ‹ Ðº Ð½Ð¸Ð¼ Ñ…Ð¾Ð´Ð¸Ð¼.',
        transliteration: 'Nashi malyshi v sadu. My k nim khodim.',
        translation: 'Our little-ones in garden. We to them visit.',
      },
    },
    {
      id: 'giving_gifts',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð’Ð¾Ñ‚ Ð²Ð°Ð¼ Ð¿Ð¾Ð´Ð°Ñ€ÐºÐ¸! Ð”-Ð´-Ð´! Ð”Ð¾Ð¼Ð¸Ðº! ÐšÑƒÐºÐ»Ð°!',
          transliteration: 'Vot vam podarki! D-d-d! Domik! Kukla!',
          translation: 'Here you gifts! D-d-d! House! Doll!',
          sound: 'Ð”',
        },
      ],
      interaction: {
        type: 'click',
        target: 'gifts',
        feedback: 'Give toys to kids!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð”',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð” â€” Ð´Ð°Ñ€Ð¸Ð¼ Ð¿Ð¾Ð´Ð°Ñ€ÐºÐ¸!',
    transliteration: 'Bukva D â€” darim podarki!',
    translation: 'Letter Ð” â€” we-give gifts!',
    mouthShape: 'Tongue on teeth, like dental "d"',
    examples: ['Ð´Ð¾Ð¼', 'Ð´Ð¾Ð¼Ð¸Ðº', 'Ð¿Ð¾Ð´Ð°Ñ€ÐºÐ¸', 'Ð´Ð°Ñ€Ð¸Ð¼'],
  },
};

// =============================================================================
// SCENE 6: "MILKA THE GOAT" (Letter Ð—)
// =============================================================================

export const SCENE_6_MILKA: SceneScript = {
  id: 'act3_scene6_milka',
  title: 'Milka the Goat',
  letter: 'Ð—',
  setup: 'Zina\'s goat goes missing. But Milka was behind them all along!',

  stages: [
    {
      id: 'goat_missing',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'worried',
          russian: 'Ð˜Ð· ÑÑ‚Ð°Ð´Ð° Ð¿Ñ€Ð¾Ð¿Ð°Ð»Ð° ÐºÐ¾Ð·Ð° ÐœÐ¸Ð»ÐºÐ°! Ð—-Ð·-Ð·!',
          transliteration: 'Iz stada propala koza Milka! Z-z-z!',
          translation: 'From herd disappeared goat Milka! Z-z-z!',
          sound: 'Ð—',
        },
      ],
    },
    {
      id: 'goat_found',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'relieved',
          russian: 'Ð”Ð° Ð²Ð¾Ñ‚ ÐœÐ¸Ð»ÐºÐ°! ÐžÐ½Ð° ÑÐ·Ð°Ð´Ð¸ ÑÑ‚Ð¾Ð¸Ñ‚! Ð’Ð¾Ñ‚ Ñ‚Ð°Ðº ÐœÐ¸Ð»ÐºÐ°!',
          transliteration: 'Da vot Milka! Ona szadi stoit! Vot tak Milka!',
          translation: 'Yes here Milka! She behind stands! That\'s Milka!',
        },
      ],
      interaction: {
        type: 'click',
        target: 'goat',
        feedback: 'Find Milka hiding behind!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð—',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð— â€” Ð·Ð²Ð¾Ð½ÐºÐ¸Ð¹ Ð·Ð²ÑƒÐº!',
    transliteration: 'Bukva Z â€” zvonkiy zvuk!',
    translation: 'Letter Ð— â€” voiced sound!',
    mouthShape: 'Like "z" in "zoo"',
    examples: ['ÐºÐ¾Ð·Ð°', 'Ð—Ð¸Ð½Ð°', 'ÑÐ·Ð°Ð´Ð¸', 'Ð·Ð²Ð°Ð»Ð¸'],
  },
};

export const ACT3_SCENES: SceneScript[] = [
  SCENE_1_CAT_MOUSE,
  SCENE_2_FISHING,
  SCENE_3_LESSONS,
  SCENE_4_DRAWING,
  SCENE_5_GIFTS,
  SCENE_6_MILKA,
];
