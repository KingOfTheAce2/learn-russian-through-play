import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_3_CLOCK } from '@/data/scenes/kids/act4_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

export class Act4Scene3 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama?: Character;

  constructor() {
    super(SCENES.ACT4_SCENE3);
  }

  protected getScript(): SceneScript {
    return SCENE_3_CLOCK;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0xFFE4B5, 0xFFE4B5, 0xDEB887, 0xDEB887, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);
    this.background = bg;
  }

  protected createCharacters(): void {
    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH / 2 - 100,
      y: 240,
      scale: 1.5,
      emotion: 'happy',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH / 2 + 100,
      y: 240,
      scale: 1.5,
      emotion: 'happy',
    });

    this.addCharacter('masha', this.masha);
    this.addCharacter('shura', this.shura);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/kids/act4_story_script').SceneStage): void {
    super.playStage(stage);
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      this.scene.start(SCENES.ACT4_SCENE4);
    });
  }
}
