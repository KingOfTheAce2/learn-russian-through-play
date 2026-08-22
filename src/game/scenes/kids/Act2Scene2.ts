import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_2_BALLOONS } from '@/data/scenes/kids/act2_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

export class Act2Scene2 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama!: Character;
  private balloons: Phaser.GameObjects.Graphics[] = [];

  constructor() {
    super(SCENES.ACT2_SCENE2);
  }

  protected getScript(): SceneScript {
    return SCENE_2_BALLOONS;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0xFFE4B5, 0xFFE4B5, 0xDEB887, 0xDEB887, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const floor = this.add.graphics();
    floor.fillStyle(0x8B4513);
    floor.fillRect(0, 310, GAME_WIDTH, 50);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.mama = new Character(this, {
      name: 'mama',
      x: GAME_WIDTH / 2,
      y: 280,
      scale: 1.5,
      emotion: 'happy',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH / 2 + 150,
      y: 240,
      scale: 1.5,
      emotion: 'excited',
    });

    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH / 2 - 150,
      y: 240,
      scale: 1.5,
      emotion: 'happy',
    });

    this.addCharacter('mama', this.mama);
    this.addCharacter('shura', this.shura);
    this.addCharacter('masha', this.masha);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/kids/act2_story_script').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'shura_counts':
        this.showBalloons();
        break;
      case 'plural_game':
        this.playPluralGame();
        break;
    }
  }

  private showBalloons(): void {
    const colors = [0xff6b9d, 0x4a90e2];
    const positions = [
      { x: GAME_WIDTH / 2 + 120, y: 180 },
      { x: GAME_WIDTH / 2 + 180, y: 200 },
    ];

    positions.forEach((pos, i) => {
      const balloon = this.add.graphics();
      balloon.fillStyle(colors[i]);
      balloon.fillCircle(0, 0, 30);
      balloon.lineStyle(2, 0x000000);
      balloon.lineBetween(0, 30, 0, 100);
      balloon.setPosition(pos.x, pos.y);
      balloon.setInteractive(
        new Phaser.Geom.Circle(0, 0, 30),
        Phaser.Geom.Circle.Contains
      );

      balloon.on('pointerdown', () => {
        this.playYSound();
        this.tweens.add({
          targets: balloon,
          y: pos.y - 20,
          duration: 200,
          yoyo: true,
        });
      });

      this.balloons.push(balloon);
    });

    this.time.delayedCall(3000, () => this.advanceStage());
  }

  private playYSound(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.value = 300;
      gain.gain.value = 0.08;

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }
  }

  private playPluralGame(): void {
    const centerY = GAME_HEIGHT / 2 - 50;
    const pairs = [
      { singular: 'ШАР', plural: 'ША-РЫ' },
      { singular: 'РАМА', plural: 'РА-МЫ' },
    ];

    pairs.forEach((pair, i) => {
      const y = centerY + i * 80;

      const singular = this.add.text(150, y, pair.singular, {
        fontFamily: '"Press Start 2P"',
        fontSize: '24px',
        color: '#000000',
      });
      singular.setOrigin(0.5);

      const arrow = this.add.text(GAME_WIDTH / 2, y, '→', {
        fontFamily: 'Arial',
        fontSize: '32px',
        color: '#666666',
      });
      arrow.setOrigin(0.5);

      const plural = this.add.text(GAME_WIDTH - 150, y, pair.plural, {
        fontFamily: '"Press Start 2P"',
        fontSize: '24px',
        color: '#ff6b9d',
      });
      plural.setOrigin(0.5);
      plural.setAlpha(0);

      this.tweens.add({
        targets: plural,
        alpha: 1,
        delay: i * 600,
        duration: 400,
      });
    });

    this.audioManager.sfxReveal();
    this.time.delayedCall(2500, () => this.advanceStage());
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      startScene(this, SCENES.ACT2_SCENE3);
    });
  }
}
