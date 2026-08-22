import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_1_MOON } from '@/data/scenes/kids/act2_story_script';
import { Character } from '@/game/sprites/Character';
import { LetterParticle } from '@/game/sprites/LetterParticle';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

export class Act2Scene1 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama!: Character;
  private moon!: Phaser.GameObjects.Graphics;

  constructor() {
    super(SCENES.ACT2_SCENE1);
  }

  protected getScript(): SceneScript {
    return SCENE_1_MOON;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0x000428, 0x000428, 0x004e92, 0x004e92, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const stars = this.add.graphics();
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * GAME_WIDTH;
      const y = Math.random() * 216; // 360 * 0.6
      stars.fillStyle(0xffffff, Math.random() * 0.5 + 0.5);
      stars.fillCircle(x, y, 1);
    }

    this.moon = this.add.graphics();
    this.moon.fillStyle(0xffd700, 1);
    this.moon.fillCircle(GAME_WIDTH - 150, 100, 50);
    this.moon.setInteractive(
      new Phaser.Geom.Circle(GAME_WIDTH - 150, 100, 50),
      Phaser.Geom.Circle.Contains
    );

    const windowFrame = this.add.graphics();
    windowFrame.lineStyle(8, 0x8B4513);
    windowFrame.strokeRect(50, 50, GAME_WIDTH - 100, 260);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH / 2 - 120,
      y: 240,
      scale: 1.5,
      emotion: 'curious',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH / 2 + 120,
      y: 240,
      scale: 1.5,
      emotion: 'curious',
    });

    this.mama = new Character(this, {
      name: 'mama',
      x: GAME_WIDTH / 2,
      y: 280,
      scale: 1.3,
      emotion: 'happy',
    });

    this.addCharacter('masha', this.masha);
    this.addCharacter('shura', this.shura);
    this.addCharacter('mama', this.mama);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/kids/act2_story_script').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'masha_excited':
        this.enableMoonClick();
        break;
      case 'collect_л':
        this.spawnLetterParticles();
        break;
    }
  }

  private enableMoonClick(): void {
    this.moon.on('pointerdown', () => {
      this.playLSound();
      this.masha.setEmotion('excited');
      this.time.delayedCall(1500, () => this.advanceStage());
    });
  }

  private playLSound(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 350;
      gain.gain.value = 0.1;

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    }
  }

  private spawnLetterParticles(): void {
    const moonX = GAME_WIDTH - 150;
    const moonY = 100;

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const distance = 80;
      const x = moonX + Math.cos(angle) * distance;
      const y = moonY + Math.sin(angle) * distance;

      const particle = new LetterParticle(this, {
        x,
        y,
        letter: 'Л',
        color: 0xffd700,
        size: 40,
      });

      this.letterParticles.push(particle);

      particle.on('collected', () => {
        this.letterParticles = this.letterParticles.filter((p) => p !== particle);
        if (this.letterParticles.length === 0) {
          this.time.delayedCall(1000, () => this.advanceStage());
        }
      });
    }

    this.audioManager.sfxReveal();
  }

  protected playAmbientAudio(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const ambient = ctx.createOscillator();
      const gain = ctx.createGain();
      ambient.type = 'sine';
      ambient.frequency.value = 220;
      gain.gain.value = 0.01;
      ambient.connect(gain);
      gain.connect(ctx.destination);
      ambient.start();

      this.events.on('shutdown', () => {
        ambient.stop();
      });
    }
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      startScene(this, SCENES.ACT2_SCENE2);
    });
  }
}
