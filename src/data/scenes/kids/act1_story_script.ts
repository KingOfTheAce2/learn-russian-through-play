/**
 * ACT 1: "THE FOREST OF LOST SOUNDS"
 *
 * Story Script for letters Ð, Ð£, Ðœ, Ð¨, Ð , Ð
 * Based on Arkhangelskaya 1967 bukvar pedagogy
 *
 * Emotional Arc: Lost â†’ Scared â†’ Reunited â†’ Adventure â†’ Home
 * Pedagogy: Syllables (ÐÐ£, Ð£Ð) â†’ Words (ÐœÐÐœÐ, ÐœÐÐ¨Ð) â†’ Sentences (ÐÐ°ÑˆÐ° Ð¼Ð°Ð¼Ð°)
 */


import type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery } from '../types';
export type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery };

export const SCENE_1_THE_ECHO: SceneScript = {
  id: 'act1_scene1_echo',
  title: 'The Echo',
  letter: 'Ð',
  setup: 'ÐœÐ°ÑˆÐ° and Ð¨ÑƒÑ€Ð° are gathering wild berries in the forest. A mysterious fog rolls in, and ÐœÐ°ÑˆÐ° realizes she can no longer see Ð¨ÑƒÑ€Ð°.',

  stages: [
    {
      id: 'fog_arrives',
      narration: {
        russian: 'Ð’ Ð»ÐµÑÑƒ Ñ‚ÑƒÐ¼Ð°Ð½. ÐœÐ°ÑˆÐ° Ð½Ðµ Ð²Ð¸Ð´Ð¸Ñ‚ Ð¨ÑƒÑ€Ñƒ.',
        transliteration: 'V lesu tuman. Masha ne vidit Shuru.',
        translation: 'In forest fog. Masha not sees Shura.',
      },
    },
    {
      id: 'masha_scared',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'scared',
          russian: 'Ð-Ð°-Ð°! Ð¨ÑƒÑ€Ð°! Ð“Ð´Ðµ Ñ‚Ñ‹?',
          transliteration: 'A-a-a! Shura! Gde ty?',
          translation: 'Aaaah! Shura! Where you?',
          sound: 'Ð',
        },
      ],
      interaction: {
        type: 'click',
        target: 'masha',
        feedback: 'Masha shouts into the fog',
      },
    },
    {
      id: 'echo_appears',
      narration: {
        russian: 'Ð­Ñ…Ð¾ Ð¾Ñ‚Ð²ÐµÑ‡Ð°ÐµÑ‚: Ð... Ð... Ð...',
        transliteration: 'Ekho otvechayet: A... A... A...',
        translation: 'Echo answers: A... A... A...',
      },
      interaction: {
        type: 'collect',
        target: 'letter_a_particles',
        feedback: 'Letter Ð appears as glowing shapes in the fog',
      },
    },
    {
      id: 'masha_discovery',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'curious',
          russian: 'Ð! Ð­Ñ‚Ð¾ Ð±ÑƒÐºÐ²Ð° Ð! ÐšÐ¾Ð³Ð´Ð° Ñ Ð¸ÑÐ¿ÑƒÐ³Ð°Ð»Ð°ÑÑŒ, Ñ ÐºÑ€Ð¸Ñ‡Ð°Ð»Ð°: Ð-Ð°-Ð°!',
          transliteration: 'A! Eto bukva A! Kogda ya ispugalas, ya krichala: A-a-a!',
          translation: 'A! This letter A! When I got-scared, I shouted: A-a-a!',
          sound: 'Ð',
        },
      ],
    },
  ],

  letterDiscovery: {
    letter: 'Ð',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð â€” ÑÑ‚Ð¾ ÐºÑ€Ð¸Ðº ÑƒÐ´Ð¸Ð²Ð»ÐµÐ½Ð¸Ñ Ð¸Ð»Ð¸ ÑÑ‚Ñ€Ð°Ñ…Ð°.',
    transliteration: 'Bukva A â€” eto krik udivleniya ili strakha.',
    translation: 'Letter A is the sound of surprise or fear.',
    mouthShape: 'Wide open mouth, like at the dentist',
    examples: ['Ð-Ð°-Ð°!', 'ÐÑƒ!', 'ÐœÐ°Ð¼Ð°'],
  },
};

