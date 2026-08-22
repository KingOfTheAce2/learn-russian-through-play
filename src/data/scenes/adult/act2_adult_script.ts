/**
 * ADULT MODE - ACT 2
 * Letters: Б, В, Г, Д, Е, Ё
 *
 * Focus: Practical vocabulary, cultural context, grammar patterns
 * No childish stories - real-world Russian usage
 */

import type { SceneScript } from '../types';

// =============================================================================
// SCENE 1: Letter Б - "Bank"
// =============================================================================

export const ADULT_SCENE_1_B: SceneScript = {
  id: 'adult_act2_scene1',
  title: 'Bank',
  letter: 'Б',
  setup: 'At the bank. Б sounds like B.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Б. Звук: "b" (как в английском).',
        transliteration: 'Bukva B. Zvuk: "b" (kak v angliyskom).',
        translation: 'Letter Б. Sound: "b" (as in English).',
      },
    },
    {
      id: 'bank_words',
      narration: {
        russian: 'БАНК, БАНКОМАТ, БИЗНЕС, БЫЛ, БУДЕТ.',
        transliteration: 'BANK, BANKOMAT, BIZNES, BYL, BUDET.',
        translation: 'BANK, BANKOMAT, BIZNES, BYL, BUDET.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_b',
        feedback: 'Click the Б',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Б',
    russian: 'Буква Б освоена!',
    transliteration: 'Bukva B osvoena!',
    translation: 'Letter Б mastered!',
    mouthShape: 'Close lips, release with voice: "b"',
    examples: ['банк', 'банкомат', 'бизнес', 'был', 'будет'],
  },
};

// =============================================================================
// SCENE 2: Letter В - "Visa Office"
// =============================================================================

export const ADULT_SCENE_2_V: SceneScript = {
  id: 'adult_act2_scene2',
  title: 'Visa Office',
  letter: 'В',
  setup: 'Visa office. В sounds like V.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква В. Звук: "v" (как в "visa").',
        transliteration: 'Bukva V. Zvuk: "v" (kak v "visa").',
        translation: 'Letter В. Sound: "v" (as in "visa").',
      },
    },
    {
      id: 'visa_words',
      narration: {
        russian: 'ВИЗА, ВРЕМЯ, В, ВАМ, ВАШ, ВОДА.',
        transliteration: 'VIZA, VREMYA, V, VAM, VASH, VODA.',
        translation: 'VIZA, VREMYA, V, VAM, VASH, VODA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_v',
        feedback: 'Click the В',
      },
    },
  ],

  letterDiscovery: {
    letter: 'В',
    russian: 'Буква В освоена!',
    transliteration: 'Bukva V osvoena!',
    translation: 'Letter В mastered!',
    mouthShape: 'Teeth on lower lip, say "v"',
    examples: ['виза', 'время', 'вам', 'ваш', 'вода'],
  },
};

// =============================================================================
// SCENE 3: Letter Г - "Garage"
// =============================================================================

export const ADULT_SCENE_3_G: SceneScript = {
  id: 'adult_act2_scene3',
  title: 'Garage',
  letter: 'Г',
  setup: 'Renting a car. Г sounds like G.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Г. Звук: "g" (как в "go").',
        transliteration: 'Bukva G. Zvuk: "g" (kak v "go").',
        translation: 'Letter Г. Sound: "g" (as in "go").',
      },
    },
    {
      id: 'garage_words',
      narration: {
        russian: 'ГАРАЖ, ГАЗ, ГОД, ГОРОД, ГДЕ.',
        transliteration: 'GARAZH, GAZ, GOD, GOROD, GDE.',
        translation: 'GARAZH, GAZ, GOD, GOROD, GDE.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_g',
        feedback: 'Click the Г',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Г',
    russian: 'Буква Г освоена!',
    transliteration: 'Bukva G osvoena!',
    translation: 'Letter Г mastered!',
    mouthShape: 'Back of tongue up, "g" sound',
    examples: ['гараж', 'газ', 'год', 'город', 'где'],
  },
};

