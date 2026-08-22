import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_3_WASPS } from '@/data/scenes/kids/act2_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

export class Act2Scene3 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama!: Character;
  private wasps: Phaser.GameObjects.Graphics[] = [];

  constructor() {
    super(SCENES.ACT2_SCENE3);
  }

  protected getScript(): SceneScript {
    return SCENE_3_WASPS;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0x87CEEB, 0x87CEEB, 0x90EE90, 0x90EE90, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    for (let i = 0; i < 8; i++) {
      const flowerX = 100 + i * 80;
      const flowerY = 280;
      const flower = this.add.graphics();
      const colors = [0xff6b9d, 0xffd700, 0xff69b4, 0xff1493];
      flower.fillStyle(colors[i % colors.length]);
      for (let j = 0; j < 5; j++) {
        const angle = (j / 5) * Math.PI * 2;
        const px = flowerX + Math.cos(angle) * 15;
        const py = flowerY + Math.sin(angle) * 15;
        flower.fillCircle(px, py, 8);
      }
      flower.fillStyle(0xffd700);
      flower.fillCircle(flowerX, flowerY, 8);
    }

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
      x: 400,
      y: 240,
      scale: 1.5,
      emotion: 'worried',
    });

    this.mama = new Character(this, {
      name: 'mama',
      x: GAME_WIDTH - 150,
      y: 240,
      scale: 1.5,
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
      case 'wasps_buzz':
        this.spawnWasps();
        break;
    }
  }

  private spawnWasps(): void {
    for (let i = 0; i < 3; i++) {
      const wasp = this.add.graphics();
      wasp.fillStyle(0xffd700);
      wasp.fillCircle(0, 0, 8);
      wasp.lineStyle(2, 0x000000);
      wasp.lineBetween(-12, 0, -6, 0);
      wasp.lineBetween(6, 0, 12, 0);

      const startX = 150 + i * 100;
      const startY = 180;
      wasp.setPosition(startX, startY);
      wasp.setInteractive(
        new Phaser.Geom.Circle(0, 0, 10),
        Phaser.Geom.Circle.Contains
      );

      this.tweens.add({
        targets: wasp,
        x: startX + 50,
        y: startY - 30,
        duration: 1000 + i * 200,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
      });

      wasp.on('pointerdown', () => {
        this.playOSound();
        this.masha.speak('О-о-о!', 1000);
      });

      this.wasps.push(wasp);
    }

    this.time.delayedCall(3000, () => this.advanceStage());
  }

  private playOSound(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 400;
      gain.gain.value = 0.08;

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    }
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      this.scene.start(SCENES.ACT2_SCENE4);
    });
  }
}
