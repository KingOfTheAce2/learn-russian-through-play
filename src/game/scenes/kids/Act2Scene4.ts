import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_4_SASHA } from '@/data/scenes/kids/act2_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

export class Act2Scene4 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama!: Character;
  private sasha?: Character;

  constructor() {
    super(SCENES.ACT2_SCENE4);
  }

  protected getScript(): SceneScript {
    return SCENE_4_SASHA;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0xFFE4B5, 0xFFE4B5, 0xDEB887, 0xDEB887, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const door = this.add.graphics();
    door.fillStyle(0x654321);
    door.fillRect(GAME_WIDTH - 120, 160, 80, 150);
    door.fillStyle(0xffd700);
    door.fillCircle(GAME_WIDTH - 50, 235, 4);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.masha = new Character(this, {
      name: 'masha',
      x: 200,
      y: 240,
      scale: 1.5,
      emotion: 'curious',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: 350,
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
      case 'knock_knock':
        this.playKnock();
        break;
      case 'sasha_arrives':
        this.introduceSasha();
        break;
      case 'drying_herbs':
        this.showHerbs();
        break;
    }
  }

  private playKnock(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          const knock = ctx.createOscillator();
          const gain = ctx.createGain();
          knock.type = 'square';
          knock.frequency.value = 100;
          gain.gain.value = 0.1;
          knock.connect(gain);
          gain.connect(ctx.destination);
          knock.start();
          knock.stop(ctx.currentTime + 0.05);
        }, i * 200);
      }
    }

    this.masha.setEmotion('excited');
    this.shura.setEmotion('excited');
    this.time.delayedCall(1000, () => this.advanceStage());
  }

  private introduceSasha(): void {
    this.sasha = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH + 100,
      y: 240,
      scale: 1.5,
      emotion: 'happy',
    });

    this.addCharacter('sasha', this.sasha);

    this.tweens.add({
      targets: this.sasha,
      x: GAME_WIDTH - 200,
      duration: 1500,
      ease: 'Quad.easeOut',
      onComplete: () => {
        this.sasha?.speak('Привет!', 1500);
        this.playSSound();
        this.time.delayedCall(2000, () => this.advanceStage());
      },
    });
  }

  private playSSound(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.value = 6000;
      gain.gain.value = 0.05;

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    }
  }

  private showHerbs(): void {
    const herbs = ['🌿', '🌾', '🍃'];
    const y = GAME_HEIGHT / 2 - 80;

    herbs.forEach((herb, i) => {
      const text = this.add.text(200 + i * 120, y, herb, {
        fontSize: '48px',
      });
      text.setOrigin(0.5);
      text.setAlpha(0);
      text.setInteractive();

      let hung = false;
      text.on('pointerdown', () => {
        if (!hung) {
          this.tweens.add({
            targets: text,
            y: y - 60,
            duration: 400,
            ease: 'Quad.easeOut',
          });
          this.playSSound();
          hung = true;
        }
      });

      this.tweens.add({
        targets: text,
        alpha: 1,
        delay: i * 300,
        duration: 400,
      });
    });

    this.audioManager.sfxReveal();
    this.time.delayedCall(4000, () => this.advanceStage());
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      this.scene.start(SCENES.ACT2_SCENE5);
    });
  }
}
