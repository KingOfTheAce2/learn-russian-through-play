import Phaser from 'phaser';
import { SceneScript, SceneStage, DialogueLine, Interaction } from '@/data/scenes/types';
import { Character, Emotion } from '@/game/sprites/Character';
import { Hotspot, HotspotConfig } from '@/game/sprites/Hotspot';
import { LetterParticle } from '@/game/sprites/LetterParticle';
import { AudioManager } from '@/systems/audio';
import { GameState } from '@/systems/progress';
import { GAME_WIDTH, GAME_HEIGHT, COLORS, FONT_FAMILY } from '@/game/config';
import { getTheme, Theme } from '@/game/themes';
import { startScene } from '@/systems/sceneLoader';

/**
 * StoryScene - Base class for all interactive storybook scenes
 * Replaces tilemap-based VillageScene with point-and-click adventure
 */
export abstract class StoryScene extends Phaser.Scene {
  protected script!: SceneScript;
  protected currentStageIndex = 0;
  protected characters: Map<string, Character> = new Map();
  protected hotspots: Map<string, Hotspot> = new Map();
  protected letterParticles: LetterParticle[] = [];
  protected background!: Phaser.GameObjects.Image | Phaser.GameObjects.Graphics;
  protected audioManager!: AudioManager;
  protected gameState!: GameState;
  protected narrationText?: Phaser.GameObjects.Text;
  protected continueButton?: Phaser.GameObjects.Container;
  protected theme!: Theme;
  protected interactionComplete = false;

  /**
   * Override this to provide the scene script
   */
  protected abstract getScript(): SceneScript;

  /**
   * Override this to create the illustrated background
   */
  protected abstract createBackground(): void;

  /**
   * Override this to set up characters for this scene
   */
  protected abstract createCharacters(): void;

  /**
   * Override this to create interactive hotspots
   */
  protected abstract createHotspots(): void;

  create(): void {
    this.script = this.getScript();
    this.audioManager = AudioManager.getInstance();
    this.gameState = GameState.getInstance();

    // Get theme based on learning mode
    const mode = this.gameState.getLearningMode();
    this.theme = getTheme(mode);

    // Setup scene with PROPER DEPTH ORDERING
    this.createBackground();    // Depth 0
    this.createCharacters();     // Depth 10 (set in Character constructor)
    this.createHotspots();       // Depth 20
    this.createUI();             // Depth 90-110

    // Ensure characters are above background
    this.characters.forEach(char => char.setDepth(10));

    // Start ambient audio
    this.playAmbientAudio();

    // Begin first stage
    this.advanceStage();
  }

  protected createUI(): void {
    // Layout: Picture area (0-360), Text box (360-580), Button bar (580-650)
    const buttonBarHeight = 70;
    const boxHeight = 220;
    const pictureAreaHeight = 360;
    const boxY = pictureAreaHeight;

    // Separator line between picture and text (themed)
    const separator = this.add.graphics();
    separator.lineStyle(this.theme.layout.separatorThickness, this.theme.colors.primary, 1);
    separator.lineBetween(0, boxY, GAME_WIDTH, boxY);
    separator.setDepth(99);

    // Text box background (themed)
    const boxBg = this.add.graphics();
    boxBg.fillStyle(this.theme.colors.textBox, this.theme.layout.textBoxAlpha);
    boxBg.fillRect(0, boxY, GAME_WIDTH, boxHeight);
    boxBg.setDepth(100);

    // Narration text (themed font)
    this.narrationText = this.add.text(GAME_WIDTH / 2, boxY + 20, '', {
      fontFamily: this.theme.fonts.dialogue,
      fontSize: '17px',
      color: this.theme.colors.text,
      align: 'center',
      wordWrap: { width: GAME_WIDTH - 120 },
      lineSpacing: 8,
    });
    this.narrationText.setOrigin(0.5, 0);
    this.narrationText.setDepth(101);

    // Separate button bar at the very bottom (themed)
    const buttonBarY = GAME_HEIGHT - buttonBarHeight;
    const buttonBarBg = this.add.graphics();
    buttonBarBg.fillStyle(this.theme.colors.buttonBar, 1.0);
    buttonBarBg.fillRect(0, buttonBarY, GAME_WIDTH, buttonBarHeight);
    buttonBarBg.setDepth(100);

    // Continue button (in the button bar)
    this.createContinueButton();
  }

