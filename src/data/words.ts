import { WordData, SyllableData } from '@/types';

export const ACT1_SYLLABLES: SyllableData[] = [
  { russian: 'ма', transliteration: 'ma', letters: ['М', 'А'] },
  { russian: 'му', transliteration: 'mu', letters: ['М', 'У'] },
  { russian: 'ам', transliteration: 'am', letters: ['А', 'М'] },
  { russian: 'ум', transliteration: 'um', letters: ['У', 'М'] },
  { russian: 'на', transliteration: 'na', letters: ['Н', 'А'] },
  { russian: 'ну', transliteration: 'nu', letters: ['Н', 'У'] },
  { russian: 'ан', transliteration: 'an', letters: ['А', 'Н'] },
  { russian: 'ун', transliteration: 'un', letters: ['У', 'Н'] },
  { russian: 'ра', transliteration: 'ra', letters: ['Р', 'А'] },
  { russian: 'ру', transliteration: 'ru', letters: ['Р', 'У'] },
  { russian: 'ар', transliteration: 'ar', letters: ['А', 'Р'] },
  { russian: 'ур', transliteration: 'ur', letters: ['У', 'Р'] },
  { russian: 'ша', transliteration: 'sha', letters: ['Ш', 'А'] },
  { russian: 'шу', transliteration: 'shu', letters: ['Ш', 'У'] },
  { russian: 'аш', transliteration: 'ash', letters: ['А', 'Ш'] },
  { russian: 'уш', transliteration: 'ush', letters: ['У', 'Ш'] },
];

export const ACT1_WORDS: WordData[] = [
  {
    russian: 'мама', transliteration: 'mama', translation: 'mom',
    letters: ['М', 'А', 'М', 'А'], syllables: ['ма', 'ма'],
    act: 1, difficulty: 1,
  },
  {
    russian: 'наша', transliteration: 'nasha', translation: 'our (feminine)',
    letters: ['Н', 'А', 'Ш', 'А'], syllables: ['на', 'ша'],
    act: 1, difficulty: 2,
  },
  {
    russian: 'рама', transliteration: 'rama', translation: 'frame',
    letters: ['Р', 'А', 'М', 'А'], syllables: ['ра', 'ма'],
    act: 1, difficulty: 2,
  },
  {
    russian: 'Маша', transliteration: 'Masha', translation: 'Masha (name)',
    letters: ['М', 'А', 'Ш', 'А'], syllables: ['Ма', 'ша'],
    act: 1, difficulty: 2,
  },
  {
    russian: 'Шура', transliteration: 'Shura', translation: 'Shura (name)',
    letters: ['Ш', 'У', 'Р', 'А'], syllables: ['Шу', 'ра'],
    act: 1, difficulty: 2,
  },
  {
    russian: 'ура', transliteration: 'ura', translation: 'hooray!',
    letters: ['У', 'Р', 'А'], syllables: ['у', 'ра'],
    act: 1, difficulty: 1,
  },
  {
    russian: 'шум', transliteration: 'shum', translation: 'noise',
    letters: ['Ш', 'У', 'М'], syllables: ['шум'],
    act: 1, difficulty: 2,
  },
];

export function getWordsForLetters(learnedLetters: string[]): WordData[] {
  const upperLetters = learnedLetters.map(l => l.toUpperCase());
  return ACT1_WORDS.filter(w =>
    w.letters.every(l => upperLetters.includes(l.toUpperCase()))
  );
}
