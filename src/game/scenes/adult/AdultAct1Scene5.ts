import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_5_R } from '@/data/scenes/adult/act1_adult_script';
import { GAME_WIDTH, GAME_HEIGHT } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

/**
 * ADULT MODE - Act 1, Scene 5
 * Letter Ð  - Restaurant Menu
 */
export class AdultAct1Scene5 extends StoryScene {
  constructor() {
    super('AdultAct1Scene5');
  }

  protected getScript(): SceneScript {
    return ADULT_SCENE_5_R;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();

    // Restaurant background
    bg.fillGradientStyle(0xf5e6d3, 0xf5e6d3, 0xd4a574, 0xd4a574, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);

    // Tables
    for (let i = 0; i < 3; i++) {
      const x = 120 + i * 180;
      const table = this.add.rectangle(x, 250, 80, 80, 0x8b4513);
      table.setDepth(1);
    }

    // Restaurant sign
    const signBg = this.add.rectangle(GAME_WIDTH / 2, 50, 220, 45, 0xc0392b);
    signBg.setDepth(2);

    const signText = this.add.text(GAME_WIDTH / 2, 50, 'Ð Ð•Ð¡Ð¢ÐžÐ ÐÐ', {
      fontFamily: 'Arial',
      fontSize: '24px',
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
      startScene(this, 'AdultAct1Scene6');
    });
  }
}