// =============================================================================
// SCENE 4: Letter Д - "Documents"
// =============================================================================

export const ADULT_SCENE_4_D: SceneScript = {
  id: 'adult_act2_scene4',
  title: 'Documents',
  letter: 'Д',
  setup: 'Document office. Д sounds like D.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Д. Звук: "d" (как в английском).',
        transliteration: 'Bukva D. Zvuk: "d" (kak v angliyskom).',
        translation: 'Letter Д. Sound: "d" (as in English).',
      },
    },
    {
      id: 'document_words',
      narration: {
        russian: 'ДОКУМЕНТ, ДА, ДОМ, ДАТА, ДВА.',
        transliteration: 'DOKUMENT, DA, DOM, DATA, DVA.',
        translation: 'DOKUMENT, DA, DOM, DATA, DVA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_d',
        feedback: 'Click the Д',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Д',
    russian: 'Буква Д освоена!',
    transliteration: 'Bukva D osvoena!',
    translation: 'Letter Д mastered!',
    mouthShape: 'Tongue behind teeth, "d" sound',
    examples: ['документ', 'да', 'дом', 'дата', 'два'],
  },
};

// =============================================================================
// SCENE 5: Letter Е - "Email"
// =============================================================================

export const ADULT_SCENE_5_E: SceneScript = {
  id: 'adult_act2_scene5',
  title: 'Email',
  letter: 'Е',
  setup: 'Internet cafe. Е sounds like YE.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Е. Звук: "ye" (как в "yes").',
        transliteration: 'Bukva E. Zvuk: "ye" (kak v "yes").',
        translation: 'Letter Е. Sound: "ye" (as in "yes").',
      },
    },
    {
      id: 'email_words',
      narration: {
        russian: 'ЕМЕЙЛ, ЕСЛИ, ЕЩЁ, ЕСТЬ, ЕДА.',
        transliteration: 'EMEYL, ESLI, ESHCHYO, EST, EDA.',
        translation: 'EMEYL, ESLI, ESHCHYO, EST, EDA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_e',
        feedback: 'Click the Е',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Е',
    russian: 'Буква Е освоена!',
    transliteration: 'Bukva E osvoena!',
    translation: 'Letter Е mastered!',
    mouthShape: 'Slight "y" then "eh" sound',
    examples: ['емейл', 'если', 'ещё', 'есть', 'еда'],
  },
};

// =============================================================================
// SCENE 6: Letter Ё - "Phone"
// =============================================================================

export const ADULT_SCENE_6_YO: SceneScript = {
  id: 'adult_act2_scene6',
  title: 'Phone',
  letter: 'Ё',
  setup: 'Mobile phone shop. Ё sounds like YO.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Ё. Звук: "yo" (как в "yonder").',
        transliteration: 'Bukva YO. Zvuk: "yo" (kak v "yonder").',
        translation: 'Letter Ё. Sound: "yo" (as in "yonder").',
      },
    },
    {
      id: 'phone_words',
      narration: {
        russian: 'ЁЖ, МЁД, ЕЁ, ЁЛКА.',
        transliteration: 'YOZH, MYOD, YEYO, YOLKA.',
        translation: 'YOZH, MYOD, YEYO, YOLKA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_yo',
        feedback: 'Click the Ё',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ё',
    russian: 'Буква Ё освоена!',
    transliteration: 'Bukva YO osvoena!',
    translation: 'Letter Ё mastered!',
    mouthShape: 'Round lips, "yo" sound',
    examples: ['ёж', 'мёд', 'её', 'ёлка'],
  },
};

export const ADULT_ACT2_SCENES = [
  ADULT_SCENE_1_B,
  ADULT_SCENE_2_V,
  ADULT_SCENE_3_G,
  ADULT_SCENE_4_D,
  ADULT_SCENE_5_E,
  ADULT_SCENE_6_YO,
];
