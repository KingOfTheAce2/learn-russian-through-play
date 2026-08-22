import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_2_U } from '@/data/scenes/adult/act1_adult_script';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

/**
 * ADULT MODE - Act 1, Scene 2
 * Letter Ð£ - Restaurant
 */
export class AdultAct1Scene2 extends StoryScene {
  constructor() {
    super('AdultAct1Scene2');
  }

  protected getScript(): SceneScript {
    return ADULT_SCENE_2_U;
  }

  protected createBackground(): void {
    // Restaurant interior - ONLY PICTURE AREA
    const PICTURE_HEIGHT = 360;
    const bg = this.add.graphics();

    // Warm restaurant ambiance
    bg.fillGradientStyle(0xf39c12, 0xf39c12, 0xe67e22, 0xe67e22, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);
    bg.setDepth(0);

    // Tables
    for (let i = 0; i < 3; i++) {
      const x = 150 + i * 200;
      const y = 200;
      const table = this.add.rectangle(x, y, 100, 80, 0x8b4513);
      table.setDepth(1);
    }

    // Restaurant sign
    const sign = this.add.text(GAME_WIDTH / 2, 100, 'Ð Ð•Ð¡Ð¢ÐžÐ ÐÐ', {
      fontFamily: 'Arial',
      fontSize: '28px',
      color: '#2c3e50',
      fontStyle: 'bold',
    });
    sign.setOrigin(0.5);
    sign.setDepth(2);

    this.background = bg;
  }

  protected createCharacters(): void {
    // No characters in adult mode
  }

  protected createHotspots(): void {
    // Hotspots created by interaction
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      startScene(this, 'AdultAct1Scene3');
    });
  }
}
