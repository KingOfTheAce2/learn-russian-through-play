import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_4_SH } from '@/data/scenes/adult/act1_adult_script';
import { GAME_WIDTH, GAME_HEIGHT } from '@/game/config';

/**
 * ADULT MODE - Act 1, Scene 4
 * Letter Ð¨ - Shop
 */
export class AdultAct1Scene4 extends StoryScene {
  constructor() {
    super('AdultAct1Scene4');
  }

  protected getScript(): SceneScript {
    return ADULT_SCENE_4_SH;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();

    // Professional shop background
    bg.fillGradientStyle(0xffffff, 0xffffff, 0xe0e0e0, 0xe0e0e0, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);

    // Shop shelves
    for (let i = 0; i < 3; i++) {
      const y = 100 + i * 80;
      const shelf = this.add.rectangle(GAME_WIDTH / 2, y, 500, 15, 0x8b4513);
      shelf.setDepth(1);
    }

    // Shop sign
    const signBg = this.add.rectangle(GAME_WIDTH / 2, 50, 180, 40, 0x3498db);
    signBg.setDepth(2);

    const signText = this.add.text(GAME_WIDTH / 2, 50, 'ÐœÐÐ“ÐÐ—Ð˜Ð', {
      fontFamily: 'Arial',
      fontSize: '22px',
      color: '#ffffff',
      fontStyle: 'bold',
    });
    signText.setOrigin(0.5);
    signText.setDepth(3);

    this.background = bg;
  }

  protected createCharacters(): void {
    // No characters in adult mode
  }

  protected createHotspots(): void {
    // Hotspots created by interaction system
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      this.scene.start('AdultAct1Scene5');
    });
  }
}
