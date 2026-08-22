import Phaser from 'phaser';
import { FONT_FAMILY, GAME_WIDTH, GAME_HEIGHT, COLORS } from '@/game/config';
import { ALL_LETTERS } from '@/data/letters';
import { GameState } from '@/systems/progress';
import { AudioManager } from '@/systems/audio';

export class JournalUI extends Phaser.GameObjects.Container {
  private slots: Phaser.GameObjects.Container[] = [];

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0);
    this.setScrollFactor(0);
    this.setDepth(200);

    // Dark backdrop
    const backdrop = scene.add.rectangle(
      GAME_WIDTH / 2, GAME_HEIGHT / 2,
      GAME_WIDTH, GAME_HEIGHT,
      0x000000, 0.85
    );
    this.add(backdrop);

    // Title
    const title = scene.add.text(GAME_WIDTH / 2, 30, 'JOURNAL', {
      fontFamily: FONT_FAMILY,
      fontSize: '14px',
      color: '#ffd700',
    });
    title.setOrigin(0.5, 0.5);
    this.add(title);

    // Close instruction
    const closeText = scene.add.text(GAME_WIDTH / 2, GAME_HEIGHT - 25, 'Press J or ESC to close', {
      fontFamily: FONT_FAMILY,
      fontSize: '7px',
      color: '#888888',
    });
    closeText.setOrigin(0.5, 0.5);
    this.add(closeText);

    // Letter grid: 6 rows, 6 columns
    const slotSize = 48;
    const gap = 8;
    const cols = 6;
    const startX = (GAME_WIDTH - cols * (slotSize + gap)) / 2 + slotSize / 2;
    const startY = 70;
    const state = GameState.getInstance();

    ALL_LETTERS.forEach((letter, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const x = startX + col * (slotSize + gap);
      const y = startY + row * (slotSize + gap);

      const slot = this.createSlot(scene, x, y, slotSize, letter.character, state.hasLetter(letter.character));
      this.slots.push(slot);
      this.add(slot);
    });

    scene.add.existing(this);
  }

  private createSlot(
    scene: Phaser.Scene,
    x: number,
    y: number,
    size: number,
    letter: string,
    learned: boolean
  ): Phaser.GameObjects.Container {
    const container = scene.add.container(x, y);

    const bg = scene.add.rectangle(0, 0, size, size, learned ? 0x2a2a4e : 0x1a1a1a);
    bg.setStrokeStyle(2, learned ? COLORS.GOLD : 0x333333);
    container.add(bg);

    const text = scene.add.text(0, -4, letter, {
      fontFamily: FONT_FAMILY,
      fontSize: '16px',
      color: learned ? '#ffd700' : '#444444',
    });
    text.setOrigin(0.5, 0.5);
    container.add(text);

    if (learned) {
      const letterData = ALL_LETTERS.find(l => l.character === letter);
      if (letterData) {
        const translit = scene.add.text(0, 14, letterData.transliteration, {
          fontFamily: FONT_FAMILY,
          fontSize: '6px',
          color: '#aaaaaa',
        });
        translit.setOrigin(0.5, 0.5);
        container.add(translit);
      }

      bg.setInteractive({ useHandCursor: true });
      bg.on('pointerdown', () => {
        AudioManager.getInstance().speakLetter(letter);
      });

      // Glow effect
      scene.tweens.add({
        targets: bg,
        alpha: 0.8,
        duration: 1000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
      });
    }

    return container;
  }
}
