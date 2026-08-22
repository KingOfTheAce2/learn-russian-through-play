/**
 * Shared type definitions for story scene scripts.
 * Used by both kids (bukvar storybook) and adult scene data scripts.
 */

export interface SceneScript {
  id: string;
  title: string;
  letter: string;
  setup: string;
  stages: SceneStage[];
  letterDiscovery: LetterDiscovery;
}

export interface SceneStage {
  id: string;
  narration?: NarrationLine;
  dialogue?: DialogueLine[];
  interaction?: Interaction;
}

export interface NarrationLine {
  russian: string;
  transliteration: string;
  translation: string;
}

export interface DialogueLine {
  speaker: 'masha' | 'shura' | 'mama' | 'narrator';
  emotion: 'scared' | 'happy' | 'excited' | 'worried' | 'relieved' | 'determined' | 'curious';
  russian: string;
  transliteration: string;
  translation: string;
  sound?: string;
}

export interface Interaction {
  type: 'click' | 'drag' | 'sequence' | 'collect';
  target: string;
  feedback: string;
  /** For 'sequence' type: the labels to show as clickable buttons (must tap in order). */
  items?: string[];
}

export interface LetterDiscovery {
  letter: string;
  russian: string;
  transliteration: string;
  translation: string;
  mouthShape: string;
  examples: string[];
}
