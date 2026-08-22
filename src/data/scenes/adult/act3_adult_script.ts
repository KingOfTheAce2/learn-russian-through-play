/**
 * ADULT MODE - ACT 3
 * Letters: Ж, З, И, Й, К, Л
 *
 * Focus: Practical vocabulary, cultural context, grammar patterns
 * No childish stories - real-world Russian usage
 */

import type { SceneScript } from '../types';

// =============================================================================
// SCENE 1: Letter Ж - "Magazine"
// =============================================================================

export const ADULT_SCENE_1_ZH: SceneScript = {
  id: 'adult_act3_scene1',
  title: 'Magazine',
  letter: 'Ж',
  setup: 'Magazine shop. Ж sounds like ZH.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Ж. Звук: "zh" (как в "pleasure").',
        transliteration: 'Bukva ZH. Zvuk: "zh" (kak v "pleasure").',
        translation: 'Letter Ж. Sound: "zh" (as in "pleasure").',
      },
    },
    {
      id: 'magazine_words',
      narration: {
        russian: 'ЖУРНАЛ, ЖЕНА, ЖИТЬ, ЖЕ.',
        transliteration: 'ZHURNAL, ZHENA, ZHIT, ZHE.',
        translation: 'ZHURNAL, ZHENA, ZHIT, ZHE.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_zh',
        feedback: 'Click the Ж',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ж',
    russian: 'Буква Ж освоена!',
    transliteration: 'Bukva ZH osvoena!',
    translation: 'Letter Ж mastered!',
    mouthShape: 'Tongue up, vibrate: "zh"',
    examples: ['журнал', 'жена', 'жить', 'же'],
  },
};

// =============================================================================
// SCENE 2: Letter З - "Zoo"
// =============================================================================

export const ADULT_SCENE_2_Z: SceneScript = {
  id: 'adult_act3_scene2',
  title: 'Zoo',
  letter: 'З',
  setup: 'Moscow zoo. З sounds like Z.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква З. Звук: "z" (как в "zoo").',
        transliteration: 'Bukva Z. Zvuk: "z" (kak v "zoo").',
        translation: 'Letter З. Sound: "z" (as in "zoo").',
      },
    },
    {
      id: 'zoo_words',
      narration: {
        russian: 'ЗООПАРК, ЗУБ, ЗДЕСЬ, ЗА, ЗВУК.',
        transliteration: 'ZOOPARK, ZUB, ZDES, ZA, ZVUK.',
        translation: 'ZOOPARK, ZUB, ZDES, ZA, ZVUK.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_z',
        feedback: 'Click the З',
      },
    },
  ],

  letterDiscovery: {
    letter: 'З',
    russian: 'Буква З освоена!',
    transliteration: 'Bukva Z osvoena!',
    translation: 'Letter З mastered!',
    mouthShape: 'Tongue behind teeth, buzz: "z"',
    examples: ['зоопарк', 'зуб', 'здесь', 'за', 'звук'],
  },
};

// =============================================================================
// SCENE 3: Letter И - "Internet"
// =============================================================================

export const ADULT_SCENE_3_I: SceneScript = {
  id: 'adult_act3_scene3',
  title: 'Internet',
  letter: 'И',
  setup: 'Internet cafe. И sounds like EE.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква И. Звук: "ee" (как в "meet").',
        transliteration: 'Bukva I. Zvuk: "ee" (kak v "meet").',
        translation: 'Letter И. Sound: "ee" (as in "meet").',
      },
    },
    {
      id: 'internet_words',
      narration: {
        russian: 'ИНТЕРНЕТ, ИЛИ, ИМЯ, ИХ, ИЗ.',
        transliteration: 'INTERNET, ILI, IMYA, IKH, IZ.',
        translation: 'INTERNET, ILI, IMYA, IKH, IZ.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_i',
        feedback: 'Click the И',
      },
    },
  ],

  letterDiscovery: {
    letter: 'И',
    russian: 'Буква И освоена!',
    transliteration: 'Bukva I osvoena!',
    translation: 'Letter И mastered!',
    mouthShape: 'Smile, say "ee"',
    examples: ['интернет', 'или', 'имя', 'их', 'из'],
  },
};