// =============================================================================
// SCENE 2: "CALLING FOR HELP" (Letter Ð£)
// =============================================================================

export const SCENE_2_CALLING: SceneScript = {
  id: 'act1_scene2_calling',
  title: 'Calling for Help',
  letter: 'Ð£',
  setup: 'ÐœÐ°ÑˆÐ° tries to find Ð¨ÑƒÑ€Ð° by calling out the traditional Russian forest call.',

  stages: [
    {
      id: 'masha_calls',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'determined',
          russian: 'ÐÑƒ! ÐÑƒ! Ð¨ÑƒÑ€Ð°, Ñ‚Ñ‹ ÑÐ»Ñ‹ÑˆÐ¸ÑˆÑŒ Ð¼ÐµÐ½Ñ?',
          transliteration: 'Au! Au! Shura, ty slyshish menya?',
          translation: 'Halloo! Halloo! Shura, can you hear me?',
          sound: 'Ð£',
        },
      ],
      interaction: {
        type: 'click',
        target: 'trees',
        feedback: 'Click trees to release the "Ð£" sound',
      },
    },
    {
      id: 'echo_responds',
      narration: {
        russian: 'Ð”ÐµÑ€ÐµÐ²ÑŒÑ Ð¾Ñ‚Ð²ÐµÑ‡Ð°ÑŽÑ‚: Ð£-Ñƒ-Ñƒ...',
        transliteration: 'Derevya otvechayut: U-u-u...',
        translation: 'The trees reply: Uuu...',
      },
    },
    {
      id: 'bird_cry',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'curious',
          russian: 'Ð¡Ð»Ñ‹ÑˆÐ¸ÑˆÑŒ? ÐŸÑ‚ÐµÐ½ÐµÑ† Ð¿Ð»Ð°Ñ‡ÐµÑ‚: Ð£Ð°! Ð£Ð°!',
          transliteration: 'Slyshish? Ptenets plachet: Ua! Ua!',
          translation: 'Do you hear? A baby bird is crying: Waa! Waa!',
          sound: 'Ð£',
        },
      ],
    },
    {
      id: 'combine_sounds',
      narration: {
        russian: 'ÐÐ£ Ð¸ Ð£Ð â€” Ð´Ð²Ð° ÑÐ»Ð¾Ð³Ð° Ð¸Ð· Ð´Ð²ÑƒÑ… Ð±ÑƒÐºÐ²!',
        transliteration: 'AU i UA â€” dva sloga iz dvukh bukv!',
        translation: 'AU and UA â€” two syllables from two letters!',
      },
      interaction: {
        type: 'sequence',
        target: 'syllables',
        feedback: 'Combine Ð and Ð£ to form ÐÐ£ and Ð£Ð',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð£',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð£ â€” ÑÑ‚Ð¾ Ð·Ð¾Ð² Ð² Ð»ÐµÑÑƒ Ð¸Ð»Ð¸ Ð¿Ð»Ð°Ñ‡.',
    transliteration: 'Bukva U â€” eto zov v lesu ili plach.',
    translation: 'The letter Ð£ is a call in the forest or a cry.',
    mouthShape: 'Round lips pushed forward, like blowing a candle',
    examples: ['ÐÑƒ!', 'Ð£Ð°!', 'Ð£-Ñƒ-Ñƒ'],
  },
};

// =============================================================================
// SCENE 3: "MASHA FINDS SHURA" (Letter Ðœ)
// =============================================================================

