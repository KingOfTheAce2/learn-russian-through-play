import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_2_FISHING } from '@/data/scenes/kids/act3_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

export class Act3Scene2 extends StoryScene {
  private masha!: Character;
  private shura!: Character;

  constructor() {
    super(SCENES.ACT3_SCENE2);
  }

  protected getScript(): SceneScript {
    return SCENE_2_FISHING;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0x87CEEB, 0x87CEEB, 0x90EE90, 0x90EE90, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const water = this.add.graphics();
    water.fillStyle(0x4169E1, 0.7);
    water.fillRect(0, 210, GAME_WIDTH, 150);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.shura = new Character(this, {
      name: 'shura',
      x: 200,
      y: 300,
      scale: 1.5,
      emotion: 'excited',
    });

    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH - 200,
      y: 300,
      scale: 1.5,
      emotion: 'happy',
    });

    this.addCharacter('shura', this.shura);
    this.addCharacter('masha', this.masha);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/kids/act3_story_script').SceneStage): void {
    super.playStage(stage);
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      this.scene.start(SCENES.ACT3_SCENE3);
    });
  }
}