  protected createContinueButton(): void {
    // Position in the center of the button bar (last 70px of screen)
    const buttonBarHeight = 70;
    const button = this.add.container(GAME_WIDTH / 2, GAME_HEIGHT - buttonBarHeight / 2);
    button.setDepth(110);

    // Themed button — 220×56 for comfortable touch target on tablet/mobile
    const bg = this.add.rectangle(0, 0, 220, 56, this.theme.colors.primary);
    bg.setInteractive({ useHandCursor: true });
    bg.setStrokeStyle(3, 0xffffff);

    // Themed text
    const text = this.add.text(0, 0, 'CONTINUE >', {
      fontFamily: this.theme.fonts.ui,
      fontSize: '18px',
      color: this.theme.colors.text,
      fontStyle: 'bold',
    });
    text.setOrigin(0.5);

    button.add([bg, text]);

    // Store references for lock/unlock
    button.setData('bg', bg);
    button.setData('text', text);

    bg.on('pointerover', () => {
      if (button.getData('locked')) return;
      bg.setFillStyle(this.theme.colors.secondary);
      bg.setScale(1.05);
    });

    bg.on('pointerout', () => {
      if (button.getData('locked')) return;
      bg.setFillStyle(this.theme.colors.primary);
      bg.setScale(1.0);
    });

    bg.on('pointerdown', () => {
      if (button.getData('locked')) {
        // Show feedback that button is locked
        this.tweens.add({
          targets: button,
          x: GAME_WIDTH / 2 - 5,
          duration: 50,
          yoyo: true,
          repeat: 2,
        });
        return;
      }
      this.advanceStage();
      this.audioManager.sfxClick();
    });

    this.continueButton = button;
    this.continueButton.setVisible(false);
  }

  protected lockContinueButton(): void {
    if (!this.continueButton) return;
    this.continueButton.setData('locked', true);
    const bg = this.continueButton.getData('bg') as Phaser.GameObjects.Rectangle;
    const text = this.continueButton.getData('text') as Phaser.GameObjects.Text;
    if (bg) bg.setFillStyle(0x666666);
    if (text) text.setText('Complete task...');
  }

  protected unlockContinueButton(): void {
    if (!this.continueButton) return;
    this.continueButton.setData('locked', false);
    const bg = this.continueButton.getData('bg') as Phaser.GameObjects.Rectangle;
    const text = this.continueButton.getData('text') as Phaser.GameObjects.Text;
    if (bg) bg.setFillStyle(this.theme.colors.primary);
    if (text) text.setText('CONTINUE >');
    this.continueButton.setVisible(true);

    // Pulse effect to draw attention
    this.tweens.add({
      targets: this.continueButton,
      scale: 1.1,
      duration: 300,
      yoyo: true,
      ease: 'Sine.easeInOut',
    });
  }

  protected advanceStage(): void {
    if (this.currentStageIndex >= this.script.stages.length) {
      this.completeScene();
      return;
    }

    const stage = this.script.stages[this.currentStageIndex];
    this.playStage(stage);
    this.currentStageIndex++;
  }

  protected playStage(stage: SceneStage): void {
    // Clear previous content
    this.clearSpeechBubbles();
    this.continueButton?.setVisible(false);
    this.interactionComplete = false;

    // Narration - ALWAYS show all three languages
    if (stage.narration) {
      const narratText = `${stage.narration.russian}\n\n(${stage.narration.transliteration})\n\n"${stage.narration.translation}"`;
      this.showNarration(narratText);
    }

    // Dialogue
    if (stage.dialogue) {
      this.playDialogue(stage.dialogue);
    }

    // Interaction - LOCK Continue button until complete
    if (stage.interaction) {
      this.lockContinueButton();
      this.continueButton?.setVisible(true);
      this.time.delayedCall(500, () => {
        this.handleInteraction(stage.interaction!);
      });
    } else if (!stage.dialogue) {
      // No interaction - show unlocked continue
      this.unlockContinueButton();
    }
  }

  protected handleInteraction(interaction: Interaction): void {
    const feedbackText = this.add.text(GAME_WIDTH / 2, 150, interaction.feedback, {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#ffff00',
      align: 'center',
      stroke: '#000000',
      strokeThickness: 4,
    });
    feedbackText.setOrigin(0.5);
    feedbackText.setDepth(150);
    feedbackText.setAlpha(0);

    this.tweens.add({
      targets: feedbackText,
      alpha: 1,
      duration: 300,
    });

    switch (interaction.type) {
      case 'click':
        this.createClickInteraction(interaction.target, feedbackText);
        break;
      case 'collect':
        this.createCollectInteraction(interaction.target, feedbackText);
        break;
      case 'sequence':
        this.createSequenceInteraction(interaction, feedbackText);
        break;
      case 'drag':
        this.createDragInteraction(interaction.target, feedbackText);
        break;
    }
  }