// =============================================================================
// SCENE 4: Letter Й - "My, Your"
// =============================================================================

export const ADULT_SCENE_4_Y: SceneScript = {
  id: 'adult_act3_scene4',
  title: 'My, Your',
  letter: 'Й',
  setup: 'Possessive words. Й is short Y.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Й. Звук: краткое "y" (как в "boy").',
        transliteration: 'Bukva Y. Zvuk: kratkoye "y" (kak v "boy").',
        translation: 'Letter Й. Sound: short "y" (as in "boy").',
      },
    },
    {
      id: 'possessive_words',
      narration: {
        russian: 'МОЙ, ТВОЙ, ЧАЙ, КРАЙ.',
        transliteration: 'MOY, TVOY, CHAY, KRAY.',
        translation: 'MOY, TVOY, CHAY, KRAY.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'collect',
        target: 'letter_y',
        feedback: 'Click the Й',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Й',
    russian: 'Буква Й освоена!',
    transliteration: 'Bukva Y osvoena!',
    translation: 'Letter Й mastered!',
    mouthShape: 'Brief "y" glide sound',
    examples: ['мой', 'твой', 'чай', 'край'],
  },
};

// =============================================================================
// SCENE 5: Letter К - "Cafe"
// =============================================================================

export const ADULT_SCENE_5_K: SceneScript = {
  id: 'adult_act3_scene5',
  title: 'Cafe',
  letter: 'К',
  setup: 'Coffee shop. К sounds like K.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква К. Звук: "k" (как в "cafe").',
        transliteration: 'Bukva K. Zvuk: "k" (kak v "cafe").',
        translation: 'Letter К. Sound: "k" (as in "cafe").',
      },
    },
    {
      id: 'cafe_words',
      narration: {
        russian: 'КАФЕ, КОФЕ, КАК, КТО, КОГДА.',
        transliteration: 'KAFE, KOFE, KAK, KTO, KOGDA.',
        translation: 'KAFE, KOFE, KAK, KTO, KOGDA.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'click',
        target: 'letter_k',
        feedback: 'Click the К',
      },
    },
  ],

  letterDiscovery: {
    letter: 'К',
    russian: 'Буква К освоена!',
    transliteration: 'Bukva K osvoena!',
    translation: 'Letter К mastered!',
    mouthShape: 'Back of tongue up, "k"',
    examples: ['кафе', 'кофе', 'как', 'кто', 'когда'],
  },
};

// =============================================================================
// SCENE 6: Letter Л - "Lamp"
// =============================================================================

export const ADULT_SCENE_6_L: SceneScript = {
  id: 'adult_act3_scene6',
  title: 'Lamp',
  letter: 'Л',
  setup: 'Light shop. Л sounds like L.',

  stages: [
    {
      id: 'letter_intro',
      narration: {
        russian: 'Буква Л. Звук: "l" (как в "lamp").',
        transliteration: 'Bukva L. Zvuk: "l" (kak v "lamp").',
        translation: 'Letter Л. Sound: "l" (as in "lamp").',
      },
    },
    {
      id: 'lamp_words',
      narration: {
        russian: 'ЛАМПА, ЛЕТО, ЛИ, ЛЮДИ, ЛЮБИТЬ.',
        transliteration: 'LAMPA, LETO, LI, LYUDI, LYUBIT.',
        translation: 'LAMPA, LETO, LI, LYUDI, LYUBIT.',
      },
    },
    {
      id: 'interaction',
      interaction: {
        type: 'sequence',
        target: 'letter_l',
        feedback: 'Click the Л',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Л',
    russian: 'Буква Л освоена!',
    transliteration: 'Bukva L osvoena!',
    translation: 'Letter Л mastered!',
    mouthShape: 'Tongue behind teeth, "l"',
    examples: ['лампа', 'лето', 'ли', 'люди', 'любить'],
  },
};

export const ADULT_ACT3_SCENES = [
  ADULT_SCENE_1_ZH,
  ADULT_SCENE_2_Z,
  ADULT_SCENE_3_I,
  ADULT_SCENE_4_Y,
  ADULT_SCENE_5_K,
  ADULT_SCENE_6_L,
];
