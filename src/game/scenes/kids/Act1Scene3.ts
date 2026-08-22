import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_3_REUNION } from '@/data/scenes/kids/act1_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

/**
 * Act 1, Scene 3: "Masha Finds Shura"
 * Letter: Ðœ
 *
 * Story: Shura hears Masha and runs to her. Joyful reunion!
 * They form the word ÐœÐ-ÐœÐ together.
 */
export class Act1Scene3 extends StoryScene {
  private masha!: Character;
  private shura!: Character;

  constructor() {
    super(SCENES.ACT1_SCENE3);
  }

  protected getScript(): SceneScript {
    return SCENE_3_REUNION;
  }

  protected createBackground(): void {
    // Sunny clearing
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;

    bg.fillGradientStyle(0x87CEEB, 0x87CEEB, 0x90EE90, 0x90EE90, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    // Sun rays
    const rays = this.add.graphics();
    rays.lineStyle(3, 0xffd700, 0.3);
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const x1 = GAME_WIDTH / 2;
      const y1 = 50;
      const x2 = x1 + Math.cos(angle) * 200;
      const y2 = y1 + Math.sin(angle) * 200;
      rays.lineBetween(x1, y1, x2, y2);
    }

    this.background = bg;
  }

  protected createCharacters(): void {
    // Masha on left
    this.masha = new Character(this, {
      name: 'masha',
      x: 200,
      y: 280,
      scale: 1.5,
      emotion: 'relieved',
    });

    this.addCharacter('masha', this.masha);

    // Shura enters from right
    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH + 100,
      y: 280,
      scale: 1.5,
      emotion: 'worried',
    });

    this.addCharacter('shura', this.shura);

    // Shura runs in
    this.tweens.add({
      targets: this.shura,
      x: GAME_WIDTH - 200,
      duration: 1500,
      ease: 'Quad.easeOut',
      onComplete: () => {
        this.shura.setEmotion('relieved');
        this.masha.setEmotion('happy');
      },
    });
  }

  protected createHotspots(): void {
    // No hotspots - dialogue driven
  }

  protected playStage(stage: import('@/data/scenes/types').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'mama_word':
        this.createMamaActivity();
        break;

      case 'say_together':
        this.playSayTogether();
        break;
    }
  }

  private createMamaActivity(): void {
    // Show scrambled letters
    const centerX = GAME_WIDTH / 2;
    const centerY = GAME_HEIGHT / 2 - 50;

    const letters = ['Ð', 'Ðœ', 'Ð', 'Ðœ'];
    const positions = [
      { x: centerX - 120, y: centerY },
      { x: centerX - 40, y: centerY },
      { x: centerX + 40, y: centerY },
      { x: centerX + 120, y: centerY },
    ];

    letters.forEach((letter, i) => {
      const text = this.add.text(positions[i].x, positions[i].y, letter, {
        fontFamily: '"Press Start 2P"',
        fontSize: '40px',
        color: '#ff6b9d',
      });
      text.setOrigin(0.5);
      text.setAlpha(0);

      this.tweens.add({
        targets: text,
        alpha: 1,
        delay: i * 200,
        duration: 400,
      });
    });

    // After 2s, arrange into ÐœÐ-ÐœÐ
    this.time.delayedCall(2000, () => {
      this.formMamaWord(centerX, centerY);
    });
  }

  private formMamaWord(centerX: number, centerY: number): void {
    // Clear and show ÐœÐ-ÐœÐ properly arranged
    const mama = this.add.text(centerX, centerY, 'ÐœÐ-ÐœÐ', {
      fontFamily: '"Press Start 2P"',
      fontSize: '56px',
      color: '#ffd700',
    });
    mama.setOrigin(0.5);
    mama.setScale(0);

    this.tweens.add({
      targets: mama,
      scale: 1,
      duration: 800,
      ease: 'Elastic.easeOut',
    });

    this.audioManager.sfxReveal();

    // Auto-advance
    this.time.delayedCall(2500, () => {
      this.advanceStage();
    });
  }

  private playSayTogether(): void {
    // Both characters say ÐœÐÐœÐ
    this.time.delayedCall(500, () => {
      this.masha.setEmotion('happy');
      this.masha.speak('ÐœÐ-ÐœÐ!', 2000);
    });

    this.time.delayedCall(800, () => {
      this.shura.setEmotion('happy');
      this.shura.speak('ÐœÐ-ÐœÐ!', 2000);
    });

    // Auto-advance
    this.time.delayedCall(3000, () => {
      this.advanceStage();
    });
  }

  protected playAmbientAudio(): void {
    // Happy, bright ambient
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];

      const melody1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      melody1.type = 'sine';
      melody1.frequency.value = 523.25; // C5
      gain1.gain.value = 0.015;
      melody1.connect(gain1);
      gain1.connect(ctx.destination);
      melody1.start();

      this.events.on('shutdown', () => {
        melody1.stop();
      });
    }
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500, 0, 0, 0);
    this.time.delayedCall(500, () => {
      startScene(this, SCENES.ACT1_SCENE4);
    });
  }
}