  protected createClickInteraction(targetId: string, feedbackText: Phaser.GameObjects.Text): void {
    // Create clickable hotspot
    const hotspot = this.hotspots.get(targetId);
    if (!hotspot) {
      // Create a simple clickable area in center if no hotspot defined
      const clickZone = this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 100, 200, 200, 0xffff00, 0.3);
      clickZone.setInteractive({ useHandCursor: true });
      clickZone.setDepth(50);

      // Pulse animation
      this.tweens.add({
        targets: clickZone,
        alpha: 0.1,
        duration: 800,
        yoyo: true,
        repeat: -1,
      });

      clickZone.once('pointerdown', () => {
        this.audioManager.sfxClick();
        clickZone.destroy();
        feedbackText.destroy();
        this.interactionComplete = true;
        this.time.delayedCall(500, () => {
          this.unlockContinueButton();
        });
      });
    }
  }

  protected createCollectInteraction(targetId: string, feedbackText: Phaser.GameObjects.Text): void {
    // Create multiple collectible letter particles
    const letterCount = 3; // Reduced from 5 - less tedious
    let collected = 0;

    for (let i = 0; i < letterCount; i++) {
      const x = 150 + i * 120;
      const y = 200 + Math.random() * 100;

      const letter = this.add.text(x, y, this.script.letter, {
        fontFamily: FONT_FAMILY,
        fontSize: '32px',
        color: '#ffd700',
      });
      letter.setOrigin(0.5);
      letter.setInteractive({ useHandCursor: true });
      letter.setDepth(50);

      // Float animation
      this.tweens.add({
        targets: letter,
        y: y - 20,
        duration: 1000 + Math.random() * 500,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
      });

      letter.on('pointerdown', () => {
        this.audioManager.sfxReveal();
        collected++;

        this.tweens.add({
          targets: letter,
          scale: 0,
          alpha: 0,
          duration: 300,
          onComplete: () => letter.destroy(),
        });

        if (collected >= letterCount) {
          feedbackText.setText(`Found all ${letterCount} letters!`);
          this.interactionComplete = true;
          this.time.delayedCall(1000, () => {
            feedbackText.destroy();
            this.unlockContinueButton();
          });
        }
      });
    }
  }

  protected createSequenceInteraction(interaction: Interaction, feedbackText: Phaser.GameObjects.Text): void {
    if (!interaction.items || interaction.items.length === 0) {
      // No items defined — the scene's custom playStage code handles the visuals.
      // Just unlock Continue so the player can proceed past the locked button.
      feedbackText.destroy();
      this.unlockContinueButton();
      return;
    }

    const items = interaction.items;
    let currentIndex = 0;
    const buttons: Phaser.GameObjects.Container[] = [];

    items.forEach((item, index) => {
      const spacing = Math.min(130, (GAME_WIDTH - 80) / items.length);
      const totalWidth = spacing * (items.length - 1);
      const x = GAME_WIDTH / 2 - totalWidth / 2 + index * spacing;
      const y = GAME_HEIGHT / 2 - 70;

      const container = this.add.container(x, y);
      const circle = this.add.circle(0, 0, 50, 0x4a90e2);
      const label = this.add.text(0, 0, item, {
        fontFamily: FONT_FAMILY,
        fontSize: item.length > 3 ? '16px' : '28px',
        color: '#ffffff',
      });
      label.setOrigin(0.5);

      container.add([circle, label]);
      container.setDepth(50);
      container.setSize(100, 100);
      container.setInteractive({ useHandCursor: true });
      buttons.push(container);

      container.on('pointerdown', () => {
        if (index === currentIndex) {
          this.audioManager.sfxClick();
          circle.setFillStyle(0x2ecc71);
          currentIndex++;

          if (currentIndex >= items.length) {
            feedbackText.setText('✓');
            this.interactionComplete = true;
            this.time.delayedCall(800, () => {
              buttons.forEach(b => b.destroy());
              feedbackText.destroy();
              this.unlockContinueButton();
            });
          }
        } else {
          // Wrong order — shake
          this.tweens.add({
            targets: container,
            x: x - 8,
            duration: 50,
            yoyo: true,
            repeat: 3,
          });
        }
      });
    });
  }

  protected createDragInteraction(targetId: string, feedbackText: Phaser.GameObjects.Text): void {
    // Simple drag interaction for now
    const draggable = this.add.rectangle(300, 200, 100, 100, 0xff6b9d);
    const target = this.add.rectangle(500, 200, 120, 120, 0x4a90e2, 0.3);

    draggable.setInteractive({ draggable: true, useHandCursor: true });
    draggable.setDepth(50);
    target.setDepth(49);

    this.input.on('drag', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject, dragX: number, dragY: number) => {
      if (gameObject === draggable) {
        draggable.x = dragX;
        draggable.y = dragY;
      }
    });

    this.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {
      if (gameObject === draggable) {
        const distance = Phaser.Math.Distance.Between(draggable.x, draggable.y, target.x, target.y);
        if (distance < 80) {
          // Success!
          this.audioManager.sfxReveal();
          draggable.destroy();
          target.destroy();
          feedbackText.setText('Matched!');
          this.interactionComplete = true;
          this.time.delayedCall(1000, () => {
            feedbackText.destroy();
            this.unlockContinueButton();
          });
        }
      }
    });
  }

  protected showNarration(text: string): void {
    if (this.narrationText) {
      this.narrationText.setText(text);
      this.narrationText.setAlpha(0);
      this.tweens.add({
        targets: this.narrationText,
        alpha: 1,
        duration: 400,
      });
    }
  }

  protected playDialogue(dialogue: DialogueLine[]): void {
    let delay = 0;

    dialogue.forEach((line, index) => {
      this.time.delayedCall(delay, () => {
        this.showDialogueLine(line);

        // Show continue button on last line
        if (index === dialogue.length - 1) {
          this.time.delayedCall(2000, () => {
            this.continueButton?.setVisible(true);
          });
        }
      });

      delay += 2500; // 2.5 seconds per line
    });
  }

  protected showDialogueLine(line: DialogueLine): void {
    const character = this.characters.get(line.speaker);
    if (!character) return;

    // Set emotion
    character.setEmotion(line.emotion);

    // Show speech bubble (Russian only)
    character.speak(line.russian, 2500);

    // Play voice sound
    if (line.sound) {
      this.playCharacterVoice(character, line.sound);
    }

    // ALWAYS show all three: Russian, transliteration, AND English translation
    const displayText = `${line.russian}\n\n(${line.transliteration})\n\n"${line.translation}"`;
    this.showNarration(displayText);
  }

  protected playCharacterVoice(character: Character, sound: string): void {
    // Use Web Audio oscillator with character-specific pitch
    const pitch = character.getVoicePitchValue();
    const baseFreq = 440; // A4
    const frequency = baseFreq * pitch;

    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }
  }

  protected clearSpeechBubbles(): void {
    this.characters.forEach((char) => char.hideSpeech());
  }

  protected playAmbientAudio(): void {
    // Override in child scenes for specific ambient sounds
    // Default: gentle forest ambience
  }

  protected completeScene(): void {
    // Celebrate letter discovery
    this.showLetterDiscovery();
  }

  protected showLetterDiscovery(): void {
    const discovery = this.script.letterDiscovery;

    // Fade out current content
    this.tweens.add({
      targets: [this.background, ...Array.from(this.characters.values())],
      alpha: 0.3,
      duration: 500,
    });

    // Show letter celebration
    const centerX = GAME_WIDTH / 2;
    const centerY = GAME_HEIGHT / 2 - 50;

    // Big letter
    const bigLetter = this.add.text(centerX, centerY, discovery.letter, {
      fontFamily: FONT_FAMILY,
      fontSize: '120px',
      color: '#ffd700',
    });
    bigLetter.setOrigin(0.5);
    bigLetter.setShadow(4, 4, '#000000', 10);
    bigLetter.setAlpha(0);
    bigLetter.setScale(0);
    bigLetter.setDepth(200);

    this.tweens.add({
      targets: bigLetter,
      alpha: 1,
      scale: 1,
      duration: 800,
      ease: 'Back.easeOut',
    });

    // Description
    this.time.delayedCall(1000, () => {
      const desc = this.add.text(centerX, centerY + 100, discovery.russian, {
        fontFamily: FONT_FAMILY,
        fontSize: '14px',
        color: '#ffffff',
        align: 'center',
        wordWrap: { width: GAME_WIDTH - 100 },
      });
      desc.setOrigin(0.5);
      desc.setDepth(200);

      // Play celebration sound
      this.audioManager.sfxReveal();

      // Record progress
      this.gameState.learnLetter(discovery.letter);

      // Auto-advance to next scene
      this.time.delayedCall(3000, () => {
        this.transitionToNextScene();
      });
    });
  }

  protected transitionToNextScene(): void {
    // Override in child scenes to specify next scene
    // Default: return to main menu
    this.cameras.main.fadeOut(500, 0, 0, 0);
    this.time.delayedCall(500, () => {
      startScene(this, 'MainMenuScene');
    });
  }

  protected addCharacter(name: string, character: Character): void {
    this.characters.set(name, character);
  }

  protected addHotspot(id: string, config: HotspotConfig): Hotspot {
    const hotspot = new Hotspot(this, config);
    this.hotspots.set(id, hotspot);
    return hotspot;
  }

  protected createPlaceholderBackground(color: number): void {
    this.background = this.add.graphics();
    (this.background as Phaser.GameObjects.Graphics).fillStyle(color);
    (this.background as Phaser.GameObjects.Graphics).fillRect(
      0,
      0,
      GAME_WIDTH,
      GAME_HEIGHT
    );
  }
}
