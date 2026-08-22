/**
 * ACT 2: "THE MOON PATH"
 *
 * Story Script for letters Ð›, Ð«, Ðž, Ð¡, Ð˜, Ðš
 * Based on Arkhangelskaya 1967 bukvar pedagogy
 *
 * Emotional Arc: Evening â†’ Wonder â†’ Joy â†’ Play â†’ Friendship â†’ Feast
 * Pedagogy: Hard/soft consonants â†’ Plural forms â†’ Vowel reduction â†’ Softening system
 */


import type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery } from '../types';
export type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery };

export const SCENE_1_MOON: SceneScript = {
  id: 'act2_scene1_moon',
  title: 'The Moon',
  letter: 'Ð›',
  setup: 'Evening comes. Mama tells Masha and Shura to look out the window. A full moon is rising over the forest.',

  stages: [
    {
      id: 'evening_comes',
      narration: {
        russian: 'Ð’ÐµÑ‡ÐµÑ€. Ð›ÑƒÐ½Ð° Ð½Ð° Ð½ÐµÐ±Ðµ.',
        transliteration: 'Vecher. Luna na nebe.',
        translation: 'Evening. Moon in sky.',
      },
    },
    {
      id: 'mama_points',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'ÐœÐ°ÑˆÐ°! Ð¨ÑƒÑ€Ð°! Ð¡Ð¼Ð¾Ñ‚Ñ€Ð¸Ñ‚Ðµ! Ð›ÑƒÐ½Ð°!',
          transliteration: 'Masha! Shura! Smotrite! Luna!',
          translation: 'Masha! Shura! Look! Moon!',
          sound: 'Ð›',
        },
      ],
    },
    {
      id: 'masha_excited',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð›ÑƒÐ½Ð°! Ð›-Ð»-Ð»! Ð›Ð°Ñ€Ð° ÑƒÑˆÐ»Ð°. Ð›ÑƒÑˆÐ° Ð¼Ð°Ð»Ð°!',
          transliteration: 'Luna! L-l-l! Lara ushla. Lusha mala!',
          translation: 'Moon! L-l-l! Lara left. Lusha small!',
          sound: 'Ð›',
        },
      ],
      interaction: {
        type: 'click',
        target: 'moon',
        feedback: 'Click the moon to hear "Ð›"',
      },
    },
    {
      id: 'collect_Ð»',
      narration: {
        russian: 'Ð›ÑƒÐ½Ð½Ñ‹Ð¹ ÑÐ²ÐµÑ‚ Ñ€Ð¸ÑÑƒÐµÑ‚ Ð±ÑƒÐºÐ²Ñ‹: Ð›... Ð›... Ð›...',
        transliteration: 'Lunnyy svet risuet bukvy: L... L... L...',
        translation: 'Moon light draws letters: L... L... L...',
      },
      interaction: {
        type: 'collect',
        target: 'letter_Ð»_particles',
        feedback: 'Collect glowing Ð› letters from moonbeams',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð›',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð› â€” Ð¼ÑÐ³ÐºÐ¸Ð¹ Ð·Ð²ÑƒÐº, ÐºÐ°Ðº Ð»Ð°Ð¼Ð¿Ð° Ð¸Ð»Ð¸ Ð»ÑƒÐ½Ð°.',
    transliteration: 'Bukva L â€” myagkiy zvuk, kak lampa ili luna.',
    translation: 'Letter L â€” soft sound, like lamp or moon.',
    mouthShape: 'Tongue tip touches teeth, darker than English "l"',
    examples: ['Ð›ÑƒÐ½Ð°', 'Ð›Ð°Ñ€Ð°', 'Ð¼Ð°Ð»Ð°', 'ÑƒÑˆÐ»Ð°'],
  },
};

// =============================================================================
// SCENE 2: "BALLOONS" (Letter Ð«)
// =============================================================================

