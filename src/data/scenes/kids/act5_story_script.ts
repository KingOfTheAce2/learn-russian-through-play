/**
 * ACT 5: "THE FINAL LETTERS"
 *
 * Story Script for letters Ð¥, Ð¦, Ð¤, Ð©, Ð­, Ð¯, Ð, Ð®, Ðª
 * Based on Arkhangelskaya 1967 bukvar pedagogy
 *
 * Emotional Arc: Wonder â†’ Unity â†’ Homecoming â†’ Safety â†’ Nature â†’ Sharing â†’ Warmth â†’ Routine â†’ Celebration
 * Pedagogy: Rare consonants â†’ Iotated vowels â†’ Hard sign finale
 */

import type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery } from '../types';
export type { SceneScript, SceneStage, NarrationLine, DialogueLine, Interaction, LetterDiscovery };

// =============================================================================
// SCENE 1: "MUSHROOMS" (Letter Ð¥)
// =============================================================================

export const SCENE_1_MUSHROOMS: SceneScript = {
  id: 'act5_scene1_mushrooms',
  title: 'Mushrooms',
  letter: 'Ð¥',
  setup: 'Shura finds a huge mushroom! Akh!',

  stages: [
    {
      id: 'find_mushroom',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'excited',
          russian: 'ÐÑ…Ð½ÑƒÐ» Ð¨ÑƒÑ€Ð°! Ð¥-Ñ…-Ñ…! ÐÑƒ Ð¸ Ð¼ÑƒÑ…Ð¾Ð¼Ð¾Ñ€!',
          transliteration: 'Akhnul Shura! Kh-kh-kh! Nu i mukhomor!',
          translation: 'Gasped Shura! Kh-kh-kh! What a fly-agaric!',
          sound: 'Ð¥',
        },
      ],
      interaction: {
        type: 'click',
        target: 'mushroom',
        feedback: 'Look at the big mushroom!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð¥',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð¥ â€” Ñ…Ñ€Ð¸Ð¿ÑÑ‰Ð¸Ð¹ Ð·Ð²ÑƒÐº! ÐÑ…!',
    transliteration: 'Bukva KH â€” khripyashchiy zvuk! Akh!',
    translation: 'Letter Ð¥ â€” raspy sound! Akh!',
    mouthShape: 'Like "ch" in Scottish "loch", from throat',
    examples: ['Ñ…Ð¾Ñ€Ð¾ÑˆÐ¾', 'Ð°Ñ…Ð½ÑƒÐ»', 'Ð¼ÑƒÑ…Ð¾Ð¼Ð¾Ñ€'],
  },
};

// =============================================================================
// SCENE 2: "FRIENDLY HARES" (Letters Ð¦, Ð¤)
// =============================================================================

