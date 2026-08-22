import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_6_Y_SIGNS } from '@/data/scenes/adult/act5_adult_script';
import { GAME_WIDTH } from '@/game/config';

export class AdultAct5Scene6 extends StoryScene {
  constructor() { super('AdultAct5Scene6'); }
  protected getScript(): SceneScript { return ADULT_SCENE_6_Y_SIGNS; }
  protected createBackground(): void {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0xfff9c4, 0xfff9c4, 0xfff59d, 0xfff59d, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);
    const signText = this.add.text(GAME_WIDTH / 2, 80, 'Ð“Ð ÐÐœÐœÐÐ¢Ð˜ÐšÐ', { fontFamily: 'Arial', fontSize: '26px', color: '#2c3e50', fontStyle: 'bold' });
    signText.setOrigin(0.5); signText.setDepth(2);

    // Add congratulations elements
    const congrats = this.add.text(GAME_WIDTH / 2, 150, 'ÐÐ›Ð¤ÐÐ’Ð˜Ð¢ ÐžÐ¡Ð’ÐžÐÐ!', {
      fontFamily: 'Arial',
      fontSize: '20px',
      color: '#27ae60',
      fontStyle: 'bold',
    });
    congrats.setOrigin(0.5);
    congrats.setDepth(3);

    this.background = bg;
  }
  protected createCharacters(): void {}
  protected createHotspots(): void {}
  protected transitionToNextScene(): void {
    // Final scene - show completion message
    this.cameras.main.fadeOut(1000);
    this.time.delayedCall(1000, () => {
      this.scene.start('AdultIntroScene'); // Loop back to intro or show completion
    });
  }
}
