import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_2_Z } from '@/data/scenes/adult/act3_adult_script';
import { GAME_WIDTH } from '@/game/config';

export class AdultAct3Scene2 extends StoryScene {
  constructor() { super('AdultAct3Scene2'); }
  protected getScript(): SceneScript { return ADULT_SCENE_2_Z; }
  protected createBackground(): void {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0xe8f5e9, 0xe8f5e9, 0xc8e6c9, 0xc8e6c9, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);
    const signText = this.add.text(GAME_WIDTH / 2, 80, 'Ð—ÐžÐžÐŸÐÐ Ðš', { fontFamily: 'Arial', fontSize: '30px', color: '#2c3e50', fontStyle: 'bold' });
    signText.setOrigin(0.5); signText.setDepth(2);
    this.background = bg;
  }
  protected createCharacters(): void {}
  protected createHotspots(): void {}
  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => { this.scene.start('AdultAct3Scene3'); });
  }
}