export const SCENE_2_HARES_SHIP: SceneScript = {
  id: 'act5_scene2_hares',
  title: 'Friendly Hares',
  letter: 'Ð¦+Ð¤',
  setup: 'Hares scare away fox. Then a ship returns with flags!',

  stages: [
    {
      id: 'hares_unite',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð—Ð°Ð¹Ñ†Ñ‹ Ð·Ð°ÐºÑ€Ð¸Ñ‡Ð°Ð»Ð¸ Ñ…Ð¾Ñ€Ð¾Ð¼! Ð¦-Ñ†-Ñ†! Ð›Ð¸ÑÐ¸Ñ†Ð° Ð¸ÑÐ¿ÑƒÐ³Ð°Ð»Ð°ÑÑŒ!',
          transliteration: 'Zaytsy zakrichali khorom! Ts-ts-ts! Lisitsa ispugalas!',
          translation: 'Hares shouted in-chorus! Ts-ts-ts! Fox got-scared!',
          sound: 'Ð¦',
        },
      ],
    },
    {
      id: 'ship_returns',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'happy',
          russian: 'Ð¤Ð»Ð¾Ñ‚ Ð¿Ð»Ñ‹Ð²Ñ‘Ñ‚! Ð¤-Ñ„-Ñ„! Ð¤Ð»Ð°Ð³ Ð½Ð° ÐºÐ°Ð¶Ð´Ð¾Ð¼ ÐºÐ¾Ñ€Ð°Ð±Ð»Ðµ!',
          transliteration: 'Flot plyvyot! F-f-f! Flag na kazhdom korable!',
          translation: 'Fleet sails! F-f-f! Flag on each ship!',
          sound: 'Ð¤',
        },
      ],
      interaction: {
        type: 'sequence',
        target: 'flags',
        feedback: 'Watch ships with flags!',
        items: ['Ц', 'Ф'],
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð¦+Ð¤',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð¦ â€” "Ñ‚Ñ"! Ð‘ÑƒÐºÐ²Ð° Ð¤ â€” Ñ€ÐµÐ´ÐºÐ°Ñ!',
    transliteration: 'Bukva TS â€” "ts"! Bukva F â€” redkaya!',
    translation: 'Letter Ð¦ â€” "ts"! Letter Ð¤ â€” rare!',
    mouthShape: 'Ð¦: like "ts" in "cats". Ð¤: like "f" in "fan"',
    examples: ['Ð·Ð°Ð¹Ñ†Ñ‹', 'Ð»Ð¸ÑÐ¸Ñ†Ð°', 'Ñ„Ð»Ð¾Ñ‚', 'Ñ„Ð»Ð°Ð³'],
  },
};

// =============================================================================
// SCENE 3: "FOREST SEARCH" (Letter Ð©)
// =============================================================================

export const SCENE_3_FOREST: SceneScript = {
  id: 'act5_scene3_forest',
  title: 'Forest Search',
  letter: 'Ð©',
  setup: 'Tanya wanders into forest thicket. Nyura searches for her!',

  stages: [
    {
      id: 'tanya_lost',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'worried',
          russian: 'Ð¢Ð°Ð½Ñ Ð·Ð°ÑˆÐ»Ð° Ð² Ñ‡Ð°Ñ‰Ñƒ! Ð©-Ñ‰-Ñ‰! Ð˜Ñ‰Ñƒ, Ð¸Ñ‰Ñƒ!',
          transliteration: 'Tanya zashla v chashchu! Shch-shch-shch! Ishchu, ishchu!',
          translation: 'Tanya went into thicket! Shch-shch-shch! Looking-for, looking-for!',
          sound: 'Ð©',
        },
      ],
      interaction: {
        type: 'click',
        target: 'forest',
        feedback: 'Search in the forest!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð©',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð© â€” ÑÐ°Ð¼Ñ‹Ð¹ Ñ‚Ñ€ÑƒÐ´Ð½Ñ‹Ð¹ Ð·Ð²ÑƒÐº! Ð©-Ñ‰-Ñ‰!',
    transliteration: 'Bukva SHCH â€” samyy trudnyy zvuk! Shch-shch-shch!',
    translation: 'Letter Ð© â€” hardest sound! Shch-shch-shch!',
    mouthShape: 'Like "fresh cheese" said quickly',
    examples: ['Ð¸Ñ‰Ñƒ', 'Ñ€Ð¾Ñ‰Ð°', 'Ñ‡Ð°Ñ‰Ð°', 'Ñ‰Ð°Ð²ÐµÐ»ÑŒ'],
  },
};

// =============================================================================
// SCENE 4: "NEW HOUSE AND TOYS" (Letters Ð­, Ð¯)
// =============================================================================

