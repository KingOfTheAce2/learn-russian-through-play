/**
 * Learning Mode Types
 */

export type LearningMode = 'kids' | 'adult';

export interface ModeConfig {
  mode: LearningMode;
  showTransliteration: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const DEFAULT_MODE_CONFIG: ModeConfig = {
  mode: 'kids',
  showTransliteration: true,
  difficulty: 'easy',
};
