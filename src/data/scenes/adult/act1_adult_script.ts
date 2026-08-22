/**
 * ADULT MODE - ACT 1
 * Letters: А, У, М, Ш, Р, Н
 *
 * Focus: Practical vocabulary, cultural context, grammar patterns
 * No childish stories - real-world Russian usage
 */

import type { SceneScript } from '../types';

// =============================================================================
// SCENE 1: Letter А - "At the Airport"
// =============================================================================

export const ADULT_SCENE_1_A: SceneScript = {
  id: 'adult_act1_scene1',
  title: 'Airport Arrival',
  letter: 'А',
  setup: 'You arrive at Moscow airport. Understanding А is essential.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква А. Звук: "ah" (как в "father").',
        transliteration: 'Bukva A. Zvuk: "ah" (kak v "father").',
        translation: 'Letter А. Sound: "ah" (as in "father").',
      },
    },
    {
      id: 'practical_words',
      narration: {
        russian: 'АЭРОПОРТ, АВТОБУС, АПТЕКА, АДРЕС.',
        transliteration: 'AEROPORT, AVTOBUS, APTEKA, ADRES.',
        translation: 'AEROPORT, AVTOBUS, APTEKA, ADRES.',
      },
    },
    {
      id: 'interaction_collect',
      narration: {
        russian: 'Найдите букву А.',
        transliteration: 'Naydite bukvu A.',
        translation: 'Find letter А.',
      },
      interaction: {
        type: 'collect',
        target: 'letter_a',
        feedback: 'Click the А',
      },
    },
  ],

  letterDiscovery: {
    letter: 'А',
    russian: 'Буква А освоена!',
    transliteration: 'Bukva A osvoena!',
    translation: 'Letter А mastered!',
    mouthShape: 'Open mouth wide, like saying "ahhh" at doctor',
    examples: ['аэропорт', 'автобус', 'аптека', 'адрес', 'актёр'],
  },
};

// =============================================================================
// SCENE 2: Letter У - "At the Restaurant"
// =============================================================================

export const ADULT_SCENE_2_U: SceneScript = {
  id: 'adult_act1_scene2',
  title: 'Restaurant',
  letter: 'У',
  setup: 'Ordering food. Letter У appears in common phrases.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква У. Звук: "oo" (как в "moon").',
        transliteration: 'Bukva U. Zvuk: "oo" (kak v "moon").',
        translation: 'Letter У. Sound: "oo" (as in "moon").',
      },
    },
    {
      id: 'common_words',
      narration: {
        russian: 'УТРО, УЛИЦА, УЖИН. У МЕНЯ (I have).',
        transliteration: 'UTRO, ULITSA, UZHIN. U MENYA (I have).',
        translation: 'UTRO, ULITSA, UZHIN. U MENYA (I have).',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_u',
        feedback: 'Click the У',
      },
    },
  ],

  letterDiscovery: {
    letter: 'У',
    russian: 'Буква У освоена!',
    transliteration: 'Bukva U osvoena!',
    translation: 'Letter У mastered!',
    mouthShape: 'Round lips, say "oo" like in "moon"',
    examples: ['утро', 'улица', 'ужин', 'у меня', 'у вас'],
  },
};

// =============================================================================
// SCENE 3: Letter М - "Metro Station"
// =============================================================================

export const ADULT_SCENE_3_M: SceneScript = {
  id: 'adult_act1_scene3',
  title: 'Metro',
  letter: 'М',
  setup: 'Moscow metro. М is everywhere.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква М. Звук: "m" (как в английском).',
        transliteration: 'Bukva M. Zvuk: "m" (kak v angliyskom).',
        translation: 'Letter М. Sound: "m" (as in English).',
      },
    },
    {
      id: 'essential_words',
      narration: {
        russian: 'МЕТРО, МЫ, МОЙ, МОЖНО, МНОГО, МУЗЕЙ.',
        transliteration: 'METRO, MY, MOY, MOZHNO, MNOGO, MUZEY.',
        translation: 'METRO, MY, MOY, MOZHNO, MNOGO, MUZEY.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_m',
        feedback: 'Click the М',
      },
    },
  ],

  letterDiscovery: {
    letter: 'М',
    russian: 'Буква М освоена!',
    transliteration: 'Bukva M osvoena!',
    translation: 'Letter М mastered!',
    mouthShape: 'Close lips, hum like "mmm"',
    examples: ['метро', 'мы', 'мой', 'можно', 'много', 'музей'],
  },
};