export const SCENE_2_BALLOONS: SceneScript = {
  id: 'act2_scene2_balloons',
  title: 'Balloons',
  letter: 'Ð«',
  setup: 'Morning. Mama gives Shura two balloons. Masha also gets balloons. They learn about plural forms.',

  stages: [
    {
      id: 'mama_gives',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'Ð¨ÑƒÑ€Ð°, Ñƒ Ñ‚ÐµÐ±Ñ ÑˆÐ°Ñ€Ñ‹!',
          transliteration: 'Shura, u tebya shary!',
          translation: 'Shura, you have balloons!',
          sound: 'Ð«',
        },
      ],
    },
    {
      id: 'shura_counts',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'excited',
          russian: 'Ð”Ð²Ð° ÑˆÐ°Ñ€Ð°! Ð¨Ð°-Ñ€Ñ‹! Ð¡Ð»Ñ‹ÑˆÐ¸ÑˆÑŒ, ÐœÐ°ÑˆÐ°? Ð¨Ð°Ñ€ â€” ÑˆÐ°Ñ€Ñ‹!',
          transliteration: 'Dva shara! Sha-ry! Slyshish, Masha? Shar â€” shary!',
          translation: 'Two balloons! Sha-ry! Hear, Masha? Balloon â€” balloons!',
          sound: 'Ð«',
        },
      ],
      interaction: {
        type: 'click',
        target: 'balloons',
        feedback: 'Click balloons to hear "Ð«" sound',
      },
    },
    {
      id: 'plural_game',
      narration: {
        russian: 'Ð Ð°Ð¼Ð° â€” Ñ€Ð°Ð¼Ñ‹. Ð¨Ð°Ñ€ â€” ÑˆÐ°Ñ€Ñ‹. ÐžÐ´Ð¸Ð½ Ð¸ Ð¼Ð½Ð¾Ð³Ð¾!',
        transliteration: 'Rama â€” ramy. Shar â€” shary. Odin i mnogo!',
        translation: 'Frame â€” frames. Balloon â€” balloons. One and many!',
      },
      interaction: {
        type: 'sequence',
        target: 'plural_pairs',
        feedback: 'Match singular to plural: ÑˆÐ°Ñ€ â†’ ÑˆÐ°Ñ€Ñ‹, Ñ€Ð°Ð¼Ð° â†’ Ñ€Ð°Ð¼Ñ‹',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð«',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð« â€” ÑÐ°Ð¼Ñ‹Ð¹ Ñ‚Ñ€ÑƒÐ´Ð½Ñ‹Ð¹ Ð·Ð²ÑƒÐº! Ð¯Ð·Ñ‹Ðº Ð½Ð°Ð·Ð°Ð´!',
    transliteration: 'Bukva Y â€” samyy trudnyy zvuk! Yazyk nazad!',
    translation: 'Letter Ð« â€” hardest sound! Tongue back!',
    mouthShape: 'Say "ee" but pull tongue back and down',
    examples: ['ÑˆÐ°Ñ€Ñ‹', 'Ñ€Ð°Ð¼Ñ‹', 'Ð¼Ñ‹'],
  },
};

// =============================================================================
// SCENE 3: "WASPS" (Letter Ðž)
// =============================================================================

export const SCENE_3_WASPS: SceneScript = {
  id: 'act2_scene3_wasps',
  title: 'Wasps',
  letter: 'Ðž',
  setup: 'In the garden, Masha and Shura find wasps buzzing around flowers. They learn the "Ðž" sound.',

  stages: [
    {
      id: 'hear_buzzing',
      narration: {
        russian: 'Ð’ ÑÐ°Ð´Ñƒ Ñ†Ð²ÐµÑ‚Ñ‹. ÐžÑÑ‹!',
        transliteration: 'V sadu tsvety. Osy!',
        translation: 'In garden flowers. Wasps!',
      },
    },
    {
      id: 'wasps_buzz',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'curious',
          russian: 'Ðž-Ð¾-Ð¾! ÐžÑÑ‹! Ð£ Ð¾ÑÑ‹ ÑƒÑÑ‹!',
          transliteration: 'O-o-o! Osy! U osy usy!',
          translation: 'O-o-o! Wasps! Wasp has whiskers!',
          sound: 'Ðž',
        },
      ],
      interaction: {
        type: 'click',
        target: 'wasps',
        feedback: 'Click wasps to hear buzzing "Ðž-Ð¾-Ð¾"',
      },
    },
    {
      id: 'shura_worried',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'worried',
          russian: 'ÐœÐ°Ð¼Ð°! ÐžÑÑ‹ Ñ‚ÑƒÑ‚! ÐÐ¾ Ð¼Ñ‹ Ð½Ðµ Ð±Ð¾Ð¸Ð¼ÑÑ!',
          transliteration: 'Mama! Osy tut! No my ne boimsya!',
          translation: 'Mama! Wasps here! But we not afraid!',
        },
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'ÐžÑÑ‹ Ð¼Ð°Ð»Ñ‹. ÐÐµ ÑˆÑƒÐ¼Ð¸Ñ‚Ðµ â€” Ð¸ Ð¾ÑÑ‹ Ð½Ðµ Ñ‚Ñ€Ð¾Ð½ÑƒÑ‚ Ð²Ð°Ñ!',
          transliteration: 'Osy maly. Ne shumite â€” i osy ne tronut vas!',
          translation: 'Wasps small. Not make-noise â€” and wasps not touch you!',
        },
      ],
    },
  ],

  letterDiscovery: {
    letter: 'Ðž',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ðž â€” ÐºÐ°Ðº ÑƒÐ´Ð¸Ð²Ð»ÐµÐ½Ð¸Ðµ! Ðž-Ð¾-Ð¾!',
    transliteration: 'Bukva O â€” kak udivlenie! O-o-o!',
    translation: 'Letter O â€” like surprise! O-o-o!',
    mouthShape: 'Round lips, like English "more" when stressed',
    examples: ['ÐžÑÑ‹', 'Ð Ð¾Ð¼Ð°', 'Ð›Ð¾Ñ€Ð°', 'Ð½Ð¾'],
  },
};

