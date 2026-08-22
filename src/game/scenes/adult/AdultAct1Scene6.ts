import { StoryScene } from '../StoryScene';
import { SceneScript } from '@/data/scenes/types';
import { ADULT_SCENE_6_N } from '@/data/scenes/adult/act1_adult_script';
import { GAME_WIDTH, GAME_HEIGHT } from '@/game/config';

/**
 * ADULT MODE - Act 1, Scene 6
 * Letter Ð - Hotel
 */
export class AdultAct1Scene6 extends StoryScene {
  constructor() {
    super('AdultAct1Scene6');
  }

  protected getScript(): SceneScript {
    return ADULT_SCENE_6_N;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();

    // Hotel lobby background
    bg.fillGradientStyle(0xf0f0f0, 0xf0f0f0, 0xc0c0c0, 0xc0c0c0, 1);
    bg.fillRect(0, 0, GAME_WIDTH, 360);
    bg.setDepth(0);

    // Reception desk
    const desk = this.add.rectangle(GAME_WIDTH / 2, 280, 300, 80, 0x8b7355);
    desk.setDepth(1);

    // Hotel sign
    const signBg = this.add.rectangle(GAME_WIDTH / 2, 80, 180, 50, 0x2c3e50);
    signBg.setDepth(2);

    const signText = this.add.text(GAME_WIDTH / 2, 80, 'ÐžÐ¢Ð•Ð›Ð¬', {
      fontFamily: 'Arial',
      fontSize: '28px',
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
      // Act 1 complete, transition to Act 2
      this.scene.start('AdultAct2Scene1');
    });
  }
}
