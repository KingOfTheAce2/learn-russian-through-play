import { LetterData } from '@/types';

export const ALL_LETTERS: LetterData[] = [
  // Act 1 - First 6 letters (Arkhangelskaya bukvar order)
  {
    id: 1, character: 'А', uppercase: 'А', lowercase: 'а',
    transliteration: 'a', soundDescription: 'Like "a" in "father"',
    exampleWords: ['мама', 'рама'],
    falseFriend: { latin: 'A', note: 'Same sound as English A in "father"' },
    act: 1, syllableCombinations: ['ма', 'на', 'ра', 'ша', 'ам', 'ан', 'ар', 'аш'],
  },
  {
    id: 2, character: 'У', uppercase: 'У', lowercase: 'у',
    transliteration: 'u', soundDescription: 'Like "oo" in "moon"',
    exampleWords: ['ура', 'шум'],
    falseFriend: { latin: 'Y', note: 'Looks like Y but sounds like "oo"' },
    act: 1, syllableCombinations: ['му', 'ну', 'ру', 'шу', 'ум', 'ун', 'ур', 'уш'],
  },
  {
    id: 3, character: 'М', uppercase: 'М', lowercase: 'м',
    transliteration: 'm', soundDescription: 'Like "m" in "mother"',
    exampleWords: ['мама', 'Маша'],
    falseFriend: { latin: 'M', note: 'Same as English M' },
    act: 1, syllableCombinations: ['ма', 'му', 'ам', 'ум'],
  },
  {
    id: 4, character: 'Ш', uppercase: 'Ш', lowercase: 'ш',
    transliteration: 'sh', soundDescription: 'Like "sh" in "shush"',
    exampleWords: ['Маша', 'Шура', 'шум'],
    act: 1, syllableCombinations: ['ша', 'шу', 'аш', 'уш'],
  },
  {
    id: 5, character: 'Р', uppercase: 'Р', lowercase: 'р',
    transliteration: 'r', soundDescription: 'Rolled "r", like in Spanish',
    exampleWords: ['рама', 'ура', 'Шура'],
    falseFriend: { latin: 'P', note: 'Looks like P but sounds like R!' },
    act: 1, syllableCombinations: ['ра', 'ру', 'ар', 'ур'],
  },
  {
    id: 6, character: 'Н', uppercase: 'Н', lowercase: 'н',
    transliteration: 'n', soundDescription: 'Like "n" in "no"',
    exampleWords: ['наша', 'Нина'],
    falseFriend: { latin: 'H', note: 'Looks like H but sounds like N!' },
    act: 1, syllableCombinations: ['на', 'ну', 'ан', 'ун'],
  },
  // Acts 2-6 letters are defined but locked. Minimal data for now.
  { id: 7, character: 'О', uppercase: 'О', lowercase: 'о', transliteration: 'o', soundDescription: 'Like "o" in "more"', exampleWords: ['он', 'окно'], act: 2, syllableCombinations: [] },
  { id: 8, character: 'С', uppercase: 'С', lowercase: 'с', transliteration: 's', soundDescription: 'Like "s" in "sun"', exampleWords: ['сон', 'нос'], falseFriend: { latin: 'C', note: 'Looks like C but always "s"' }, act: 2, syllableCombinations: [] },
  { id: 9, character: 'Т', uppercase: 'Т', lowercase: 'т', transliteration: 't', soundDescription: 'Like "t" in "top"', exampleWords: ['тут', 'там'], falseFriend: { latin: 'T', note: 'Same as English T' }, act: 2, syllableCombinations: [] },
  { id: 10, character: 'Л', uppercase: 'Л', lowercase: 'л', transliteration: 'l', soundDescription: 'Like "l" in "lamp"', exampleWords: ['лампа', 'мал'], act: 2, syllableCombinations: [] },
  { id: 11, character: 'К', uppercase: 'К', lowercase: 'к', transliteration: 'k', soundDescription: 'Like "k" in "kite"', exampleWords: ['кот', 'мак'], falseFriend: { latin: 'K', note: 'Same as English K' }, act: 2, syllableCombinations: [] },
  { id: 12, character: 'Е', uppercase: 'Е', lowercase: 'е', transliteration: 'ye/e', soundDescription: 'Like "ye" in "yet"', exampleWords: ['ел', 'мел'], falseFriend: { latin: 'E', note: 'Looks like E but sounds "ye"' }, act: 2, syllableCombinations: [] },
  { id: 13, character: 'И', uppercase: 'И', lowercase: 'и', transliteration: 'i', soundDescription: 'Like "ee" in "meet"', exampleWords: ['или', 'кит'], falseFriend: { latin: 'N (reversed)', note: 'Looks like reversed N' }, act: 3, syllableCombinations: [] },
  { id: 14, character: 'П', uppercase: 'П', lowercase: 'п', transliteration: 'p', soundDescription: 'Like "p" in "pot"', exampleWords: ['папа', 'пол'], falseFriend: { latin: 'Pi/Gate', note: 'Looks like pi symbol' }, act: 3, syllableCombinations: [] },
  { id: 15, character: 'В', uppercase: 'В', lowercase: 'в', transliteration: 'v', soundDescription: 'Like "v" in "van"', exampleWords: ['вот', 'вода'], falseFriend: { latin: 'B', note: 'Looks like B but sounds like V!' }, act: 3, syllableCombinations: [] },
  { id: 16, character: 'Д', uppercase: 'Д', lowercase: 'д', transliteration: 'd', soundDescription: 'Like "d" in "dog"', exampleWords: ['дом', 'да'], act: 3, syllableCombinations: [] },
  { id: 17, character: 'З', uppercase: 'З', lowercase: 'з', transliteration: 'z', soundDescription: 'Like "z" in "zoo"', exampleWords: ['зуб', 'коза'], act: 3, syllableCombinations: [] },
  { id: 18, character: 'Я', uppercase: 'Я', lowercase: 'я', transliteration: 'ya', soundDescription: 'Like "ya" in "yard"', exampleWords: ['яма', 'моя'], act: 3, syllableCombinations: [] },
  { id: 19, character: 'Б', uppercase: 'Б', lowercase: 'б', transliteration: 'b', soundDescription: 'Like "b" in "boy"', exampleWords: ['бот', 'был'], act: 4, syllableCombinations: [] },
  { id: 20, character: 'Г', uppercase: 'Г', lowercase: 'г', transliteration: 'g', soundDescription: 'Like "g" in "go"', exampleWords: ['год', 'нога'], act: 4, syllableCombinations: [] },
  { id: 21, character: 'Ч', uppercase: 'Ч', lowercase: 'ч', transliteration: 'ch', soundDescription: 'Like "ch" in "church"', exampleWords: ['час', 'дочь'], act: 4, syllableCombinations: [] },
  { id: 22, character: 'Ж', uppercase: 'Ж', lowercase: 'ж', transliteration: 'zh', soundDescription: 'Like "s" in "pleasure"', exampleWords: ['жук', 'нож'], act: 4, syllableCombinations: [] },
  { id: 23, character: 'Ц', uppercase: 'Ц', lowercase: 'ц', transliteration: 'ts', soundDescription: 'Like "ts" in "cats"', exampleWords: ['цирк', 'конец'], act: 4, syllableCombinations: [] },
  { id: 24, character: 'Й', uppercase: 'Й', lowercase: 'й', transliteration: 'y', soundDescription: 'Short "y" like in "boy"', exampleWords: ['мой', 'край'], act: 4, syllableCombinations: [] },
  { id: 25, character: 'Ф', uppercase: 'Ф', lowercase: 'ф', transliteration: 'f', soundDescription: 'Like "f" in "fun"', exampleWords: ['факт', 'шарф'], act: 5, syllableCombinations: [] },
  { id: 26, character: 'Э', uppercase: 'Э', lowercase: 'э', transliteration: 'e', soundDescription: 'Like "e" in "met"', exampleWords: ['это', 'эхо'], act: 5, syllableCombinations: [] },
  { id: 27, character: 'Ю', uppercase: 'Ю', lowercase: 'ю', transliteration: 'yu', soundDescription: 'Like "you"', exampleWords: ['юг', 'юла'], act: 5, syllableCombinations: [] },
  { id: 28, character: 'Ё', uppercase: 'Ё', lowercase: 'ё', transliteration: 'yo', soundDescription: 'Like "yo" in "yonder"', exampleWords: ['ёж', 'мёд'], act: 5, syllableCombinations: [] },
  { id: 29, character: 'Х', uppercase: 'Х', lowercase: 'х', transliteration: 'kh', soundDescription: 'Like "ch" in Scottish "loch"', exampleWords: ['хор', 'ухо'], falseFriend: { latin: 'X', note: 'Looks like X but sounds "kh"' }, act: 5, syllableCombinations: [] },
  { id: 30, character: 'Щ', uppercase: 'Щ', lowercase: 'щ', transliteration: 'shch', soundDescription: 'Like "sh" + "ch" together', exampleWords: ['щит', 'борщ'], act: 5, syllableCombinations: [] },
  { id: 31, character: 'Ъ', uppercase: 'Ъ', lowercase: 'ъ', transliteration: '', soundDescription: 'Hard sign - brief pause', exampleWords: ['съел', 'объём'], act: 6, syllableCombinations: [] },
  { id: 32, character: 'Ы', uppercase: 'Ы', lowercase: 'ы', transliteration: 'y', soundDescription: 'No English equivalent - deep "i"', exampleWords: ['мы', 'сыр'], act: 6, syllableCombinations: [] },
  { id: 33, character: 'Ь', uppercase: 'Ь', lowercase: 'ь', transliteration: '', soundDescription: 'Soft sign - softens preceding consonant', exampleWords: ['мать', 'день'], act: 6, syllableCombinations: [] },
];

export const ACT1_LETTER_DATA = ALL_LETTERS.filter(l => l.act === 1);

export function getLetterByChar(char: string): LetterData | undefined {
  return ALL_LETTERS.find(l => l.character === char.toUpperCase() || l.uppercase === char || l.lowercase === char);
}