// =============================================================================
// SCENE 4: "SASHA" (Letter Ð¡)
// =============================================================================

export const SCENE_4_SASHA: SceneScript = {
  id: 'act2_scene4_sasha',
  title: 'Sasha',
  letter: 'Ð¡',
  setup: 'A new friend arrives! Sasha comes to visit. Sasha helps Masha and Shura dry herbs.',

  stages: [
    {
      id: 'knock_knock',
      narration: {
        russian: 'Ð¡Ñ‚ÑƒÐº-ÑÑ‚ÑƒÐº! ÐšÑ‚Ð¾ Ñ‚Ð°Ð¼?',
        transliteration: 'Stuk-stuk! Kto tam?',
        translation: 'Knock-knock! Who there?',
      },
    },
    {
      id: 'sasha_arrives',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'Ð­Ñ‚Ð¾ Ð¡Ð°ÑˆÐ°! ÐÐ°Ñˆ ÑÐ¾ÑÐµÐ´!',
          transliteration: 'Eto Sasha! Nash sosed!',
          translation: 'This Sasha! Our neighbor!',
          sound: 'Ð¡',
        },
      ],
    },
    {
      id: 'greetings',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð¡Ð°ÑˆÐ°! Ð¡-Ñ-Ñ! ÐšÐ°Ðº ÑÐ¾Ð²Ð°!',
          transliteration: 'Sasha! S-s-s! Kak sova!',
          translation: 'Sasha! S-s-s! Like owl!',
          sound: 'Ð¡',
        },
      ],
    },
    {
      id: 'drying_herbs',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'Ð¡Ð°ÑˆÐ°, Ð¿Ð¾Ð¼Ð¾Ð³Ð¸! ÐœÑ‹ ÑÑƒÑˆÐ¸Ð¼ Ñ‚Ñ€Ð°Ð²Ñ‹.',
          transliteration: 'Sasha, pomogi! My sushim travy.',
          translation: 'Sasha, help! We drying herbs.',
        },
      ],
      interaction: {
        type: 'drag',
        target: 'herbs',
        feedback: 'Hang herbs to dry: Ñ-Ñ-ÑÑƒÑˆÐ¸Ð¼!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð¡',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð¡ â€” ÑÐ²Ð¸ÑÑ‚ÑÑ‰Ð¸Ð¹ Ð·Ð²ÑƒÐº! Ð¡-Ñ-Ñ!',
    transliteration: 'Bukva S â€” svistyashchiy zvuk! S-s-s!',
    translation: 'Letter S â€” whistling sound! S-s-s!',
    mouthShape: 'Like "s" in "sun", tongue behind teeth',
    examples: ['Ð¡Ð°ÑˆÐ°', 'ÑÑƒÑˆÑƒ', 'ÑƒÑ', 'ÑƒÑÑ‹'],
  },
};

// =============================================================================
// SCENE 5: "NAMES" (Letter Ð˜)
// =============================================================================

export const SCENE_5_NAMES: SceneScript = {
  id: 'act2_scene5_names',
  title: 'Names',
  letter: 'Ð˜',
  setup: 'Sasha teaches Masha and Shura new names: Mila, Nina, Sima. They notice "Ð˜" makes consonants soft.',

  stages: [
    {
      id: 'sasha_tells',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'curious',
          russian: 'Ð¡Ð°ÑˆÐ°, Ñƒ Ñ‚ÐµÐ±Ñ ÐµÑÑ‚ÑŒ ÑÐµÑÑ‚Ñ€Ð°?',
          transliteration: 'Sasha, u tebya yest sestra?',
          translation: 'Sasha, you have sister?',
        },
      ],
    },
    {
      id: 'sasha_replies',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'excited',
          russian: 'Ð”Ð°! ÐœÐ¸Ð»Ð°, ÐÐ¸Ð½Ð°, Ð¸ Ð¡Ð¸Ð¼Ð°! Ð¡Ð»Ñ‹ÑˆÐ¸ÑˆÑŒ? Ð˜-Ð¸-Ð¸!',
          transliteration: 'Da! Mila, Nina, i Sima! Slyshish? I-i-i!',
          translation: 'Yes! Mila, Nina, and Sima! Hear? I-i-i!',
          sound: 'Ð˜',
        },
      ],
    },
    {
      id: 'soft_sounds',
      narration: {
        russian: 'ÐœÐ Ð¸ ÐœÐ˜. Ð Ð Ð¸ Ð Ð˜. ÐÐ Ð¸ ÐÐ˜. Ð˜ Ð´ÐµÐ»Ð°ÐµÑ‚ Ð·Ð²ÑƒÐº Ð¼ÑÐ³ÐºÐ¸Ð¼!',
        transliteration: 'MA i MI. RA i RI. NA i NI. I delaet zvuk myagkim!',
        translation: 'MA and MI. RA and RI. NA and NI. I makes sound soft!',
      },
      interaction: {
        type: 'sequence',
        target: 'soft_pairs',
        feedback: 'Compare hard and soft: Ð¼Ð°/Ð¼Ð¸, Ñ€Ð°/Ñ€Ð¸, Ð½Ð°/Ð½Ð¸',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð˜',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð˜ â€” ÑÐ¼ÑÐ³Ñ‡Ð°ÐµÑ‚ ÑÐ¾Ð³Ð»Ð°ÑÐ½Ñ‹Ðµ!',
    transliteration: 'Bukva I â€” smyagchaet soglasnye!',
    translation: 'Letter Ð˜ â€” softens consonants!',
    mouthShape: 'Like "ee" in "see", tongue high and forward',
    examples: ['ÐœÐ¸Ð»Ð°', 'ÐÐ¸Ð½Ð°', 'Ð¡Ð¸Ð¼Ð°', 'ÐœÐ¸ÑˆÐ°'],
  },
};

