/**
 * ADULT MODE - ACT 4
 * Letters: О, П, С, Т, Ф, Х
 *
 * Focus: Practical vocabulary, cultural context, grammar patterns
 * No childish stories - real-world Russian usage
 */

import type { SceneScript } from '../types';

// =============================================================================
// SCENE 1: Letter О - "Office"
// =============================================================================

export const ADULT_SCENE_1_O: SceneScript = {
  id: 'adult_act4_scene1',
  title: 'Office',
  letter: 'О',
  setup: 'Business office. О sounds like O.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква О. Звук: "o" (как в "more").',
        transliteration: 'Bukva O. Zvuk: "o" (kak v "more").',
        translation: 'Letter О. Sound: "o" (as in "more").',
      },
    },
    {
      id: 'office_words',
      narration: {
        russian: 'ОФИС, ОН, ОНА, ОНИ, ОТ, ОЧЕНЬ.',
        transliteration: 'OFIS, ON, ONA, ONI, OT, OCHEN.',
        translation: 'OFIS, ON, ONA, ONI, OT, OCHEN.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_o',
        feedback: 'Click the О',
      },
    },
  ],

  letterDiscovery: {
    letter: 'О',
    russian: 'Буква О освоена!',
    transliteration: 'Bukva O osvoena!',
    translation: 'Letter О mastered!',
    mouthShape: 'Round lips, say "oh"',
    examples: ['офис', 'он', 'она', 'они', 'от', 'очень'],
  },
};

// =============================================================================
// SCENE 2: Letter П - "Post Office"
// =============================================================================

export const ADULT_SCENE_2_P: SceneScript = {
  id: 'adult_act4_scene2',
  title: 'Post Office',
  letter: 'П',
  setup: 'Post office. П sounds like P.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква П. Звук: "p" (как в "post").',
        transliteration: 'Bukva P. Zvuk: "p" (kak v "post").',
        translation: 'Letter П. Sound: "p" (as in "post").',
      },
    },
    {
      id: 'post_words',
      narration: {
        russian: 'ПОЧТА, ПИСЬМО, ПО, ПОСЛЕ, ПОЖАЛУЙСТА.',
        transliteration: 'POCHTA, PISMO, PO, POSLE, POZHALUYSTA.',
        translation: 'POCHTA, PISMO, PO, POSLE, POZHALUYSTA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_p',
        feedback: 'Click the П',
      },
    },
  ],

  letterDiscovery: {
    letter: 'П',
    russian: 'Буква П освоена!',
    transliteration: 'Bukva P osvoena!',
    translation: 'Letter П mastered!',
    mouthShape: 'Lips together, pop: "p"',
    examples: ['почта', 'письмо', 'по', 'после', 'пожалуйста'],
  },
};

// =============================================================================
// SCENE 3: Letter С - "Station"
// =============================================================================

export const ADULT_SCENE_3_S: SceneScript = {
  id: 'adult_act4_scene3',
  title: 'Station',
  letter: 'С',
  setup: 'Train station. С sounds like S.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква С. Звук: "s" (как в "station").',
        transliteration: 'Bukva S. Zvuk: "s" (kak v "station").',
        translation: 'Letter С. Sound: "s" (as in "station").',
      },
    },
    {
      id: 'station_words',
      narration: {
        russian: 'СТАНЦИЯ, С, СО, САМ, СВОЙ, СЕЙЧАС.',
        transliteration: 'STANTSIYA, S, SO, SAM, SVOY, SEYCHAS.',
        translation: 'STANTSIYA, S, SO, SAM, SVOY, SEYCHAS.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_s',
        feedback: 'Click the С',
      },
    },
  ],

  letterDiscovery: {
    letter: 'С',
    russian: 'Буква С освоена!',
    transliteration: 'Bukva S osvoena!',
    translation: 'Letter С mastered!',
    mouthShape: 'Tongue behind teeth, hiss: "s"',
    examples: ['станция', 'с', 'со', 'сам', 'свой', 'сейчас'],
  },
};