// =============================================================================
// SCENE 4: Letter Ш - "Shop"
// =============================================================================

export const ADULT_SCENE_4_SH: SceneScript = {
  id: 'adult_act1_scene4',
  title: 'Shop',
  letter: 'Ш',
  setup: 'Shopping in Moscow. Ш is the "sh" sound.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Ш. Звук: "sh" (как в "shop").',
        transliteration: 'Bukva SH. Zvuk: "sh" (kak v "shop").',
        translation: 'Letter Ш. Sound: "sh" (as in "shop").',
      },
    },
    {
      id: 'shop_words',
      narration: {
        russian: 'ШОКОЛАД, ШАМПУНЬ, ШАР, ШУМ.',
        transliteration: 'SHOKOLAD, SHAMPUN, SHAR, SHUM.',
        translation: 'SHOKOLAD, SHAMPUN, SHAR, SHUM.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_sh',
        feedback: 'Click the Ш',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ш',
    russian: 'Буква Ш освоена!',
    transliteration: 'Bukva SH osvoena!',
    translation: 'Letter Ш mastered!',
    mouthShape: 'Press tongue to roof of mouth, "sh"',
    examples: ['шоколад', 'шампунь', 'шар', 'шум', 'наша'],
  },
};

// =============================================================================
// SCENE 5: Letter Р - "Restaurant Menu"
// =============================================================================

export const ADULT_SCENE_5_R: SceneScript = {
  id: 'adult_act1_scene5',
  title: 'Restaurant Menu',
  letter: 'Р',
  setup: 'Reading the menu. Р is the rolled R sound.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Р. Звук: раскатистое "r".',
        transliteration: 'Bukva R. Zvuk: raskatistoye "r".',
        translation: 'Letter Р. Sound: rolled "r".',
      },
    },
    {
      id: 'menu_words',
      narration: {
        russian: 'РЕСТОРАН, РИС, РЫБА, РУЧКА.',
        transliteration: 'RESTORAN, RIS, RYBA, RUCHKA.',
        translation: 'RESTORAN, RIS, RYBA, RUCHKA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_r',
        feedback: 'Click the Р',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Р',
    russian: 'Буква Р освоена!',
    transliteration: 'Bukva R osvoena!',
    translation: 'Letter Р mastered!',
    mouthShape: 'Roll tongue, trill the "r"',
    examples: ['ресторан', 'рис', 'рыба', 'ручка', 'ура'],
  },
};

// =============================================================================
// SCENE 6: Letter Н - "Hotel"
// =============================================================================

export const ADULT_SCENE_6_N: SceneScript = {
  id: 'adult_act1_scene6',
  title: 'Hotel',
  letter: 'Н',
  setup: 'Checking into a hotel. Н is the N sound.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Н. Звук: "n" (как в английском).',
        transliteration: 'Bukva N. Zvuk: "n" (kak v angliyskom).',
        translation: 'Letter Н. Sound: "n" (as in English).',
      },
    },
    {
      id: 'hotel_words',
      narration: {
        russian: 'НОМЕР, НОЧ, НА, НАМ, НАША.',
        transliteration: 'NOMER, NOCH, NA, NAM, NASHA.',
        translation: 'NOMER, NOCH, NA, NAM, NASHA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_n',
        feedback: 'Click the Н',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Н',
    russian: 'Буква Н освоена!',
    transliteration: 'Bukva N osvoena!',
    translation: 'Letter Н mastered!',
    mouthShape: 'Tongue behind teeth, say "n"',
    examples: ['номер', 'ночь', 'на', 'нам', 'наша'],
  },
};

export const ADULT_ACT1_SCENES = [
  ADULT_SCENE_1_A,
  ADULT_SCENE_2_U,
  ADULT_SCENE_3_M,
  ADULT_SCENE_4_SH,
  ADULT_SCENE_5_R,
  ADULT_SCENE_6_N,
];