export const SCENE_3_REUNION: SceneScript = {
  id: 'act1_scene3_reunion',
  title: 'Masha Finds Shura',
  letter: 'Ðœ',
  setup: 'Shura hears Masha calling and runs toward her voice. They embrace in a joyful reunion.',

  stages: [
    {
      id: 'shura_appears',
      narration: {
        russian: 'Ð’Ð¾Ñ‚ Ð¸ Ð¨ÑƒÑ€Ð°! ÐœÐ°ÑˆÐ° Ñ€Ð°Ð´Ð°!',
        transliteration: 'Vot i Shura! Masha rada!',
        translation: 'There is Shura! Masha is happy!',
      },
    },
    {
      id: 'reunion_hug',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'relieved',
          russian: 'Ð¨ÑƒÑ€Ð°! Ð¯ Ñ‚Ð°Ðº Ð¸ÑÐ¿ÑƒÐ³Ð°Ð»Ð°ÑÑŒ!',
          transliteration: 'Shura! Ya tak ispugalas!',
          translation: 'Shura! I was so scared!',
        },
        {
          speaker: 'shura',
          emotion: 'worried',
          russian: 'Ð¯ Ñ‚Ð¾Ð¶Ðµ! ÐœÐ°Ð¼Ð° Ð±ÑƒÐ´ÐµÑ‚ Ð²Ð¾Ð»Ð½Ð¾Ð²Ð°Ñ‚ÑŒÑÑ!',
          transliteration: 'Ya tozhe! Mama budet volnovatsya!',
          translation: 'Me too! Mama will be worried!',
          sound: 'Ðœ',
        },
      ],
    },
    {
      id: 'mama_word',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'ÐœÐ-ÐœÐ! Ð¡Ð¼Ð¾Ñ‚Ñ€Ð¸, Ð¨ÑƒÑ€Ð°! Ð­Ñ‚Ð¾ ÑÐ»Ð¾Ð²Ð¾ ÐœÐÐœÐ!',
          transliteration: 'MA-MA! Smotri, Shura! Eto slovo MAMA!',
          translation: 'MA-MA! Look, Shura! This is the word MAMA!',
          sound: 'Ðœ',
        },
      ],
      interaction: {
        type: 'drag',
        target: 'letter_tiles',
        feedback: 'Arrange scrambled letters Ð-Ðœ-Ð-Ðœ into ÐœÐ-ÐœÐ',
      },
    },
    {
      id: 'say_together',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'happy',
          russian: 'ÐœÐ-ÐœÐ!',
          transliteration: 'MA-MA!',
          translation: 'MAMA!',
          sound: 'Ðœ',
        },
        {
          speaker: 'shura',
          emotion: 'happy',
          russian: 'ÐœÐ-ÐœÐ!',
          transliteration: 'MA-MA!',
          translation: 'MAMA!',
          sound: 'Ðœ',
        },
      ],
    },
  ],

  letterDiscovery: {
    letter: 'Ðœ',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ðœ â€” Ð¿ÐµÑ€Ð²Ñ‹Ð¹ Ð·Ð²ÑƒÐº Ð² ÑÐ»Ð¾Ð²Ðµ ÐœÐÐœÐ.',
    transliteration: 'Bukva M â€” pervyy zvuk v slove MAMA.',
    translation: 'The letter Ðœ is the first sound in the word MAMA.',
    mouthShape: 'Lips pressed together gently, then open',
    examples: ['ÐœÐ-ÐœÐ', 'ÐœÐ°ÑˆÐ°', 'Ð¼Ñ‹'],
  },
};

// =============================================================================
// SCENE 4: "MASHA'S HAT" (Letter Ð¨)
// =============================================================================

