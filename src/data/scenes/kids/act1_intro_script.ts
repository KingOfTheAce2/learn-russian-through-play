import { SceneScript, SceneStage, NarrationLine } from '../types';

/**
 * BUKVAR INTRODUCTION
 */

export const BUKVAR_INTRO_SCRIPT: SceneScript = {
  id: 'bukvar_intro',
  title: 'The Bukvar',
  letter: '',

  setup: 'Before your adventure begins, learn about the bukvar.',

  stages: [
    {
      id: 'welcome',
      narration: {
        russian: 'Ð”Ð¾Ð±Ñ€Ð¾ Ð¿Ð¾Ð¶Ð°Ð»Ð¾Ð²Ð°Ñ‚ÑŒ!',
        transliteration: 'Dobro pozhalovat!',
        translation: 'Welcome!',
      },
    },
    {
      id: 'bukvar_explanation',
      narration: {
        russian: 'Ð­Ñ‚Ð¾ Ð±ÑƒÐºÐ²Ð°Ñ€ÑŒ â€” Ð¿ÐµÑ€Ð²Ð°Ñ ÐºÐ½Ð¸Ð³Ð° Ñ€ÑƒÑÑÐºÐ¸Ñ… Ð´ÐµÑ‚ÐµÐ¹.',
        transliteration: 'Eto bukvar â€” pervaya kniga russkikh detey.',
        translation: 'This is bukvar - first book of Russian children.',
      },
    },
    {
      id: 'history',
      narration: {
        russian: 'Ð§ÐµÑ‚Ñ‹Ñ€ÐµÑÑ‚Ð° Ð»ÐµÑ‚ Ð´ÐµÑ‚Ð¸ ÑƒÑ‡Ð°Ñ‚ÑÑ Ñ‡Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð¿Ð¾ Ð±ÑƒÐºÐ²Ð°Ñ€ÑŽ.',
        transliteration: 'ChetyrestÃ¡ let deti uchatsya chitat po bukvaryu.',
        translation: 'Four hundred years children learn to read by bukvar.',
      },
    },
    {
      id: 'tradition',
      narration: {
        russian: 'Ð¢Ð²Ð¾Ñ Ð±Ð°Ð±ÑƒÑˆÐºÐ° Ñ‡Ð¸Ñ‚Ð°Ð»Ð° Ð±ÑƒÐºÐ²Ð°Ñ€ÑŒ. Ð•Ñ‘ Ð±Ð°Ð±ÑƒÑˆÐºÐ° Ñ‚Ð¾Ð¶Ðµ.',
        transliteration: 'Tvoya babushka chitala bukvar. Yeyo babushka tozhe.',
        translation: 'Your grandmother read bukvar. Her grandmother too.',
      },
    },
    {
      id: 'letter_order',
      narration: {
        russian: 'ÐšÐ°Ð¶Ð´Ð°Ñ Ð±ÑƒÐºÐ²Ð° Ð¿Ñ€Ð¸Ñ…Ð¾Ð´Ð¸Ñ‚ Ð² Ð½ÑƒÐ¶Ð½Ð¾Ðµ Ð²Ñ€ÐµÐ¼Ñ.',
        transliteration: 'Kazhdaya bukva prikhodit v nuzhnoye vremya.',
        translation: 'Each letter comes in right time.',
      },
    },
    {
      id: 'first_letters',
      narration: {
        russian: 'Ð¡Ð½Ð°Ñ‡Ð°Ð»Ð° Ð Ð¸ Ð£ â€” Ð·Ð²ÑƒÐºÐ¸ Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ñ‹.',
        transliteration: 'Snachala A i U â€” zvuki prirody.',
        translation: 'First A and U - sounds of nature.',
      },
    },
    {
      id: 'then_m',
      narration: {
        russian: 'ÐŸÐ¾Ñ‚Ð¾Ð¼ Ðœ â€” Ð´Ð»Ñ ÑÐ°Ð¼Ð¾Ð³Ð¾ Ð²Ð°Ð¶Ð½Ð¾Ð³Ð¾ ÑÐ»Ð¾Ð²Ð°: ÐœÐÐœÐ.',
        transliteration: 'Potom M â€” dlya samogo vazhnogo slova: MAMA.',
        translation: 'Then M - for most important word: MAMA.',
      },
    },
    {
      id: 'meet_masha',
      narration: {
        russian: 'ÐŸÐ¾Ð·Ð½Ð°ÐºÐ¾Ð¼ÑŒÑÑ Ñ ÐœÐ°ÑˆÐµÐ¹. ÐžÐ½Ð° Ñ‚Ð²Ð¾Ð¹ Ð¿Ñ€Ð¾Ð²Ð¾Ð´Ð½Ð¸Ðº.',
        transliteration: 'Poznakomsa s Mashey. Ona tvoy provodnik.',
        translation: 'Meet Masha. She is your guide.',
      },
    },
    {
      id: 'meet_shura',
      narration: {
        russian: 'Ð ÑÑ‚Ð¾ Ð¨ÑƒÑ€Ð°. ÐžÐ½ Ñ…Ñ€Ð°Ð±Ñ€Ñ‹Ð¹ Ð¸ Ð²ÐµÑ€Ð½Ñ‹Ð¹ Ð´Ñ€ÑƒÐ³.',
        transliteration: 'A eto Shura. On khrabryy i vernyy drug.',
        translation: 'And this is Shura. He is brave and loyal friend.',
      },
    },
    {
      id: 'journey_begins',
      narration: {
        russian: 'Ð¢Ð²Ð¾Ñ‘ Ð¿ÑƒÑ‚ÐµÑˆÐµÑÑ‚Ð²Ð¸Ðµ Ð½Ð°Ñ‡Ð¸Ð½Ð°ÐµÑ‚ÑÑ ÑÐµÐ¹Ñ‡Ð°Ñ.',
        transliteration: 'Tvoyo puteshestviye nachinaetsya seychas.',
        translation: 'Your journey begins now.',
      },
    },
    {
      id: 'first_letter',
      narration: {
        russian: 'ÐŸÐµÑ€Ð²Ð°Ñ Ð±ÑƒÐºÐ²Ð° â€” ÑÑ‚Ð¾ Ð. Ð‘ÑƒÐºÐ²Ð° ÑƒÐ´Ð¸Ð²Ð»ÐµÐ½Ð¸Ñ Ð¸ ÑÑ‚Ñ€Ð°Ñ…Ð°.',
        transliteration: 'Pervaya bukva â€” eto A. Bukva udivleniya i strakha.',
        translation: 'First letter is A. Letter of surprise and fear.',
      },
    },
    {
      id: 'ready',
      narration: {
        russian: 'Ð“Ð¾Ñ‚Ð¾Ð²? ÐœÐ°ÑˆÐ° Ð¸ Ð¨ÑƒÑ€Ð° Ð¶Ð´ÑƒÑ‚ Ñ‚ÐµÐ±Ñ Ð² Ð»ÐµÑÑƒ...',
        transliteration: 'Gotov? Masha i Shura zhdut tebya v lesu...',
        translation: 'Ready? Masha and Shura wait for you in forest...',
      },
    },
  ],

  letterDiscovery: {
    letter: '',
    russian: 'ÐŸÐ¾Ñ€Ð° Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¸ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ!',
    transliteration: 'Pora nachat priklyucheniye!',
    translation: 'Time to begin adventure!',
    mouthShape: '',
    examples: [],
  },
};
