import Phaser from 'phaser';
import { FONT_FAMILY, GAME_WIDTH, GAME_HEIGHT, COLORS } from '@/game/config';
import { DialogueNode, DialogueChoice } from '@/types';
import { GameState } from '@/systems/progress';
import { AudioManager } from '@/systems/audio';

export class DialogueBox extends Phaser.GameObjects.Container {
  private bg: Phaser.GameObjects.Rectangle;
  private speakerText: Phaser.GameObjects.Text;
  private russianText: Phaser.GameObjects.Text;
  private translitText: Phaser.GameObjects.Text;
  private translationText: Phaser.GameObjects.Text;
  private choiceButtons: Phaser.GameObjects.Container[] = [];
  private continueText: Phaser.GameObjects.Text;
  private typewriterTimer: Phaser.Time.TimerEvent | null = null;
  public onChoiceSelected: ((choice: DialogueChoice) => void) | null = null;
  public onContinue: (() => void) | null = null;

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0);
    this.setScrollFactor(0);
    this.setDepth(150);

    const panelH = 150;
    const panelY = GAME_HEIGHT - panelH;

    // Dark panel
    this.bg = scene.add.rectangle(
      GAME_WIDTH / 2, panelY + panelH / 2,
      GAME_WIDTH - 16, panelH,
      0x1a1a2e, 0.92
    );
    this.bg.setStrokeStyle(2, COLORS.GOLD);
    this.add(this.bg);

    // Speaker name
    this.speakerText = scene.add.text(20, panelY + 10, '', {
      fontFamily: FONT_FAMILY,
      fontSize: '9px',
      color: '#ffd700',
    });
    this.add(this.speakerText);

    // Russian text
    this.russianText = scene.add.text(20, panelY + 28, '', {
      fontFamily: FONT_FAMILY,
      fontSize: '12px',
      color: '#ffffff',
      wordWrap: { width: GAME_WIDTH - 60 },
    });
    this.add(this.russianText);

    // Transliteration
    this.translitText = scene.add.text(20, panelY + 50, '', {
      fontFamily: FONT_FAMILY,
      fontSize: '8px',
      color: '#aaaaaa',
      wordWrap: { width: GAME_WIDTH - 60 },
    });
    this.add(this.translitText);

    // Translation
    this.translationText = scene.add.text(20, panelY + 66, '', {
      fontFamily: FONT_FAMILY,
      fontSize: '8px',
      color: '#88aacc',
      wordWrap: { width: GAME_WIDTH - 60 },
    });
    this.add(this.translationText);

    // Continue prompt
    this.continueText = scene.add.text(
      GAME_WIDTH / 2, panelY + panelH - 15,
      'Press SPACE to continue',
      {
        fontFamily: FONT_FAMILY,
        fontSize: '6px',
        color: '#666666',
      }
    );
    this.continueText.setOrigin(0.5, 0.5);
    this.continueText.setVisible(false);
    this.add(this.continueText);

    this.setVisible(false);
    scene.add.existing(this);
  }

  showNode(node: DialogueNode): void {
    this.setVisible(true);
    this.clearChoices();

    this.speakerText.setText(node.speaker);

    // Typewriter effect for Russian text
    this.russianText.setText('');
    this.translitText.setText('');
    this.translationText.setText('');
    this.continueText.setVisible(false);

    const state = GameState.getInstance();

    // Speak the Russian text
    AudioManager.getInstance().speakSentence(node.russian);

    let charIndex = 0;
    const fullText = node.russian;

    if (this.typewriterTimer) {
      this.typewriterTimer.destroy();
    }

    this.typewriterTimer = this.scene.time.addEvent({
      delay: 50, // 20 chars/sec
      repeat: fullText.length - 1,
      callback: () => {
        charIndex++;
        this.russianText.setText(fullText.substring(0, charIndex));
        if (charIndex >= fullText.length) {
          this.onTypewriterComplete(node, state.data.translitEnabled);
        }
      },
    });
  }

  private onTypewriterComplete(node: DialogueNode, showTranslit: boolean): void {
    if (showTranslit) {
      this.translitText.setText(node.transliteration);
    }
    this.translationText.setText(node.translation);

    if (node.choices && node.choices.length > 0) {
      this.showChoices(node.choices);
    } else {
      this.continueText.setVisible(true);
    }
  }

  private showChoices(choices: DialogueChoice[]): void {
    const panelY = GAME_HEIGHT - 150;
    const startY = panelY + 90;

    choices.forEach((choice, i) => {
      const x = 40 + i * 200;
      const btn = this.createChoiceButton(choice, x, startY);
      this.choiceButtons.push(btn);
      this.add(btn);
    });
  }

  private createChoiceButton(
    choice: DialogueChoice,
    x: number,
    y: number
  ): Phaser.GameObjects.Container {
    const container = this.scene.add.container(x, y);

    const bg = this.scene.add.rectangle(0, 0, 160, 30, 0x2a2a4e, 0.9);
    bg.setStrokeStyle(1, COLORS.GOLD);
    bg.setInteractive({ useHandCursor: true });
    bg.setOrigin(0, 0.5);
    container.add(bg);

    const state = GameState.getInstance();
    let label = choice.text;
    if (state.data.translitEnabled) {
      label += ` (${choice.transliteration})`;
    }

    const text = this.scene.add.text(8, 0, label, {
      fontFamily: FONT_FAMILY,
      fontSize: '8px',
      color: '#ffffff',
    });
    text.setOrigin(0, 0.5);
    container.add(text);

    bg.on('pointerover', () => bg.setStrokeStyle(2, 0xffffff));
    bg.on('pointerout', () => bg.setStrokeStyle(1, COLORS.GOLD));
    bg.on('pointerdown', () => {
      this.onChoiceSelected?.(choice);
    });

    return container;
  }

  private clearChoices(): void {
    this.choiceButtons.forEach(btn => btn.destroy());
    this.choiceButtons = [];
  }

  hide(): void {
    if (this.typewriterTimer) {
      this.typewriterTimer.destroy();
      this.typewriterTimer = null;
    }
    this.clearChoices();
    this.setVisible(false);
  }
}
