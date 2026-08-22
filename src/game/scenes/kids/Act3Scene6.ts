import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_6_MILKA } from '@/data/scenes/kids/act3_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

export class Act3Scene6 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama?: Character;

  constructor() {
    super(SCENES.ACT3_SCENE6);
  }

  protected getScript(): SceneScript {
    return SCENE_6_MILKA;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0x87CEEB, 0x87CEEB, 0x90EE90, 0x90EE90, 1);
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

  protected playStage(stage: import('@/data/scenes/kids/act3_story_script').SceneStage): void {
    super.playStage(stage);
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      this.scene.start(SCENES.ACT4_SCENE1);
    });
  }
}
