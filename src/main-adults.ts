import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '@/game/config';
import { GameState } from '@/systems/progress';
import { BootScene } from '@/game/scenes/BootScene';
import { PreloadScene } from '@/game/scenes/PreloadScene';
import { MainMenuScene } from '@/game/scenes/MainMenuScene';
import { AdultIntroScene } from '@/game/scenes/adult/AdultIntroScene';
import { AdultAct1Scene1 } from '@/game/scenes/adult/AdultAct1Scene1';
import { AdultAct1Scene2 } from '@/game/scenes/adult/AdultAct1Scene2';
import { AdultAct1Scene3 } from '@/game/scenes/adult/AdultAct1Scene3';
import { AdultAct1Scene4 } from '@/game/scenes/adult/AdultAct1Scene4';
import { AdultAct1Scene5 } from '@/game/scenes/adult/AdultAct1Scene5';
import { AdultAct1Scene6 } from '@/game/scenes/adult/AdultAct1Scene6';
import { AdultAct2Scene1 } from '@/game/scenes/adult/AdultAct2Scene1';
import { AdultAct2Scene2 } from '@/game/scenes/adult/AdultAct2Scene2';
import { AdultAct2Scene3 } from '@/game/scenes/adult/AdultAct2Scene3';
import { AdultAct2Scene4 } from '@/game/scenes/adult/AdultAct2Scene4';
import { AdultAct2Scene5 } from '@/game/scenes/adult/AdultAct2Scene5';
import { AdultAct2Scene6 } from '@/game/scenes/adult/AdultAct2Scene6';
import { AdultAct3Scene1 } from '@/game/scenes/adult/AdultAct3Scene1';
import { AdultAct3Scene2 } from '@/game/scenes/adult/AdultAct3Scene2';
import { AdultAct3Scene3 } from '@/game/scenes/adult/AdultAct3Scene3';
import { AdultAct3Scene4 } from '@/game/scenes/adult/AdultAct3Scene4';
import { AdultAct3Scene5 } from '@/game/scenes/adult/AdultAct3Scene5';
import { AdultAct3Scene6 } from '@/game/scenes/adult/AdultAct3Scene6';
import { AdultAct4Scene1 } from '@/game/scenes/adult/AdultAct4Scene1';
import { AdultAct4Scene2 } from '@/game/scenes/adult/AdultAct4Scene2';
import { AdultAct4Scene3 } from '@/game/scenes/adult/AdultAct4Scene3';
import { AdultAct4Scene4 } from '@/game/scenes/adult/AdultAct4Scene4';
import { AdultAct4Scene5 } from '@/game/scenes/adult/AdultAct4Scene5';
import { AdultAct4Scene6 } from '@/game/scenes/adult/AdultAct4Scene6';
import { AdultAct5Scene1 } from '@/game/scenes/adult/AdultAct5Scene1';
import { AdultAct5Scene2 } from '@/game/scenes/adult/AdultAct5Scene2';
import { AdultAct5Scene3 } from '@/game/scenes/adult/AdultAct5Scene3';
import { AdultAct5Scene4 } from '@/game/scenes/adult/AdultAct5Scene4';
import { AdultAct5Scene5 } from '@/game/scenes/adult/AdultAct5Scene5';
import { AdultAct5Scene6 } from '@/game/scenes/adult/AdultAct5Scene6';

// Set learning mode to adult on startup
GameState.getInstance().setLearningMode('adult');

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  parent: 'game-container',
  pixelArt: true,
  roundPixels: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
  scene: [
    BootScene,
    PreloadScene,
    MainMenuScene,
    AdultIntroScene,
    AdultAct1Scene1,
    AdultAct1Scene2,
    AdultAct1Scene3,
    AdultAct1Scene4,
    AdultAct1Scene5,
    AdultAct1Scene6,
    AdultAct2Scene1,
    AdultAct2Scene2,
    AdultAct2Scene3,
    AdultAct2Scene4,
    AdultAct2Scene5,
    AdultAct2Scene6,
    AdultAct3Scene1,
    AdultAct3Scene2,
    AdultAct3Scene3,
    AdultAct3Scene4,
    AdultAct3Scene5,
    AdultAct3Scene6,
    AdultAct4Scene1,
    AdultAct4Scene2,
    AdultAct4Scene3,
    AdultAct4Scene4,
    AdultAct4Scene5,
    AdultAct4Scene6,
    AdultAct5Scene1,
    AdultAct5Scene2,
    AdultAct5Scene3,
    AdultAct5Scene4,
    AdultAct5Scene5,
    AdultAct5Scene6,
  ],
};

new Phaser.Game(config);
