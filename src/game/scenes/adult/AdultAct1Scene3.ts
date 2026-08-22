import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_3_M } from '@/data/scenes/adult/act1_adult_script';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

/**
 * ADULT MODE - Act 1, Scene 3
 * Letter Ðœ - Metro Station
 */
export class AdultAct1Scene3 extends StoryScene {
  constructor() {
    super('AdultAct1Scene3');
  }

  protected getScript(): SceneScript {
    return ADULT_SCENE_3_M;
  }

  protected createBackground(): void {
    // Metro station - ONLY PICTURE AREA
    const PICTURE_HEIGHT = 360;
    const bg = this.add.graphics();

    // Metro colors - dark with red accents
    bg.fillGradientStyle(0x34495e, 0x34495e, 0x2c3e50, 0x2c3e50, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);
    bg.setDepth(0);

    // Metro M sign (iconic red circle)
    const circle = this.add.circle(GAME_WIDTH / 2, 150, 60, 0xe74c3c);
    circle.setStrokeStyle(4, 0xffffff);
    circle.setDepth(2);

    const mLetter = this.add.text(GAME_WIDTH / 2, 150, 'Ðœ', {
      fontFamily: 'Arial',
      fontSize: '64px',
      color: '#ffffff',
      fontStyle: 'bold',
    });
    mLetter.setOrigin(0.5);
    mLetter.setDepth(3);

    // Platform
    const platform = this.add.rectangle(GAME_WIDTH / 2, 280, GAME_WIDTH, 80, 0x7f8c8d);
    platform.setDepth(1);

    this.background = bg;
  }

  protected createCharacters(): void {
    // No characters
  }

  protected createHotspots(): void {
    // Interaction-based
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      // Back to main menu after 3 letters (demo)
      startScene(this, SCENES.MAIN_MENU);
    });
  }
}