export const SCENE_4_HAT: SceneScript = {
  id: 'act1_scene4_hat',
  title: "Masha's Hat",
  letter: 'Ð¨',
  setup: 'The wind blows Masha\'s hat (ÑˆÐ°Ð¿ÐºÐ°) into a tree. As it hangs on a branch, it rustles in the wind.',

  stages: [
    {
      id: 'wind_blows',
      narration: {
        russian: 'Ð’ÐµÑ‚ÐµÑ€! Ð¨Ð°Ð¿ÐºÐ° ÐœÐ°ÑˆÐ¸ ÑƒÐ»ÐµÑ‚ÐµÐ»Ð°!',
        transliteration: 'Veter! Shapka Mashi uletela!',
        translation: 'Wind! Masha\'s hat flew away!',
      },
    },
    {
      id: 'hat_rustles',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð¡Ð»Ñ‹ÑˆÐ¸ÑˆÑŒ? Ð¨Ð°Ð¿ÐºÐ° ÑˆÑƒÑ€ÑˆÐ¸Ñ‚: Ð¨-Ñˆ-Ñˆ!',
          transliteration: 'Slyshish? Shapka shurshit: Sh-sh-sh!',
          translation: 'Do you hear? The hat rustles: Shhh!',
          sound: 'Ð¨',
        },
      ],
      interaction: {
        type: 'click',
        target: 'hat',
        feedback: 'Click the hat to hear "Ð¨-Ñˆ-Ñˆ!"',
      },
    },
    {
      id: 'shura_climbs',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'determined',
          russian: 'Ð¯ Ð´Ð¾ÑÑ‚Ð°Ð½Ñƒ! Ð¯ Ñ…Ð¾Ñ€Ð¾ÑˆÐ¾ Ð»Ð°Ð·Ð°ÑŽ Ð¿Ð¾ Ð´ÐµÑ€ÐµÐ²ÑŒÑÐ¼!',
          transliteration: 'Ya dostanu! Ya khorosho lazayu po derevyam!',
          translation: 'I\'ll get it! I\'m good at climbing trees!',
        },
      ],
      interaction: {
        type: 'sequence',
        target: 'syllable_path',
        feedback: 'Guide Shura up the tree by clicking syllables: Ð¨Ð£-Ð Ð',
      },
    },
    {
      id: 'names_revealed',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'happy',
          russian: 'Ð£Ñ€Ð°! Ð¢ÐµÐ¿ÐµÑ€ÑŒ Ð¼Ñ‹ Ð·Ð½Ð°ÐµÐ¼ Ð½Ð°ÑˆÐ¸ Ð¸Ð¼ÐµÐ½Ð°: ÐœÐ-Ð¨Ð Ð¸ Ð¨Ð£-Ð Ð!',
          transliteration: 'Ura! Teper my znayem nashi imena: MA-SHA i SHU-RA!',
          translation: 'Hooray! Now we know our names: MA-SHA and SHU-RA!',
          sound: 'Ð¨',
        },
      ],
    },
  ],

  letterDiscovery: {
    letter: 'Ð¨',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð¨ â€” ÑˆÑƒÑ€ÑˆÐ°Ñ‰Ð¸Ð¹ Ð·Ð²ÑƒÐº, ÐºÐ°Ðº Ð²ÐµÑ‚ÐµÑ€ Ð¸Ð»Ð¸ ÑˆÐ°Ð¿ÐºÐ°.',
    transliteration: 'Bukva SH â€” shurshashchiy zvuk, kak veter ili shapka.',
    translation: 'The letter Ð¨ is a rustling sound, like wind or a hat.',
    mouthShape: 'Lips pushed forward in a round shape, tongue back',
    examples: ['Ð¨-Ñˆ-Ñˆ', 'ÐœÐ°ÑˆÐ°', 'Ð¨ÑƒÑ€Ð°', 'ÑˆÐ°Ð¿ÐºÐ°'],
  },
};

// =============================================================================
// SCENE 5: "THE BROKEN BRIDGE" (Letter Ð )
// =============================================================================

