/** QWERTY -> JCUKEN keyboard mapping for typing Russian letters. */
export const QWERTY_TO_RUSSIAN: Record<string, string> = {
  'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е',
  'y': 'н', 'u': 'г', 'i': 'ш', 'o': 'щ', 'p': 'з',
  '[': 'х', ']': 'ъ',
  'a': 'ф', 's': 'ы', 'd': 'в', 'f': 'а', 'g': 'п',
  'h': 'р', 'j': 'о', 'k': 'л', 'l': 'д', ';': 'ж',
  "'": 'э',
  'z': 'я', 'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и',
  'n': 'т', 'm': 'ь', ',': 'б', '.': 'ю', '/': '.',
};

/** Russian letter to QWERTY key (reverse lookup). */
export const RUSSIAN_TO_QWERTY: Record<string, string> = {};
for (const [qwerty, russian] of Object.entries(QWERTY_TO_RUSSIAN)) {
  RUSSIAN_TO_QWERTY[russian] = qwerty;
}

/** On-screen keyboard layout (3 rows). */
export const KEYBOARD_ROWS = [
  ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
  ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
  ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'],
];

/** Act 1 letters that the player will learn. */
export const ACT1_KEYBOARD_LETTERS = ['а', 'у', 'м', 'ш', 'р', 'н'];

/** Convert a QWERTY keypress to Russian letter (lowercase). */
export function qwertyToRussian(key: string): string | null {
  return QWERTY_TO_RUSSIAN[key.toLowerCase()] ?? null;
}