export const SCENE_4_HOUSE_TOYS: SceneScript = {
  id: 'act5_scene4_house',
  title: 'New House and Toys',
  letter: 'Ð­+Ð¯',
  setup: 'New tall house! But Yasha won\'t share his toys.',

  stages: [
    {
      id: 'new_house',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'Ð­Ñ‚Ð¾ Ð½Ð¾Ð²Ñ‹Ð¹ Ð²Ñ‹ÑÐ¾ÐºÐ¸Ð¹ Ð´Ð¾Ð¼! Ð­-Ñ-Ñ! Ð¡ Ð±Ð°Ð»ÐºÐ¾Ð½Ð°Ð¼Ð¸!',
          transliteration: 'Eto novyy vysokiy dom! E-e-e! S balkonami!',
          translation: 'This new tall house! E-e-e! With balconies!',
          sound: 'Ð­',
        },
      ],
    },
    {
      id: 'yasha_selfish',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'worried',
          russian: 'Ð¯ÑˆÐ° Ð²ÑÐµÐ³Ð´Ð° Ð³Ð¾Ð²Ð¾Ñ€Ð¸Ð»: "Ð­Ñ‚Ð¾ Ð¼Ð¾Ñ‘ ÑÐ±Ð»Ð¾ÐºÐ¾! ÐœÐ¾Ñ Ð¼Ð°ÑˆÐ¸Ð½Ð°!" Ð¯-Ñ-Ñ!',
          transliteration: 'Yasha vsegda govoril: "Eto moyo yabloko! Moya mashina!" Ya-ya-ya!',
          translation: 'Yasha always said: "This my apple! My car!" Ya-ya-ya!',
          sound: 'Ð¯',
        },
      ],
      interaction: {
        type: 'sequence',
        target: 'sharing',
        feedback: 'Learn to share!',
        items: ['Э', 'Я'],
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð­+Ð¯',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð­ â€” Ñ€ÐµÐ´ÐºÐ°Ñ! Ð‘ÑƒÐºÐ²Ð° Ð¯ â€” "Ð¹Ð°"!',
    transliteration: 'Bukva E â€” redkaya! Bukva YA â€” "ya"!',
    translation: 'Letter Ð­ â€” rare! Letter Ð¯ â€” "ya"!',
    mouthShape: 'Ð­: like "e" in "bed". Ð¯: like "ya" in "yard"',
    examples: ['ÑÑ‚Ð¾', 'ÑÑ‚Ð°Ð¶Ð¸', 'Ð¯ÑˆÐ°', 'ÑÐ±Ð»Ð¾ÐºÐ¾'],
  },
};

// =============================================================================
// SCENE 5: "HEDGEHOG AND MORNING" (Letters Ð, Ð®)
// =============================================================================

export const SCENE_5_HEDGEHOG: SceneScript = {
  id: 'act5_scene5_hedgehog',
  title: 'Hedgehog and Morning',
  letter: 'Ð+Ð®',
  setup: 'Vera finds hedgehog! Morning routine begins.',

  stages: [
    {
      id: 'find_hedgehog',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'ÐŸÐ¾Ð´ Ñ‘Ð»ÐºÐ¾Ð¹ Ñ‘Ð¶Ð¸Ðº! Ð-Ñ‘-Ñ‘! Ð•Ð»ÑŒ Ð½Ð° Ñ‘Ð¶Ð¸ÐºÐ° Ð¿Ð¾Ñ…Ð¾Ð¶Ð°!',
          transliteration: 'Pod yolkoy yozhik! Yo-yo-yo! Yel na yozhika pokhozha!',
          translation: 'Under fir hedgehog! Yo-yo-yo! Fir on hedgehog similar!',
          sound: 'Ð',
        },
      ],
    },
    {
      id: 'morning_routine',
      dialogue: [
        {
          speaker: 'shura',
          emotion: 'happy',
          russian: 'Ð Ð°Ð½Ð¾ ÑƒÑ‚Ñ€Ð¾Ð¼ Ñ Ð²ÑÑ‚Ð°ÑŽ! Ð®-ÑŽ-ÑŽ! Ð£Ð¼Ñ‹Ð²Ð°ÑŽÑÑŒ, Ð¾Ð´ÐµÐ²Ð°ÑŽÑÑŒ!',
          transliteration: 'Rano utrom ya vstÐ°yu! Yu-yu-yu! Umyvayus, odevayus!',
          translation: 'Early morning I get-up! Yu-yu-yu! Wash-myself, dress-myself!',
          sound: 'Ð®',
        },
      ],
      interaction: {
        type: 'sequence',
        target: 'routine',
        feedback: 'Follow morning routine!',
        items: ['Ё', 'Ю'],
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ð+Ð®',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ð â€” Ð²ÑÐµÐ³Ð´Ð° ÑƒÐ´Ð°Ñ€Ð½Ð°Ñ! Ð‘ÑƒÐºÐ²Ð° Ð® â€” "Ð¹Ñƒ"!',
    transliteration: 'Bukva YO â€” vsegda udarnaya! Bukva YU â€” "yu"!',
    translation: 'Letter Ð â€” always stressed! Letter Ð® â€” "yu"!',
    mouthShape: 'Ð: like "yo" in "yogurt". Ð®: like "you"',
    examples: ['Ñ‘Ð¶Ð¸Ðº', 'Ñ‘Ð»ÐºÐ°', 'Ð²ÑÑ‚Ð°ÑŽ', 'Ñ€Ð¸ÑÑƒÑŽ'],
  },
};