export const SCENE_5_BRIDGE: SceneScript = {
  id: 'act1_scene5_bridge',
  title: 'The Broken Bridge',
  letter: 'Ð ',
  setup: 'ÐœÐ°ÑˆÐ° and Ð¨ÑƒÑ€Ð° find a stream with a broken bridge. The planks have words written on them.',

  stages: [
    {
      id: 'find_stream',
      narration: {
        russian: 'Ð’Ð¿ÐµÑ€ÐµÐ´Ð¸ Ñ€ÑƒÑ‡ÐµÐ¹. ÐœÐ¾ÑÑ‚ ÑÐ»Ð¾Ð¼Ð°Ð½!',
        transliteration: 'Vperedi ruchey. Most sloman!',
        translation: 'A stream lies ahead. The bridge is broken!',
      },
    },
    {
      id: 'examine_planks',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'curious',
          russian: 'Ð¡Ð¼Ð¾Ñ‚Ñ€Ð¸! ÐÐ° Ð´Ð¾ÑÐºÐ°Ñ… Ð½Ð°Ð¿Ð¸ÑÐ°Ð½Ñ‹ ÑÐ»Ð¾Ð²Ð°: Ð ÐÐœÐ, ÐœÐÐ Ð, ÐœÐÐ¨Ð, Ð¨Ð£Ð Ð!',
          transliteration: 'Smotri! Na doskakh napisany slova: RAMA, MARA, MASHA, SHURA!',
          translation: 'Look! Words are written on the planks: RAMA, MARA, MASHA, SHURA!',
          sound: 'Ð ',
        },
      ],
    },
    {
      id: 'masha_trills',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð -Ñ€-Ñ€! Ð­Ñ‚Ð¾ Ð±ÑƒÐºÐ²Ð° Ð ! ÐžÐ½Ð° Ñ€Ñ‹Ñ‡Ð¸Ñ‚!',
          transliteration: 'R-r-r! Eto bukva R! Ona rychit!',
          translation: 'Rrr! This is the letter Ð ! It growls!',
          sound: 'Ð ',
        },
      ],
      interaction: {
        type: 'drag',
        target: 'planks',
        feedback: 'Drag word-planks to rebuild the bridge',
      },
    },
    {
      id: 'cross_bridge',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'happy',
          russian: 'Ð£Ñ€Ð°! ÐœÐ¾ÑÑ‚ Ð³Ð¾Ñ‚Ð¾Ð²! ÐŸÐµÑ€ÐµÑ…Ð¾Ð´Ð¸Ð¼!',
          transliteration: 'Ura! Most gotov! Perekhodim!',
          translation: 'Hooray! The bridge is ready! Let\'s cross!',
        },
      ],
    },
  ],

  letterDiscovery: {
    letter: 'Ð ',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð  â€” Ñ€Ñ‹Ñ‡Ð°Ñ‰Ð¸Ð¹ Ð·Ð²ÑƒÐº. Ð¯Ð·Ñ‹Ðº Ð´Ñ€Ð¾Ð¶Ð¸Ñ‚!',
    transliteration: 'Bukva R â€” rychashchiy zvuk. Yazyk drozhit!',
    translation: 'The letter Ð  is a growling sound. The tongue vibrates!',
    mouthShape: 'Tongue tip touches roof of mouth and vibrates',
    examples: ['Ð -Ñ€-Ñ€', 'Ñ€Ð°Ð¼Ð°', 'Ð£Ñ€Ð°!', 'Ð¨ÑƒÑ€Ð°'],
  },
};

// =============================================================================
// SCENE 6: "OUR HOME" (Letter Ð)
// =============================================================================

