import { MiniGameConfig, WordData } from '@/types';
import { GameState } from './progress';
import { SRSManager } from './srs';
import { getWordsForLetters } from '@/data/words';

export type MiniGameType = 'speed-match' | 'word-chase' | 'dialogue';

export class MiniGameManager {
  private static instance: MiniGameManager;
  private lastType: MiniGameType | null = null;

  private constructor() {}

  static getInstance(): MiniGameManager {
    if (!MiniGameManager.instance) {
      MiniGameManager.instance = new MiniGameManager();
    }
    return MiniGameManager.instance;
  }

  /** Alternate mini-game types: speed-match first, then word-chase. */
  private pickType(): MiniGameType {
    if (this.lastType === null || this.lastType === 'word-chase') {
      this.lastType = 'speed-match';
    } else {
      this.lastType = 'word-chase';
    }
    return this.lastType;
  }

  /** Build a mini-game config based on current progress. */
  buildConfig(): MiniGameConfig {
    const state = GameState.getInstance();
    const srs = SRSManager.getInstance();
    const learned = state.data.learnedLetters;
    const type = this.pickType();

    // Use SRS to prioritize letters that need review
    const reviewLetters = srs.pickForReview(Math.min(4, learned.length));
    // Pad with other learned letters if needed
    while (reviewLetters.length < Math.min(4, learned.length)) {
      const remaining = learned.filter(l => !reviewLetters.includes(l));
      if (remaining.length === 0) break;
      reviewLetters.push(remaining[Math.floor(Math.random() * remaining.length)]);
    }

    const words = getWordsForLetters(learned);
    const difficulty = Math.min(3, Math.floor(learned.length / 2));
    const rounds = 5;

    return {
      type,
      letters: reviewLetters,
      words,
      difficulty,
      rounds,
    };
  }

  /** Build config for dialogue mini-game with a specific dialogue tree. */
  buildDialogueConfig(dialogueId: string): MiniGameConfig {
    const state = GameState.getInstance();
    const learned = state.data.learnedLetters;
    const words = getWordsForLetters(learned);

    return {
      type: 'dialogue',
      letters: learned,
      words,
      difficulty: 1,
      rounds: 1,
    };
  }
}