// =============================================================================
// SCENE 6: "CELEBRATION" (Letter Ðª)
// =============================================================================

export const SCENE_6_CELEBRATION: SceneScript = {
  id: 'act5_scene6_celebration',
  title: 'All Letters Learned!',
  letter: 'Ðª',
  setup: 'Final letter! Ðª is rare, but we know all 33 letters now!',

  stages: [
    {
      id: 'all_letters',
      dialogue: [
        {
          speaker: 'mama',
          emotion: 'happy',
          russian: 'ÐœÑ‹ Ð²Ñ‹ÑƒÑ‡Ð¸Ð»Ð¸ Ð²ÑÐµ 33 Ð±ÑƒÐºÐ²Ñ‹! Ð¢Ð²Ñ‘Ñ€Ð´Ñ‹Ð¹ Ð·Ð½Ð°Ðº â€” Ð¾Ð±ÑŠÑÐ²Ð»ÑÐµÐ¼ Ð¿Ñ€Ð°Ð·Ð´Ð½Ð¸Ðº!',
          transliteration: 'My vyuchili vse 33 bukvy! Tvyordyy znak â€” obyavlyayem prazdnik!',
          translation: 'We learned all 33 letters! Hard sign â€” we-announce celebration!',
        },
      ],
    },
    {
      id: 'celebration',
      dialogue: [
        {
          speaker: 'masha',
          emotion: 'excited',
          russian: 'ÐœÐ°ÑˆÐ° ÑƒÐ¼Ð½Ð°! Ð¨ÑƒÑ€Ð° ÑƒÐ¼Ð½Ð°! Ð’ÑÐµ ÑƒÐ¼Ð½Ñ‹! Ð£Ñ€Ð°!',
          transliteration: 'Masha umna! Shura umna! Vse umny! Ura!',
          translation: 'Masha clever! Shura clever! All clever! Hooray!',
        },
      ],
      interaction: {
        type: 'click',
        target: 'letters',
        feedback: 'See all 33 letters!',
      },
    },
  ],

  letterDiscovery: {
    letter: 'Ðª',
    russian: 'Ð‘ÑƒÐºÐ²Ð° Ðª â€” Ñ‚Ð²Ñ‘Ñ€Ð´Ñ‹Ð¹ Ð·Ð½Ð°Ðº! ÐžÑ‡ÐµÐ½ÑŒ Ñ€ÐµÐ´ÐºÐ¸Ð¹!',
    transliteration: 'Bukva Hard-sign â€” tvyordyy znak! Ochen redkiy!',
    translation: 'Letter Ðª â€” hard sign! Very rare!',
    mouthShape: 'Separates prefix from root, prevents softening',
    examples: ['Ð¾Ð±ÑŠÑÐ²Ð»ÑÐµÐ¼', 'ÑÑŠÐµÐ»', 'Ð¿Ð¾Ð´ÑŠÐµÐ·Ð´'],
  },
};

export const ACT5_SCENES: SceneScript[] = [
  SCENE_1_MUSHROOMS,
  SCENE_2_HARES_SHIP,
  SCENE_3_FOREST,
  SCENE_4_HOUSE_TOYS,
  SCENE_5_HEDGEHOG,
  SCENE_6_CELEBRATION,
];
