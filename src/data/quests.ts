import { QuestData } from '@/types';

export const ACT1_QUESTS: QuestData[] = [
  {
    id: 'quest_first_rune',
    title: 'A Strange Land',
    description: 'You have arrived in a village where the signs glow with unfamiliar symbols. A bright rune pulses nearby - it looks like a letter.',
    objectiveText: 'Find the glowing rune nearby (А)',
    requiredLetters: ['А'],
    nextQuestId: 'quest_batch1',
  },
  {
    id: 'quest_batch1',
    title: 'Learning the Sounds',
    description: 'More runes glow around the village. Each one is a Russian letter with its own sound. Collect them to start reading the signs.',
    objectiveText: 'Collect runes У and М',
    requiredLetters: ['А', 'У', 'М'],
    triggersMiniGame: true,
    nextQuestId: 'quest_meet_masha',
  },
  {
    id: 'quest_meet_masha',
    title: 'A Friendly Voice',
    description: 'A girl named Masha noticed you collecting runes. She wants to help you put the letters together into your first word!',
    objectiveText: 'Talk to Маша',
    triggersDialogue: 'masha_intro',
    nextQuestId: 'quest_batch2',
  },
  {
    id: 'quest_batch2',
    title: 'The Missing Letters',
    description: 'Masha told you about more runes hidden around the village. You need all six letters to prove yourself at the gate.',
    objectiveText: 'Collect runes Ш, Р, and Н',
    requiredLetters: ['А', 'У', 'М', 'Ш', 'Р', 'Н'],
    triggersMiniGame: true,
    nextQuestId: 'quest_gate',
  },
  {
    id: 'quest_gate',
    title: 'The Gatekeeper',
    description: 'Shura guards the village gate. She will only let you pass if you can spell a word using all the letters you have learned.',
    objectiveText: 'Talk to Шура at the gate',
    triggersDialogue: 'shura_gate',
    nextQuestId: 'quest_complete',
  },
  {
    id: 'quest_complete',
    title: 'Act 1 Complete!',
    description: 'You have learned 6 Russian letters and earned passage through the gate. The road ahead awaits!',
    objectiveText: 'Act 1 Complete!',
  },
];

export function getQuestById(id: string): QuestData | undefined {
  return ACT1_QUESTS.find(q => q.id === id);
}