// =============================================================================
// SCENE 6: "PORRIDGE" (Letter Ðš)
// =============================================================================

export const SCENE_6_PORRIDGE: SceneScript = {
  id: 'act2_scene6_porridge',
  title: 'Porridge',
  letter: 'Ðš',
  setup: 'Everyone is hungry! Mama cooks kasha (porridge). They set the table and eat together.',

  stages: [
    {
      id: 'mama_cooks',
      narration: {
        russian: 'ÐœÐ°Ð¼Ð° Ð²Ð°Ñ€Ð¸Ñ‚ ÐºÐ°ÑˆÑƒ.',
        transliteration: 'Mama varit kashu.',
        translation: 'Mama cooks porridge.',
      },
    },
    {
      id: 'smell_kasha',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ðš-Ðº-Ðº! ÐšÐ°ÑˆÐ°! ÐšÐ°Ðº Ð²ÐºÑƒÑÐ½Ð¾ Ð¿Ð°Ñ…Ð½ÐµÑ‚!',
          transliteration: 'K-k-k! Kasha! Kak vkusno pakhnet!',
          translation: 'K-k-k! Porridge! How tasty smells!',
          sound: 'Ðš',
        },
      ],
    },
    {
      id: 'set_table',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'ÐœÐ°ÑˆÐ° ÑƒÐ¼Ð½Ð°! Ð¨ÑƒÑ€Ð° ÑƒÐ¼Ð½Ð°! Ð¡Ð°ÑˆÐ° ÑƒÐ¼Ð½Ð°! Ð’ÑÐµ ÑƒÐ¼Ð½Ñ‹!',
          transliteration: 'Masha umna! Shura umna! Sasha umna! Vse umny!',
          translation: 'Masha clever! Shura clever! Sasha clever! All clever!',
        },
      ],
      interaction: {
        type: 'click',
        target: 'bowls',
        feedback: 'Click bowls to serve: ÐºÐ°ÑˆÐ° Ð´Ð»Ñ Ð²ÑÐµÑ…!',
      },
    },
    {
      id: 'feast',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'happy',
          russian: 'ÐÐ°ÑˆÐ° Ð¼Ð°Ð¼Ð°! ÐÐ°ÑˆÐ° ÐºÐ°ÑˆÐ°! ÐÐ°Ñˆ Ð¡Ð°ÑˆÐ°!',
          transliteration: 'Nasha mama! Nasha kasha! Nash Sasha!',
          translation: 'Our mama! Our porridge! Our Sasha!',
        },
      ],
    },
  ],

  letterDiscovery: {
    letter: 'Ðš',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ðš â€” ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¸Ð¹ Ð·Ð²ÑƒÐº! Ðš-Ðº-Ðº!',
    transliteration: 'Bukva K â€” korotkiy zvuk! K-k-k!',
    translation: 'Letter K â€” short sound! K-k-k!',
    mouthShape: 'Like "k" in "kite", tongue touches soft palate',
    examples: ['ÐºÐ°ÑˆÐ°', 'ÐºÑƒÑ€Ñ‹', 'Ð¼Ð°Ðº', 'Ð»ÑƒÐº'],
  },
};

// Export all scenes
export const ACT2_SCENES: SceneScript[] = [
  SCENE_1_MOON,
  SCENE_2_BALLOONS,
  SCENE_3_WASPS,
  SCENE_4_SASHA,
  SCENE_5_NAMES,
  SCENE_6_PORRIDGE,
];