export const SCENE_6_HOME: SceneScript = {
  id: 'act1_scene6_home',
  title: 'Our Home',
  letter: 'Ð',
  setup: 'ÐœÐ°ÑˆÐ° and Ð¨ÑƒÑ€Ð° reach a clearing with a warm cottage. They must unlock the door by spelling a special word.',

  stages: [
    {
      id: 'see_cottage',
      narration: {
        russian: 'Ð’Ð¾Ñ‚ Ð½Ð°Ñˆ Ð´Ð¾Ð¼! ÐÐ¾ Ð´Ð²ÐµÑ€ÑŒ Ð·Ð°Ð¿ÐµÑ€Ñ‚Ð°!',
        transliteration: 'Vot nash dom! No dver zaperta!',
        translation: 'There is our home! But the door is locked!',
      },
    },
    {
      id: 'examine_lock',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'curious',
          russian: 'ÐÐ° Ð·Ð°Ð¼ÐºÐµ Ð±ÑƒÐºÐ²Ñ‹: Ð, Ð, Ð¨, Ð!',
          transliteration: 'Na zamke bukvy: N, A, SH, A!',
          translation: 'The lock has letters: N, A, SH, A!',
          sound: 'Ð',
        },
      ],
    },
    {
      id: 'masha_sings',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'ÐÐ-Ð¨Ð! ÐÐ-Ð¨Ð! Ð­Ñ‚Ð¾ ÑÐ»Ð¾Ð²Ð¾ ÐÐÐ¨Ð â€” Ð½Ð°Ñˆ Ð´Ð¾Ð¼!',
          transliteration: 'NA-SHA! NA-SHA! Eto slovo NASHA â€” nash dom!',
          translation: 'NA-SHA! NA-SHA! This is the word NASHA â€” our home!',
          sound: 'Ð',
        },
      ],
      interaction: {
        type: 'sequence',
        target: 'lock_letters',
        feedback: 'Click letters in rhythm: Ð-Ð-Ð¨-Ð',
      },
    },
    {
      id: 'door_opens',
      narration: {
        russian: 'Ð”Ð²ÐµÑ€ÑŒ Ð¾Ñ‚ÐºÑ€Ñ‹Ð²Ð°ÐµÑ‚ÑÑ! ÐœÐ°Ð¼Ð° Ð²Ð½ÑƒÑ‚Ñ€Ð¸ Ð¿ÐµÑ‡Ñ‘Ñ‚ Ñ…Ð»ÐµÐ±!',
        transliteration: 'Dver otkryvaetsya! Mama vnutri pechyot khleb!',
        translation: 'The door opens! Mama is inside baking bread!',
      },
    },
    {
      id: 'mama_speaks',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'ÐœÐ°ÑˆÐ° ÑƒÐ¼Ð½Ð°! Ð¨ÑƒÑ€Ð° ÑƒÐ¼Ð½Ð°! ÐÐ°ÑˆÐ° Ð¼Ð°Ð¼Ð° Ñ€Ð°Ð´Ð°!',
          transliteration: 'Masha umna! Shura umna! Nasha mama rada!',
          translation: 'Masha is clever! Shura is clever! Our mama is happy!',
        },
        {
          speaker: 'masha',
          emotion: 'happy',
          russian: 'ÐœÐ°Ð¼Ð°, Ð¼Ñ‹ Ð½Ð°ÑƒÑ‡Ð¸Ð»Ð¸ÑÑŒ Ñ‡Ð¸Ñ‚Ð°Ñ‚ÑŒ!',
          transliteration: 'Mama, my nauchilis chitat!',
          translation: 'Mama, we learned to read!',
        },
      ],
    },
  ],

  letterDiscovery: {
    letter: 'Ð',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð â€” Ð²Ð°Ð¶Ð½Ð°Ñ Ð±ÑƒÐºÐ²Ð°. ÐÐÑˆÐ° Ð¼Ð°Ð¼Ð°, ÐÐ°Ñˆ Ð´Ð¾Ð¼!',
    transliteration: 'Bukva N â€” vazhnaya bukva. NAsha mama, Nash dom!',
    translation: 'The letter Ð is an important letter. Our mama, Our home!',
    mouthShape: 'Tongue touches roof of mouth behind teeth',
    examples: ['ÐÐ°!', 'ÐÐ°ÑˆÐ°', 'Ð½Ð°Ñˆ', 'Ð-Ð½-Ð½'],
  },
};

// Export all scenes
export const ACT1_SCENES: SceneScript[] = [
  SCENE_1_THE_ECHO,
  SCENE_2_CALLING,
  SCENE_3_REUNION,
  SCENE_4_HAT,
  SCENE_5_BRIDGE,
  SCENE_6_HOME,
];
