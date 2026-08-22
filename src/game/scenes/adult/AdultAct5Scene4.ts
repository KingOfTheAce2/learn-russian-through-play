import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_4_E } from '@/data/scenes/adult/act5_adult_script';
import { GAME_WIDTH } from '@/game/config';

export class AdultAct5Scene4 extends StoryScene {
  constructor() { super('AdultAct5Scene4'); }
  protected getScript(): SceneScript { return ADULT_SCENE_4_E; }
  protected createBackground(): void {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0xf3e5f5, 0xf3e5f5, 0xe1bee7, 0xe1bee7, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);
    const signText = this.add.text(GAME_WIDTH / 2, 80, 'ÐšÐžÐœÐŸÐ¬Ð®Ð¢Ð•Ð ', { fontFamily: 'Arial', fontSize: '26px', color: '#2c3e50', fontStyle: 'bold' });
    signText.setOrigin(0.5); signText.setDepth(2);
    this.background = bg;
  }
  protected createCharacters(): void {}
  protected createHotspots(): void {}
  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => { this.scene.start('AdultAct5Scene5'); });
  }
}
