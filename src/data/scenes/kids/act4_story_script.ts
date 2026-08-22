/**
 * ACT 4: "WINTER GAMES"
 *
 * Story Script for letters Ð‘, Ð“, Ð§, Ð–, Ð¬, Ð™
 * Based on Arkhangelskaya 1967 bukvar pedagogy
 *
 * Emotional Arc: Music â†’ Bravery â†’ Rush â†’ Discovery â†’ Cleverness â†’ Chase
 * Pedagogy: Onomatopoeia â†’ Folk games â†’ Soft sign â†’ Short Ð˜
 */

import type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery } from '../types';
export type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery };

// =============================================================================
// SCENE 1: "DRUM PARADE" (Letter Ð‘)
// =============================================================================

export const SCENE_1_DRUM: SceneScript = {
  id: 'act4_scene1_drum',
  title: 'Drum Parade',
  letter: 'Ð‘',
  setup: 'Babushka gives Boris a drum. All the kids want to play!',

  stages: [
    {
      id: 'drum_gift',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'Ð‘Ð°Ð±ÑƒÑˆÐºÐ° ÐºÑƒÐ¿Ð¸Ð»Ð° Ð‘Ð¾Ñ€Ð¸ÑÑƒ Ð±Ð°Ñ€Ð°Ð±Ð°Ð½!',
          transliteration: 'Babushka kupila Borisu baraban!',
          translation: 'Grandma bought Boris drum!',
          sound: 'Ð‘',
        },
      ],
    },
    {
      id: 'parade',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'excited',
          russian: 'Ð‘ÑƒÐ¼-Ð±ÑƒÐ¼! Ð‘-Ð±-Ð±! ÐœÑ‹ Ð¿Ð¾ÑˆÐ»Ð¸ Ð½Ð° Ð¿Ð°Ñ€Ð°Ð´!',
          transliteration: 'Bum-bum! B-b-b! My poshli na parad!',
          translation: 'Boom-boom! B-b-b! We went to parade!',
          sound: 'Ð‘',
        },
      ],
      interaction: {
        type: 'click',
        target: 'drum',
        feedback: 'Bang the drum: Ð‘Ð£Ðœ-Ð‘Ð£Ðœ!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð‘',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð‘ â€” Ð±ÑƒÐ¼-Ð±ÑƒÐ¼, Ð±Ð°Ñ€Ð°Ð±Ð°Ð½!',
    transliteration: 'Bukva B â€” bum-bum, baraban!',
    translation: 'Letter Ð‘ â€” boom-boom, drum!',
    mouthShape: 'Lips together, voiced "b"',
    examples: ['Ð±Ð°Ñ€Ð°Ð±Ð°Ð½', 'Ð±Ð°Ð±ÑƒÑˆÐºÐ°', 'Ð‘Ð¾Ñ€Ð¸Ñ', 'Ð±ÑƒÐ¼'],
  },
};

// =============================================================================
// SCENE 2: "GRISHA AND GEESE" (Letter Ð“)
// =============================================================================

export const SCENE_2_GEESE: SceneScript = {
  id: 'act4_scene2_geese',
  title: 'Grisha and Geese',
  letter: 'Ð“',
  setup: 'Little Grisha is scared of big geese. But he chases them away!',

  stages: [
    {
      id: 'geese_scary',
      narration: {
        russian: 'Ð“Ñ€Ð¸ÑˆÐ° Ð¼Ð°Ð»ÐµÐ½ÑŒÐºÐ¸Ð¹. Ð“ÑƒÑÐ¸ Ð±Ð¾Ð»ÑŒÑˆÐ¸Ðµ. Ð“ÑƒÑÐ¸ Ð³Ð¾Ð³Ð¾Ñ‚Ð°Ð»Ð¸: Ð“Ð°-Ð³Ð°-Ð³Ð°!',
        transliteration: 'Grisha malenkiy. Gusi bolshiye. Gusi gogotali: Ga-ga-ga!',
        translation: 'Grisha little. Geese big. Geese honked: Ga-ga-ga!',
      },
    },
    {
      id: 'grisha_brave',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð“Ñ€Ð¸ÑˆÐ° Ð¿Ñ€Ð¾Ð³Ð½Ð°Ð» Ð³ÑƒÑÐµÐ¹! Ð“-Ð³-Ð³! Ð“ÑƒÑÐ¸ Ð¸ÑÐ¿ÑƒÐ³Ð°Ð»Ð¸ÑÑŒ!',
          transliteration: 'Grisha prognal gusey! G-g-g! Gusi ispugalis!',
          translation: 'Grisha chased-away geese! G-g-g! Geese got-scared!',
          sound: 'Ð“',
        },
      ],
      interaction: {
        type: 'click',
        target: 'geese',
        feedback: 'Chase the geese away!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð“',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð“ â€” Ð³ÑƒÑÐ¸ Ð³Ð¾Ð³Ð¾Ñ‚Ð°Ð»Ð¸!',
    transliteration: 'Bukva G â€” gusi gogotali!',
    translation: 'Letter Ð“ â€” geese honked!',
    mouthShape: 'Hard "g" as in "go"',
    examples: ['Ð³ÑƒÑÐ¸', 'Ð“Ñ€Ð¸ÑˆÐ°', 'Ð³Ð°-Ð³Ð°-Ð³Ð°', 'Ð¿Ñ€Ð¾Ð³Ð½Ð°Ð»'],
  },
};

