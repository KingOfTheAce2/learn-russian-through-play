export interface LetterData {
  id: number;
  character: string;
  uppercase: string;
  lowercase: string;
  transliteration: string;
  soundDescription: string;
  exampleWords: string[];
  falseFriend?: { latin: string; note: string };
  act: number;
  syllableCombinations: string[];
}

export interface WordData {
  russian: string;
  transliteration: string;
  translation: string;
  letters: string[];
  syllables: string[];
  act: number;
  difficulty: number;
}

export interface SyllableData {
  russian: string;
  transliteration: string;
  letters: string[];
}

export interface DialogueChoice {
  text: string;
  transliteration: string;
  translation: string;
  nextNodeId: string;
  isCorrect?: boolean;
}

export interface DialogueNode {
  id: string;
  speaker: string;
  russian: string;
  transliteration: string;
  translation: string;
  choices?: DialogueChoice[];
  nextNodeId?: string;
  onComplete?: string;
}

export interface DialogueTree {
  id: string;
  npcName: string;
  nodes: DialogueNode[];
}

export interface QuestData {
  id: string;
  title: string;
  description: string;
  objectiveText: string;
  requiredLetters?: string[];
  requiredWord?: string;
  triggersDialogue?: string;
  triggersMiniGame?: boolean;
  nextQuestId?: string;
}

export interface MiniGameConfig {
  type: 'speed-match' | 'word-chase' | 'dialogue';
  letters: string[];
  words: WordData[];
  difficulty: number;
  rounds: number;
}

export interface MiniGameResult {
  type: string;
  score: number;
  maxScore: number;
  letterResults: Record<string, { correct: number; incorrect: number }>;
  passed: boolean;
  attempts: number;
}

export interface LetterScore {
  correct: number;
  incorrect: number;
  lastSeen: number;
  priority: number;
}

export interface PlayerState {
  learnedLetters: string[];
  letterScores: Record<string, LetterScore>;
  currentQuestId: string;
  completedQuests: string[];
  playerPosition: { x: number; y: number };
  translitEnabled: boolean;
  introWatched: boolean;
  actCompleted: number;
  totalPlayTime: number;
  lastSaved: number;
  learningMode: 'kids' | 'adult';
}
