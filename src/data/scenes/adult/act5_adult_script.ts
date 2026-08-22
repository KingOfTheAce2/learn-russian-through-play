/**
 * ADULT MODE - ACT 5
 * Letters: Ц, Ч, Щ, Э, Ю, Ы (with Ъ, Ь combined in final scene)
 *
 * Focus: Practical vocabulary, cultural context, grammar patterns
 * No childish stories - real-world Russian usage
 */

import type { SceneScript } from '../types';

// =============================================================================
// SCENE 1: Letter Ц - "Center"
// =============================================================================

export const ADULT_SCENE_1_TS: SceneScript = {
  id: 'adult_act5_scene1',
  title: 'Center',
  letter: 'Ц',
  setup: 'City center. Ц sounds like TS.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Ц. Звук: "ts" (как в "cats").',
        transliteration: 'Bukva TS. Zvuk: "ts" (kak v "cats").',
        translation: 'Letter Ц. Sound: "ts" (as in "cats").',
      },
    },
    {
      id: 'center_words',
      narration: {
        russian: 'ЦЕНТР, ЦЕНА, ЦИРК, КОНЕЦ.',
        transliteration: 'TSENTR, TSENA, TSIRK, KONETS.',
        translation: 'TSENTR, TSENA, TSIRK, KONETS.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_ts',
        feedback: 'Click the Ц',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ц',
    russian: 'Буква Ц освоена!',
    transliteration: 'Bukva TS osvoena!',
    translation: 'Letter Ц mastered!',
    mouthShape: 'Tongue behind teeth, "ts"',
    examples: ['центр', 'цена', 'цирк', 'конец'],
  },
};

// =============================================================================
// SCENE 2: Letter Ч - "Tea"
// =============================================================================

export const ADULT_SCENE_2_CH: SceneScript = {
  id: 'adult_act5_scene2',
  title: 'Tea',
  letter: 'Ч',
  setup: 'Tea house. Ч sounds like CH.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Ч. Звук: "ch" (как в "church").',
        transliteration: 'Bukva CH. Zvuk: "ch" (kak v "church").',
        translation: 'Letter Ч. Sound: "ch" (as in "church").',
      },
    },
    {
      id: 'tea_words',
      narration: {
        russian: 'ЧАЙ, ЧАС, ЧТО, ЧЕЛОВЕК, ЧИСЛО.',
        transliteration: 'CHAY, CHAS, CHTO, CHELOVEK, CHISLO.',
        translation: 'CHAY, CHAS, CHTO, CHELOVEK, CHISLO.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_ch',
        feedback: 'Click the Ч',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ч',
    russian: 'Буква Ч освоена!',
    transliteration: 'Bukva CH osvoena!',
    translation: 'Letter Ч mastered!',
    mouthShape: 'Tongue to roof, "ch"',
    examples: ['чай', 'час', 'что', 'человек', 'число'],
  },
};

// =============================================================================
// SCENE 3: Letter Щ - "Borscht"
// =============================================================================

export const ADULT_SCENE_3_SHCH: SceneScript = {
  id: 'adult_act5_scene3',
  title: 'Borscht',
  letter: 'Щ',
  setup: 'Russian restaurant. Щ sounds like SHCH.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Щ. Звук: "shch" (долгое "sh").',
        transliteration: 'Bukva SHCH. Zvuk: "shch" (dolgoye "sh").',
        translation: 'Letter Щ. Sound: "shch" (long "sh").',
      },
    },
    {
      id: 'food_words',
      narration: {
        russian: 'БОРЩ, ЩИ, ЕЩЁ, ВЕЩЬ, ИЩЕТ.',
        transliteration: 'BORSHCH, SHCHI, ESHCHYO, VESHCH, ISHCHET.',
        translation: 'BORSHCH, SHCHI, ESHCHYO, VESHCH, ISHCHET.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_shch',
        feedback: 'Click the Щ',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Щ',
    russian: 'Буква Щ освоена!',
    transliteration: 'Bukva SHCH osvoena!',
    translation: 'Letter Щ mastered!',
    mouthShape: 'Elongated "sh" sound',
    examples: ['борщ', 'щи', 'ещё', 'вещь', 'ищет'],
  },
};

// =============================================================================
// SCENE 4: Letter Э - "Email"
// =============================================================================

