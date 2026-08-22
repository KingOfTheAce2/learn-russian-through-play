import Phaser from 'phaser';
import { FONT_FAMILY, GAME_WIDTH, TOTAL_LETTERS, COLORS, SCENES } from '@/game/config';
import { GameState } from '@/systems/progress';

export class HUD extends Phaser.GameObjects.Container {
  private progressSquares: Phaser.GameObjects.Rectangle[] = [];
  private objectiveText: Phaser.GameObjects.Text;
  private letterCountText: Phaser.GameObjects.Text;
  private journalBtn: Phaser.GameObjects.Container;
  private translitBtn: Phaser.GameObjects.Container;

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0);
    this.setScrollFactor(0);
    this.setDepth(100);

    // Background bar
    const bg = scene.add.rectangle(GAME_WIDTH / 2, 14, GAME_WIDTH - 16, 20, 0x000000, 0.6);
    this.add(bg);

    // Progress squares
    const startX = 8;
    const squareSize = 6;
    const gap = 1;
    for (let i = 0; i < TOTAL_LETTERS; i++) {
      const sq = scene.add.rectangle(
        startX + i * (squareSize + gap),
        8,
        squareSize,
        squareSize,
        COLORS.GRAY
      );
      sq.setOrigin(0, 0);
      this.progressSquares.push(sq);
      this.add(sq);
    }

    // Letter count
    this.letterCountText = scene.add.text(startX + TOTAL_LETTERS * (squareSize + gap) + 4, 8, '0/33', {
      fontFamily: FONT_FAMILY,
      fontSize: '7px',
      color: '#ffd700',
    });
    this.letterCountText.setOrigin(0, 0);
    this.add(this.letterCountText);

    // Objective text
    this.objectiveText = scene.add.text(GAME_WIDTH / 2, 26, '', {
      fontFamily: FONT_FAMILY,
      fontSize: '7px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 2,
    });
    this.objectiveText.setOrigin(0.5, 0);
    this.add(this.objectiveText);

    // Journal button (top right)
    this.journalBtn = this.createButton(scene, GAME_WIDTH - 50, 8, 'J', () => {
      scene.scene.launch(SCENES.JOURNAL);
      scene.scene.pause();
    });
    this.add(this.journalBtn);

    // Translit toggle button
    this.translitBtn = this.createButton(scene, GAME_WIDTH - 20, 8, 'T', () => {
      GameState.getInstance().toggleTranslit();
      this.updateTranslitButton();
      scene.events.emit('translit-toggled');
    });
    this.add(this.translitBtn);

    scene.add.existing(this);
  }

  private createButton(
    scene: Phaser.Scene,
    x: number,
    y: number,
    label: string,
    onClick: () => void
  ): Phaser.GameObjects.Container {
    const container = scene.add.container(x, y);
    const bg = scene.add.rectangle(0, 0, 16, 12, COLORS.UI_DARK, 0.8);
    bg.setStrokeStyle(1, COLORS.GOLD);
    bg.setInteractive({ useHandCursor: true });
    bg.on('pointerdown', onClick);
    container.add(bg);

    const text = scene.add.text(0, 0, label, {
      fontFamily: FONT_FAMILY,
      fontSize: '7px',
      color: '#ffd700',
    });
    text.setOrigin(0.5, 0.5);
    container.add(text);

    return container;
  }

  private updateTranslitButton(): void {
    const enabled = GameState.getInstance().data.translitEnabled;
    const bg = this.translitBtn.getAt(0) as Phaser.GameObjects.Rectangle;
    bg.setStrokeStyle(1, enabled ? COLORS.GOLD : COLORS.GRAY);
  }

  updateProgress(): void {
    const state = GameState.getInstance();
    const learned = state.data.learnedLetters;

    for (let i = 0; i < this.progressSquares.length; i++) {
      if (i < learned.length) {
        this.progressSquares[i].setFillStyle(COLORS.GOLD);
      }
    }

    this.letterCountText.setText(`${learned.length}/${TOTAL_LETTERS}`);
  }

  setObjective(text: string): void {
    this.objectiveText.setText(text);
  }
}
