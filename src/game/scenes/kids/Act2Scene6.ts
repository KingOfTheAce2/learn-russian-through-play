import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_6_PORRIDGE } from '@/data/scenes/kids/act2_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

export class Act2Scene6 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama!: Character;
  private sasha!: Character;
  private bowls: Phaser.GameObjects.Graphics[] = [];

  constructor() {
    super(SCENES.ACT2_SCENE6);
  }

  protected getScript(): SceneScript {
    return SCENE_6_PORRIDGE;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0xFFE4B5, 0xFFE4B5, 0xDEB887, 0xDEB887, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const stove = this.add.graphics();
    stove.fillStyle(0x8B4513);
    stove.fillRect(GAME_WIDTH - 200, 60, 150, 150);
    stove.fillStyle(0xff6600);
    stove.fillCircle(GAME_WIDTH - 125, 135, 20);

    const table = this.add.graphics();
    table.fillStyle(0x8B4513);
    table.fillRect(GAME_WIDTH / 2 - 150, 200, 300, 20);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.mama = new Character(this, {
      name: 'mama',
      x: GAME_WIDTH - 150,
      y: 180,
      scale: 1.5,
      emotion: 'happy',
    });

    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH / 2 - 120,
      y: 260,
      scale: 1.3,
      emotion: 'excited',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH / 2,
      y: 260,
      scale: 1.3,
      emotion: 'excited',
    });

    this.sasha = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH / 2 + 120,
      y: 260,
      scale: 1.3,
      emotion: 'happy',
    });

    this.addCharacter('mama', this.mama);
    this.addCharacter('masha', this.masha);
    this.addCharacter('shura', this.shura);
    this.addCharacter('sasha', this.sasha);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/kids/act2_story_script').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'smell_kasha':
        this.showSteam();
        break;
      case 'set_table':
        this.showBowls();
        break;
    }
  }

  private showSteam(): void {
    for (let i = 0; i < 5; i++) {
      const steam = this.add.graphics();
      steam.fillStyle(0xffffff, 0.4);
      steam.fillCircle(0, 0, 10);
      steam.setPosition(GAME_WIDTH - 125, 110);

      this.tweens.add({
        targets: steam,
        y: 10,
        alpha: 0,
        duration: 1500,
        delay: i * 300,
        repeat: 2,
      });
    }

    this.playKSound();
    this.time.delayedCall(2000, () => this.advanceStage());
  }

  private playKSound(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.value = 200;
      gain.gain.value = 0.05;

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    }
  }

  private showBowls(): void {
    const positions = [
      { x: GAME_WIDTH / 2 - 120, y: 220 },
      { x: GAME_WIDTH / 2, y: 220 },
      { x: GAME_WIDTH / 2 + 120, y: 220 },
    ];

    positions.forEach((pos, i) => {
      const bowl = this.add.graphics();
      bowl.fillStyle(0xffffff);
      bowl.fillCircle(0, 0, 20);
      bowl.lineStyle(2, 0x000000);
      bowl.strokeCircle(0, 0, 20);
      bowl.setPosition(pos.x, pos.y);
      bowl.setAlpha(0);
      bowl.setInteractive(
        new Phaser.Geom.Circle(0, 0, 20),
        Phaser.Geom.Circle.Contains
      );

      bowl.on('pointerdown', () => {
        bowl.fillStyle(0xffd700);
        bowl.fillCircle(0, 0, 18);
        this.playKSound();
      });

      this.tweens.add({
        targets: bowl,
        alpha: 1,
        delay: i * 300,
        duration: 400,
      });

      this.bowls.push(bowl);
    });

    this.audioManager.sfxReveal();
    this.time.delayedCall(3000, () => this.advanceStage());
  }

  protected playAmbientAudio(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const melody = ctx.createOscillator();
      const gain = ctx.createGain();
      melody.type = 'sine';
      melody.frequency.value = 440;
      gain.gain.value = 0.015;
      melody.connect(gain);
      gain.connect(ctx.destination);
      melody.start();

      this.events.on('shutdown', () => {
        melody.stop();
      });
    }
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(1000);
    this.time.delayedCall(1000, () => {
      this.scene.start(SCENES.ACT3_SCENE1);
    });
  }
}
