import { DialogueTree } from '@/types';

export const DIALOGUES: Record<string, DialogueTree> = {
  // --- Masha's quest dialogue (quest_meet_masha) ---
  masha_intro: {
    id: 'masha_intro',
    npcName: 'Маша',
    nodes: [
      {
        id: 'start',
        speaker: 'Маша',
        russian: 'Привет! Я Маша!',
        transliteration: 'Privet! Ya Masha!',
        translation: 'Hello! I am Masha!',
        nextNodeId: 'explain',
      },
      {
        id: 'explain',
        speaker: 'Маша',
        russian: 'Ты новый здесь? Я помогу тебе!',
        transliteration: 'Ty novyy zdes? Ya pomogu tebe!',
        translation: "You're new here? I'll help you!",
        nextNodeId: 'ask_name',
      },
      {
        id: 'ask_name',
        speaker: 'Маша',
        russian: 'Ты знаешь, как меня зовут?',
        transliteration: 'Ty znayesh, kak menya zovut?',
        translation: 'Do you know what my name is?',
        choices: [
          {
            text: 'Маша',
            transliteration: 'Masha',
            translation: 'Masha',
            nextNodeId: 'correct_name',
            isCorrect: true,
          },
          {
            text: 'Шура',
            transliteration: 'Shura',
            translation: 'Shura',
            nextNodeId: 'wrong_name',
            isCorrect: false,
          },
        ],
      },
      {
        id: 'correct_name',
        speaker: 'Маша',
        russian: 'Да! Ма-ша! Молодец!',
        transliteration: 'Da! Ma-sha! Molodets!',
        translation: 'Yes! Ma-sha! Well done!',
        nextNodeId: 'teach_mama',
      },
      {
        id: 'wrong_name',
        speaker: 'Маша',
        russian: 'Нет, я Маша! Ма-ша!',
        transliteration: 'Nyet, ya Masha! Ma-sha!',
        translation: 'No, I am Masha! Ma-sha!',
        nextNodeId: 'teach_mama',
      },
      {
        id: 'teach_mama',
        speaker: 'Маша',
        russian: 'Ты знаешь буквы М и А. Скажи: МА-МА!',
        transliteration: 'Ty znayesh bukvy M i A. Skazhi: MA-MA!',
        translation: 'You know the letters M and A. Say: MA-MA!',
        choices: [
          {
            text: 'МАМА',
            transliteration: 'MAMA',
            translation: 'mom',
            nextNodeId: 'mama_correct',
            isCorrect: true,
          },
          {
            text: 'НАША',
            transliteration: 'NASHA',
            translation: 'our',
            nextNodeId: 'mama_wrong',
            isCorrect: false,
          },
        ],
      },
      {
        id: 'mama_correct',
        speaker: 'Маша',
        russian: 'Ура! МАМА! Отлично! Иди к Шуре у ворот.',
        transliteration: 'Ura! MAMA! Otlichno! Idi k Shure u vorot.',
        translation: 'Hooray! MAMA! Excellent! Go to Shura at the gate.',
        onComplete: 'quest_masha_complete',
      },
      {
        id: 'mama_wrong',
        speaker: 'Маша',
        russian: 'Почти! МА-МА! Попробуй!',
        transliteration: 'Pochti! MA-MA! Poprobuy!',
        translation: 'Almost! MA-MA! Try!',
        nextNodeId: 'teach_mama',
      },
    ],
  },

  // --- Masha idle dialogue (before her quest) ---
  masha_idle: {
    id: 'masha_idle',
    npcName: 'Маша',
    nodes: [
      {
        id: 'start',
        speaker: 'Маша',
        russian: 'Привет! Ищи светящиеся руны.',
        transliteration: 'Privet! Ishchi svetyashchiyesya runy.',
        translation: 'Hello! Look for the glowing runes.',
        nextNodeId: 'hint',
      },
      {
        id: 'hint',
        speaker: 'Маша',
        russian: 'Каждая руна - это буква. Собери их!',
        transliteration: 'Kazhdaya runa - eto bukva. Soberi ikh!',
        translation: 'Each rune is a letter. Collect them!',
      },
    ],
  },

  // --- Masha after her quest is done ---
  masha_after: {
    id: 'masha_after',
    npcName: 'Маша',
    nodes: [
      {
        id: 'start',
        speaker: 'Маша',
        russian: 'Ты молодец! Шура ждёт тебя у ворот.',
        transliteration: 'Ty molodets! Shura zhdyot tebya u vorot.',
        translation: "You're doing great! Shura is waiting at the gate.",
      },
    ],
  },

  // --- Shura gate challenge (quest_gate) ---
  shura_gate: {
    id: 'shura_gate',
    npcName: 'Шура',
    nodes: [
      {
        id: 'start',
        speaker: 'Шура',
        russian: 'Стой! Я Шура. Я охраняю ворота.',
        transliteration: 'Stoy! Ya Shura. Ya okhranyayu vorota.',
        translation: 'Stop! I am Shura. I guard the gate.',
        nextNodeId: 'explain',
      },
      {
        id: 'explain',
        speaker: 'Шура',
        russian: 'Чтобы пройти, покажи, что знаешь буквы.',
        transliteration: 'Chtoby proyti, pokazhi, chto znayesh bukvy.',
        translation: 'To pass, show that you know the letters.',
        nextNodeId: 'gate_challenge',
      },
      {
        id: 'gate_challenge',
        speaker: 'Шура',
        russian: 'Скажи слово из Н-А-Ш-А. Скажи: НАША!',
        transliteration: 'Skazhi slovo iz N-A-SH-A. Skazhi: NASHA!',
        translation: 'Spell the word from N-A-SH-A. Say: NASHA (our)!',
        choices: [
          {
            text: 'НАША',
            transliteration: 'NASHA',
            translation: 'our',
            nextNodeId: 'gate_open',
            isCorrect: true,
          },
          {
            text: 'МАМА',
            transliteration: 'MAMA',
            translation: 'mom',
            nextNodeId: 'gate_wrong',
            isCorrect: false,
          },
          {
            text: 'ШУРА',
            transliteration: 'SHURA',
            translation: 'Shura',
            nextNodeId: 'gate_wrong',
            isCorrect: false,
          },
        ],
      },
      {
        id: 'gate_wrong',
        speaker: 'Шура',
        russian: 'Нет! Буквы: Н, А, Ш, А. Скажи: НА-ША!',
        transliteration: 'Nyet! Bukvy: N, A, SH, A. Skazhi: NA-SHA!',
        translation: 'No! Letters: N, A, SH, A. Say: NA-SHA!',
        nextNodeId: 'gate_challenge',
      },
      {
        id: 'gate_open',
        speaker: 'Шура',
        russian: 'НАША! Правильно! Ты готов. Проходи!',
        transliteration: 'NASHA! Pravilno! Ty gotov. Prokhodi!',
        translation: 'NASHA! Correct! You are ready. Go through!',
        onComplete: 'quest_gate_complete',
      },
    ],
  },

  // --- Shura idle dialogue (before gate quest) ---
  shura_idle: {
    id: 'shura_idle',
    npcName: 'Шура',
    nodes: [
      {
        id: 'start',
        speaker: 'Шура',
        russian: 'Ворота закрыты. Учи буквы.',
        transliteration: 'Vorota zakryty. Uchi bukvy.',
        translation: 'The gate is closed. Learn the letters.',
        nextNodeId: 'hint',
      },
      {
        id: 'hint',
        speaker: 'Шура',
        russian: 'Когда будешь готов, приходи снова.',
        transliteration: 'Kogda budesh gotov, prikhodi snova.',
        translation: "When you're ready, come back.",
      },
    ],
  },

  // --- Shura after gate is open ---
  shura_after: {
    id: 'shura_after',
    npcName: 'Шура',
    nodes: [
      {
        id: 'start',
        speaker: 'Шура',
        russian: 'Ворота открыты. Удачи!',
        transliteration: 'Vorota otkryty. Udachi!',
        translation: 'The gate is open. Good luck!',
      },
    ],
  },
};
