import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_1_TS } from '@/data/scenes/adult/act5_adult_script';
import { GAME_WIDTH } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

export class AdultAct5Scene1 extends StoryScene {
  constructor() { super('AdultAct5Scene1'); }
  protected getScript(): SceneScript { return ADULT_SCENE_1_TS; }
  protected createBackground(): void {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0xe1f5fe, 0xe1f5fe, 0xb3e5fc, 0xb3e5fc, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);
    const signText = this.add.text(GAME_WIDTH / 2, 80, 'Ð¦Ð•ÐÐ¢Ð ', { fontFamily: 'Arial', fontSize: '32px', color: '#2c3e50', fontStyle: 'bold' });
    signText.setOrigin(0.5); signText.setDepth(2);
    this.background = bg;
  }
  protected createCharacters(): void {}
  protected createHotspots(): void {}
  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => { startScene(this, 'AdultAct5Scene2'); });
  }
}