// =============================================================================
// SCENE 4: Letter Т - "Taxi"
// =============================================================================

export const ADULT_SCENE_4_T: SceneScript = {
  id: 'adult_act4_scene4',
  title: 'Taxi',
  letter: 'Т',
  setup: 'Taxi stand. Т sounds like T.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Т. Звук: "t" (как в "taxi").',
        transliteration: 'Bukva T. Zvuk: "t" (kak v "taxi").',
        translation: 'Letter Т. Sound: "t" (as in "taxi").',
      },
    },
    {
      id: 'taxi_words',
      narration: {
        russian: 'ТАКСИ, ТАМ, ТУТ, ТЫ, ТО, ТОТ.',
        transliteration: 'TAKSI, TAM, TUT, TY, TO, TOT.',
        translation: 'TAKSI, TAM, TUT, TY, TO, TOT.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_t',
        feedback: 'Click the Т',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Т',
    russian: 'Буква Т освоена!',
    transliteration: 'Bukva T osvoena!',
    translation: 'Letter Т mastered!',
    mouthShape: 'Tongue behind teeth, "t"',
    examples: ['такси', 'там', 'тут', 'ты', 'то', 'тот'],
  },
};

// =============================================================================
// SCENE 5: Letter Ф - "Pharmacy"
// =============================================================================

export const ADULT_SCENE_5_F: SceneScript = {
  id: 'adult_act4_scene5',
  title: 'Pharmacy',
  letter: 'Ф',
  setup: 'Pharmacy. Ф sounds like F.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Ф. Звук: "f" (как в английском).',
        transliteration: 'Bukva F. Zvuk: "f" (kak v angliyskom).',
        translation: 'Letter Ф. Sound: "f" (as in English).',
      },
    },
    {
      id: 'pharmacy_words',
      narration: {
        russian: 'ФАРМАЦЕВТ, ФАКТ, ФОТО, ФАМИЛИЯ.',
        transliteration: 'FARMATSEVT, FAKT, FOTO, FAMILIYA.',
        translation: 'FARMATSEVT, FAKT, FOTO, FAMILIYA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_f',
        feedback: 'Click the Ф',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ф',
    russian: 'Буква Ф освоена!',
    transliteration: 'Bukva F osvoena!',
    translation: 'Letter Ф mastered!',
    mouthShape: 'Teeth on lower lip, "f"',
    examples: ['фармацевт', 'факт', 'фото', 'фамилия'],
  },
};

// =============================================================================
// SCENE 6: Letter Х - "Hospital"
// =============================================================================

export const ADULT_SCENE_6_KH: SceneScript = {
  id: 'adult_act4_scene6',
  title: 'Hospital',
  letter: 'Х',
  setup: 'Hospital. Х sounds like KH.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Х. Звук: "kh" (как в "Bach").',
        transliteration: 'Bukva KH. Zvuk: "kh" (kak v "Bach").',
        translation: 'Letter Х. Sound: "kh" (as in "Bach").',
      },
    },
    {
      id: 'hospital_words',
      narration: {
        russian: 'ХИРУРГ, ХОРОШО, ХЛЕБ, ХОЛОД.',
        transliteration: 'KHIRURG, KHOROSHO, KHLEB, KHOLOD.',
        translation: 'KHIRURG, KHOROSHO, KHLEB, KHOLOD.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_kh',
        feedback: 'Click the Х',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Х',
    russian: 'Буква Х освоена!',
    transliteration: 'Bukva KH osvoena!',
    translation: 'Letter Х mastered!',
    mouthShape: 'Throat rasp, like clearing throat',
    examples: ['хирург', 'хорошо', 'хлеб', 'холод'],
  },
};

export const ADULT_ACT4_SCENES = [
  ADULT_SCENE_1_O,
  ADULT_SCENE_2_P,
  ADULT_SCENE_3_S,
  ADULT_SCENE_4_T,
  ADULT_SCENE_5_F,
  ADULT_SCENE_6_KH,
];
