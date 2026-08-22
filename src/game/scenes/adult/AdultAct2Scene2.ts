import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_2_V } from '@/data/scenes/adult/act2_adult_script';
import { GAME_WIDTH } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

export class AdultAct2Scene2 extends StoryScene {
  constructor() {
    super('AdultAct2Scene2');
  }

  protected getScript(): SceneScript {
    return ADULT_SCENE_2_V;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0xf0f0f0, 0xf0f0f0, 0xd0d0d0, 0xd0d0d0, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);

    const signText = this.add.text(GAME_WIDTH / 2, 80, 'Ð’Ð˜Ð—Ð', {
      fontFamily: 'Arial',
      fontSize: '32px',
      color: '#2c3e50',
      fontStyle: 'bold',
    });
    signText.setOrigin(0.5);
    signText.setDepth(2);

    this.background = bg;
  }

  protected createCharacters(): void {}
  protected createHotspots(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      startScene(this, 'AdultAct2Scene3');
    });
  }
}
