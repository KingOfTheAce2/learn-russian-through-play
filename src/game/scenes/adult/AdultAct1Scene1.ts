import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_1_A } from '@/data/scenes/adult/act1_adult_script';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

/**
 * ADULT MODE - Act 1, Scene 1
 * Letter Ð - Airport Arrival
 */
export class AdultAct1Scene1 extends StoryScene {
  constructor() {
    super('AdultAct1Scene1');
  }

  protected getScript(): SceneScript {
    return ADULT_SCENE_1_A;
  }

  protected createBackground(): void {
    // Professional airport background
    const bg = this.add.graphics();

    // Gradient - professional gray/blue
    bg.fillGradientStyle(0xecf0f1, 0xecf0f1, 0xbdc3c7, 0xbdc3c7, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360); // Picture area only
    bg.setDepth(0);

    // Airport terminal windows (simple geometric shapes)
    const windowColor = 0x3498db;
    const windowAlpha = 0.3;

    for (let i = 0; i < 4; i++) {
      const x = 100 + i * 150;
      const y = 100;
      const window = this.add.rectangle(x, y, 80, 120, windowColor, windowAlpha);
      window.setStrokeStyle(2, 0x2c3e50);
      window.setDepth(1);
    }

    // Airport sign
    const signBg = this.add.rectangle(GAME_WIDTH / 2, 250, 200, 50, 0x2c3e50);
    signBg.setDepth(2);

    const signText = this.add.text(GAME_WIDTH / 2, 250, 'ÐÐ­Ð ÐžÐŸÐžÐ Ð¢', {
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
    // No cartoon characters in adult mode
    // Maybe add a professional-looking silhouette later
  }

  protected createHotspots(): void {
    // Hotspots created by interaction system
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      startScene(this, 'AdultAct1Scene2');
    });
  }
}
