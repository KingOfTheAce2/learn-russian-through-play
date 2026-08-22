import { PlayerState, LetterScore } from '@/types';

const SAVE_KEY = 'russian-abcs-save';

const DEFAULT_STATE: PlayerState = {
  learnedLetters: [],
  letterScores: {},
  currentQuestId: 'quest_first_rune',
  completedQuests: [],
  playerPosition: { x: 0, y: 0 },
  translitEnabled: true,
  introWatched: false,
  actCompleted: 0,
  totalPlayTime: 0,
  lastSaved: 0,
  learningMode: 'kids',
};

export class GameState {
  private static instance: GameState;
  private state: PlayerState;

  private constructor() {
    this.state = { ...DEFAULT_STATE };
  }

  static getInstance(): GameState {
    if (!GameState.instance) {
      GameState.instance = new GameState();
    }
    return GameState.instance;
  }

  get data(): Readonly<PlayerState> {
    return this.state;
  }

  // Letters
  learnLetter(letter: string): void {
    const upper = letter.toUpperCase();
    if (!this.state.learnedLetters.includes(upper)) {
      this.state.learnedLetters.push(upper);
      if (!this.state.letterScores[upper]) {
        this.state.letterScores[upper] = {
          correct: 0,
          incorrect: 0,
          lastSeen: Date.now(),
          priority: 1,
        };
      }
      this.save();
    }
  }

  hasLetter(letter: string): boolean {
    return this.state.learnedLetters.includes(letter.toUpperCase());
  }

  recordLetterResult(letter: string, correct: boolean): void {
    const upper = letter.toUpperCase();
    const score = this.state.letterScores[upper];
    if (score) {
      if (correct) score.correct++;
      else score.incorrect++;
      score.lastSeen = Date.now();
      this.save();
    }
  }

  getLetterScore(letter: string): LetterScore | undefined {
    return this.state.letterScores[letter.toUpperCase()];
  }

  // Quests
  setCurrentQuest(questId: string): void {
    this.state.currentQuestId = questId;
    this.save();
  }

  completeQuest(questId: string): void {
    if (!this.state.completedQuests.includes(questId)) {
      this.state.completedQuests.push(questId);
      this.save();
    }
  }

  isQuestCompleted(questId: string): boolean {
    return this.state.completedQuests.includes(questId);
  }

  // Player position
  setPlayerPosition(x: number, y: number): void {
    this.state.playerPosition = { x, y };
  }

  // Translit toggle
  toggleTranslit(): void {
    this.state.translitEnabled = !this.state.translitEnabled;
    this.save();
  }

  setIntroWatched(): void {
    this.state.introWatched = true;
    this.save();
  }

  completeAct(act: number): void {
    this.state.actCompleted = act;
    this.save();
  }

  // Learning Mode
  setLearningMode(mode: 'kids' | 'adult'): void {
    this.state.learningMode = mode;
    this.save();
  }

  getLearningMode(): 'kids' | 'adult' {
    return this.state.learningMode || 'kids';
  }

  // Persistence
  save(): void {
    this.state.lastSaved = Date.now();
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(this.state));
    } catch {
      // localStorage may be unavailable
    }
  }

  load(): boolean {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as PlayerState;
        this.state = { ...DEFAULT_STATE, ...saved };
        return true;
      }
    } catch {
      // corrupted save
    }
    return false;
  }

  hasSave(): boolean {
    try {
      return localStorage.getItem(SAVE_KEY) !== null;
    } catch {
      return false;
    }
  }

  reset(): void {
    // Preserve learning mode when resetting
    const currentMode = this.state.learningMode;
    this.state = { ...DEFAULT_STATE, learningMode: currentMode };
    this.save(); // Save the reset state with preserved mode
    try {
      // Don't remove from localStorage - we want to keep the mode
    } catch {
      // ignore
    }
  }
}
