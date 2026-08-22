import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_4_Y } from '@/data/scenes/adult/act3_adult_script';
import { GAME_WIDTH } from '@/game/config';

export class AdultAct3Scene4 extends StoryScene {
  constructor() { super('AdultAct3Scene4'); }
  protected getScript(): SceneScript { return ADULT_SCENE_4_Y; }
  protected createBackground(): void {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0xfce4ec, 0xfce4ec, 0xf8bbd0, 0xf8bbd0, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);
    const signText = this.add.text(GAME_WIDTH / 2, 80, 'ÐœÐžÐ™ / Ð¢Ð’ÐžÐ™', { fontFamily: 'Arial', fontSize: '28px', color: '#2c3e50', fontStyle: 'bold' });
    signText.setOrigin(0.5); signText.setDepth(2);
    this.background = bg;
  }
  protected createCharacters(): void {}
  protected createHotspots(): void {}
  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => { this.scene.start('AdultAct3Scene5'); });
  }
}