// =============================================================================
// SCENE 3: "MORNING RUSH" (Letter Ð§)
// =============================================================================

export const SCENE_3_CLOCK: SceneScript = {
  id: 'act4_scene3_clock',
  title: 'Morning Rush',
  letter: 'Ð§',
  setup: 'Lena is late for school. Mama says it\'s not the clock - Lena is slow!',

  stages: [
    {
      id: 'running_late',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'worried',
          russian: 'Ð”Ð¾Ñ‡ÐµÐ½ÑŒÐºÐ°, ÑƒÐ¶Ðµ Ð²Ð¾ÑÐµÐ¼ÑŒ Ñ‡Ð°ÑÐ¾Ð²! Ð§-Ñ‡-Ñ‡!',
          transliteration: 'Dochenka, uzhe vosem chasov! Ch-ch-ch!',
          translation: 'Daughter, already eight hours! Ch-ch-ch!',
          sound: 'Ð§',
        },
      ],
    },
    {
      id: 'clock_blame',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'happy',
          russian: 'Ð§Ð°ÑÑ‹ Ð¸Ð´ÑƒÑ‚ Ð²ÐµÑ€Ð½Ð¾! Ð­Ñ‚Ð¾ Ñ‚Ñ‹ Ð´ÐµÐ»Ð°ÐµÑˆÑŒ Ð²ÑÑ‘ Ð¼ÐµÐ´Ð»ÐµÐ½Ð½Ð¾!',
          transliteration: 'Chasy idut verno! Eto ty delayesh vsyo medlenno!',
          translation: 'Clock goes correctly! This you do everything slowly!',
        },
      ],
      interaction: {
        type: 'click',
        target: 'clock',
        feedback: 'Check the time!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð§',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð§ â€” Ñ‡Ð°ÑÑ‹, Ñ‡Ð°Ñ, Ð²Ñ€ÐµÐ¼Ñ!',
    transliteration: 'Bukva CH â€” chasy, chas, vremya!',
    translation: 'Letter Ð§ â€” clock, hour, time!',
    mouthShape: 'Like "ch" in "church", always soft',
    examples: ['Ñ‡Ð°ÑÑ‹', 'Ñ‡Ð°Ñ', 'Ð´Ð¾Ñ‡ÐµÐ½ÑŒÐºÐ°'],
  },
};

// =============================================================================
// SCENE 4: "BEETLE" (Letter Ð–)
// =============================================================================

export const SCENE_4_BEETLE: SceneScript = {
  id: 'act4_scene4_beetle',
  title: 'Beetle',
  letter: 'Ð–',
  setup: 'Dima and Zina catch a beetle. It has 6 legs!',

  stages: [
    {
      id: 'find_beetle',
      narration: {
        russian: 'Ð”Ð¸Ð¼Ð° Ð¸ Ð—Ð¸Ð½Ð° Ð¿Ð¾ÑˆÐ»Ð¸ Ð² Ð¿Ð°Ñ€Ðº. Ð¢Ð°Ð¼ Ð¿Ð¾Ð¹Ð¼Ð°Ð»Ð¸ Ð¶ÑƒÐºÐ°.',
        transliteration: 'Dima i Zina poshli v park. Tam poymali zhuka.',
        translation: 'Dima and Zina went to park. There caught beetle.',
      },
    },
    {
      id: 'examine_beetle',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'curious',
          russian: 'Ð£ Ð¶ÑƒÐºÐ° ÑƒÑÑ‹! Ð£ Ð¶ÑƒÐºÐ° 6 Ð»Ð°Ð¿Ð¾Ðº! Ð–-Ð¶-Ð¶!',
          transliteration: 'U zhuka usy! U zhuka 6 lapok! Zh-zh-zh!',
          translation: 'Beetle has whiskers! Beetle has 6 legs! Zh-zh-zh!',
          sound: 'Ð–',
        },
      ],
      interaction: {
        type: 'click',
        target: 'beetle',
        feedback: 'Count the beetle legs!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð–',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð– â€” Ð¶ÑƒÐº Ð¶ÑƒÐ¶Ð¶Ð¸Ñ‚!',
    transliteration: 'Bukva ZH â€” zhuk zhuzzhit!',
    translation: 'Letter Ð– â€” beetle buzzes!',
    mouthShape: 'Like "s" in "pleasure", voiced "sh"',
    examples: ['Ð¶ÑƒÐº', 'Ð¶ÑƒÐ¶Ð¶Ð¸Ñ‚', 'Ð¶-Ð¶-Ð¶'],
  },
};

// =============================================================================
// SCENE 5: "CLEVER CAT" (Letter Ð¬)
// =============================================================================