export const ADULT_SCENE_4_E: SceneScript = {
  id: 'adult_act5_scene4',
  title: 'Email',
  letter: 'Э',
  setup: 'Computer lab. Э sounds like E.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Э. Звук: "e" (как в "met").',
        transliteration: 'Bukva E. Zvuk: "e" (kak v "met").',
        translation: 'Letter Э. Sound: "e" (as in "met").',
      },
    },
    {
      id: 'computer_words',
      narration: {
        russian: 'ЭТО, ЭКРАН, ЭКОНОМИКА, ЭХО.',
        transliteration: 'ETO, EKRAN, EKONOMIKA, EKHO.',
        translation: 'ETO, EKRAN, EKONOMIKA, EKHO.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_e',
        feedback: 'Click the Э',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Э',
    russian: 'Буква Э освоена!',
    transliteration: 'Bukva E osvoena!',
    translation: 'Letter Э mastered!',
    mouthShape: 'Open mouth, "eh" sound',
    examples: ['это', 'экран', 'экономика', 'эхо'],
  },
};

// =============================================================================
// SCENE 5: Letter Ю - "Union"
// =============================================================================

export const ADULT_SCENE_5_YU: SceneScript = {
  id: 'adult_act5_scene5',
  title: 'Union',
  letter: 'Ю',
  setup: 'Trade union office. Ю sounds like YU.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Ю. Звук: "yu" (как в "you").',
        transliteration: 'Bukva YU. Zvuk: "yu" (kak v "you").',
        translation: 'Letter Ю. Sound: "yu" (as in "you").',
      },
    },
    {
      id: 'union_words',
      narration: {
        russian: 'ЮГ, ЮЖНЫЙ, ЮЛА, ПОЮ.',
        transliteration: 'YUG, YUZHNYY, YULA, POYU.',
        translation: 'YUG, YUZHNYY, YULA, POYU.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_yu',
        feedback: 'Click the Ю',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ю',
    russian: 'Буква Ю освоена!',
    transliteration: 'Bukva YU osvoena!',
    translation: 'Letter Ю mastered!',
    mouthShape: 'Round lips, say "you"',
    examples: ['юг', 'южный', 'юла', 'пою'],
  },
};

// =============================================================================
// SCENE 6: Letter Ы + Special Signs - "Grammar"
// =============================================================================

export const ADULT_SCENE_6_Y_SIGNS: SceneScript = {
  id: 'adult_act5_scene6',
  title: 'Grammar',
  letter: 'Ы',
  setup: 'Language school. Final letters: Ы, Я, Ъ, Ь.',

  stages: [
    {
      id: 'letter_y',
      narration: {
        russian: 'Буква Ы. Звук: глубокое "i" (нет в английском).',
        transliteration: 'Bukva Y. Zvuk: glubokoye "i" (net v angliyskom).',
        translation: 'Letter Ы. Sound: deep "i" (no English equivalent).',
      },
    },
    {
      id: 'y_words',
      narration: {
        russian: 'МЫ, ВЫ, СЫР, БЫЛ, РЫБА.',
        transliteration: 'MY, VY, SYR, BYL, RYBA.',
        translation: 'MY, VY, SYR, BYL, RYBA.',
      },
    },
    {
      id: 'letter_ya',
      narration: {
        russian: 'Буква Я. Звук: "ya" (как в "yard"). Я, ЯМА, МОЯ.',
        transliteration: 'Bukva YA. Zvuk: "ya" (kak v "yard"). YA, YAMA, MOYA.',
        translation: 'Letter Я. Sound: "ya" (as in "yard"). YA, YAMA, MOYA.',
      },
    },
    {
      id: 'special_signs',
      narration: {
        russian: 'Ъ (твёрдый знак), Ь (мягкий знак) — специальные знаки.',
        transliteration: 'TVYORDYY ZNAK, MYAGKIY ZNAK — spetsialnyye znaki.',
        translation: 'Hard sign (Ъ), soft sign (Ь) — special signs.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'all_letters',
        feedback: 'Complete the alphabet',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ы',
    russian: 'Все 33 буквы освоены! Поздравляем!',
    transliteration: 'Vse 33 bukvy osvoeny! Pozdravlyayem!',
    translation: 'All 33 letters mastered! Congratulations!',
    mouthShape: 'Pull tongue back, say deep "i"',
    examples: ['мы', 'вы', 'сыр', 'был', 'рыба', 'я (Я)', 'съел (Ъ)', 'мать (Ь)'],
  },
};

export const ADULT_ACT5_SCENES = [
  ADULT_SCENE_1_TS,
  ADULT_SCENE_2_CH,
  ADULT_SCENE_3_SHCH,
  ADULT_SCENE_4_E,
  ADULT_SCENE_5_YU,
  ADULT_SCENE_6_Y_SIGNS,
];
