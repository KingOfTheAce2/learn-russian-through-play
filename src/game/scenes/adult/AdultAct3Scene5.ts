import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_5_K } from '@/data/scenes/adult/act3_adult_script';
import { GAME_WIDTH } from '@/game/config';

export class AdultAct3Scene5 extends StoryScene {
  constructor() { super('AdultAct3Scene5'); }
  protected getScript(): SceneScript { return ADULT_SCENE_5_K; }
  protected createBackground(): void {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0xfff8e1, 0xfff8e1, 0xffecb3, 0xffecb3, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);
    const signText = this.add.text(GAME_WIDTH / 2, 80, 'ÐšÐÐ¤Ð•', { fontFamily: 'Arial', fontSize: '32px', color: '#2c3e50', fontStyle: 'bold' });
    signText.setOrigin(0.5); signText.setDepth(2);
    this.background = bg;
  }
  protected createCharacters(): void {}
  protected createHotspots(): void {}
  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => { this.scene.start('AdultAct3Scene6'); });
  }
}