export const SCENE_5_CLEVER_CAT: SceneScript = {
  id: 'act4_scene5_cat',
  title: 'Clever Cat',
  letter: 'Ð¬',
  setup: 'Cat Pushok tries to catch fish from aquarium!',

  stages: [
    {
      id: 'cat_sneaks',
      narration: {
        russian: 'Ð£ Ð—Ð¸Ð½Ñ‹ Ð°ÐºÐ²Ð°Ñ€Ð¸ÑƒÐ¼. ÐšÐ¾Ñ‚ ÐŸÑƒÑˆÐ¾Ðº â€” ÑÐºÐ¾Ðº Ð½Ð° ÑÑ‚Ð¾Ð»!',
        transliteration: 'U Ziny akvarium. Kot Pushok â€” skok na stol!',
        translation: 'Zina has aquarium. Cat Pushok â€” hop on table!',
      },
    },
    {
      id: 'cat_caught',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð›Ð¾Ð²Ð¸ÑÑŒ, ÐºÐ°Ñ€Ð°ÑÑŒ! Ð›Ð¾Ð²Ð¸ÑÑŒ, Ð¾ÐºÑƒÐ½ÑŒ! Ð¬ ÑÐ¼ÑÐ³Ñ‡Ð°ÐµÑ‚!',
          transliteration: 'Lovis, karas! Lovis, okun! Soft-sign softens!',
          translation: 'Get-caught, carp! Get-caught, perch! Soft-sign softens!',
          sound: 'Ð¬',
        },
      ],
      interaction: {
        type: 'sequence',
        target: 'fish_names',
        items: ['КАРАСЬ', 'ОКУНЬ'],
        feedback: 'See ÐºÐ°Ñ€Ð°ÑÑŒ â†’ ÐºÐ°Ñ€Ð°ÑÑŒ, Ð¾ÐºÑƒÐ½ÑŒ â†’ Ð¾ÐºÑƒÐ½ÑŒ',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð¬',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð¬ â€” Ð¼ÑÐ³ÐºÐ¸Ð¹ Ð·Ð½Ð°Ðº! ÐÐµ Ð·Ð²ÑƒÐº, Ð° Ð·Ð½Ð°Ðº!',
    transliteration: 'Bukva Soft-sign â€” myagkiy znak! Ne zvuk, a znak!',
    translation: 'Letter Ð¬ â€” soft sign! Not sound, but sign!',
    mouthShape: 'Makes previous consonant soft/palatalized',
    examples: ['ÐºÐ°Ñ€Ð°ÑÑŒ', 'Ð¾ÐºÑƒÐ½ÑŒ', 'Ð»Ð¾Ð²Ð¸ÑÑŒ'],
  },
};

// =============================================================================
// SCENE 6: "BUNNY CHASE" (Letter Ð™)
// =============================================================================

export const SCENE_6_BUNNY: SceneScript = {
  id: 'act4_scene6_bunny',
  title: 'Bunny Chase',
  letter: 'Ð™',
  setup: 'Dog Polkan chases bunny. But bunny escapes!',

  stages: [
    {
      id: 'bunny_spotted',
      narration: {
        russian: 'Ð£ ÐºÑƒÑÑ‚Ð° Ð·Ð°Ð¹ÐºÐ°. ÐŸÐ¾Ð»ÐºÐ°Ð½ ÑƒÐ²Ð¸Ð´Ð°Ð» Ð·Ð°Ð¹ÐºÑƒ.',
        transliteration: 'U kusta zayka. Polkan uvidal zayku.',
        translation: 'By bush bunny. Polkan spotted bunny.',
      },
    },
    {
      id: 'bunny_escapes',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'excited',
          russian: 'Ð—Ð°Ð¹ÐºÐ° â€” ÑÐºÐ¾Ðº! Ð™-Ð¹-Ð¹! Ð Ð·Ð°Ð¹ÐºÐ° ÑƒÑÐºÐ°ÐºÐ°Ð»!',
          transliteration: 'Zayka â€” skok! Y-y-y! A zayka uskakal!',
          translation: 'Bunny â€” hop! Y-y-y! And bunny hopped-away!',
          sound: 'Ð™',
        },
      ],
      interaction: {
        type: 'click',
        target: 'bunny',
        feedback: 'Bunny hops away!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð™',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð™ â€” ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ðµ Ð˜! Ð—Ð°Ð¹ÐºÐ° ÑƒÑÐºÐ°ÐºÐ°Ð»!',
    transliteration: 'Bukva Y â€” korotkoye I! Zayka uskakal!',
    translation: 'Letter Ð™ â€” short I! Bunny hopped-away!',
    mouthShape: 'Like "y" in "boy", after vowels',
    examples: ['Ð·Ð°Ð¹ÐºÐ°', 'Ð¼Ð¾Ð¹', 'Ñ‚Ð²Ð¾Ð¹', 'ÑÐºÐ¾Ðº'],
  },
};

export const ACT4_SCENES: SceneScript[] = [
  SCENE_1_DRUM,
  SCENE_2_GEESE,
  SCENE_3_CLOCK,
  SCENE_4_BEETLE,
  SCENE_5_CLEVER_CAT,
  SCENE_6_BUNNY,
];
