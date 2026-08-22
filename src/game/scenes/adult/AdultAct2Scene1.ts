import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_1_B } from '@/data/scenes/adult/act2_adult_script';
import { GAME_WIDTH } from '@/game/config';

export class AdultAct2Scene1 extends StoryScene {
  constructor() {
    super('AdultAct2Scene1');
  }

  protected getScript(): SceneScript {
    return ADULT_SCENE_1_B;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0xecf0f1, 0xecf0f1, 0xbdc3c7, 0xbdc3c7, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);

    const signText = this.add.text(GAME_WIDTH / 2, 80, 'Ð‘ÐÐÐš', {
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
      this.scene.start('AdultAct2Scene2');
    });
  }
}
