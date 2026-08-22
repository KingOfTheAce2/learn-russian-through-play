import { LetterScore } from '@/types';
import { GameState } from './progress';

export class SRSManager {
  private static instance: SRSManager;

  private constructor() {}

  static getInstance(): SRSManager {
    if (!SRSManager.instance) {
      SRSManager.instance = new SRSManager();
    }
    return SRSManager.instance;
  }

  /** Calculate review priority for a letter. Higher = needs more practice. */
  calculatePriority(score: LetterScore): number {
    const errorRate = score.incorrect / (score.correct + 1);
    const timeSinceLastSeen = (Date.now() - score.lastSeen) / 1000; // seconds
    const timeDecay = timeSinceLastSeen / 60; // minutes
    return errorRate + timeDecay;
  }

  /** Get letters sorted by review priority (highest priority first). */
  getReviewOrder(): string[] {
    const state = GameState.getInstance();
    const letters = state.data.learnedLetters;

    return [...letters].sort((a, b) => {
      const scoreA = state.getLetterScore(a);
      const scoreB = state.getLetterScore(b);
      if (!scoreA || !scoreB) return 0;
      return this.calculatePriority(scoreB) - this.calculatePriority(scoreA);
    });
  }

  /** Pick N letters for review, weighted toward those needing practice. */
  pickForReview(count: number): string[] {
    const ordered = this.getReviewOrder();
    return ordered.slice(0, count);
  }

  /** Update priorities for all learned letters. */
  updateAllPriorities(): void {
    const state = GameState.getInstance();
    for (const letter of state.data.learnedLetters) {
      const score = state.getLetterScore(letter);
      if (score) {
        score.priority = this.calculatePriority(score);
      }
    }
  }
}
