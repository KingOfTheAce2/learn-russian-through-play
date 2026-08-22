import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_1_CAT_MOUSE } from '@/data/scenes/kids/act3_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

export class Act3Scene1 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama!: Character;

  constructor() {
    super(SCENES.ACT3_SCENE1);
  }

  protected getScript(): SceneScript {
    return SCENE_1_CAT_MOUSE;
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

    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH / 2 - 150,
      y: 240,
      scale: 1.5,
      emotion: 'excited',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH / 2 + 150,
      y: 240,
      scale: 1.5,
      emotion: 'excited',
    });

    this.addCharacter('mama', this.mama);
    this.addCharacter('masha', this.masha);
    this.addCharacter('shura', this.shura);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/kids/act3_story_script').SceneStage): void {
    super.playStage(stage);

    if (stage.id === 'chase') {
      this.playChaseAnimation();
    }
  }

  private playChaseAnimation(): void {
    this.tweens.add({
      targets: this.masha,
      x: '+=100',
      duration: 800,
      yoyo: true,
      repeat: 1,
    });

    this.time.delayedCall(2000, () => this.advanceStage());
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      startScene(this, SCENES.ACT3_SCENE2);
    });
  }
}
