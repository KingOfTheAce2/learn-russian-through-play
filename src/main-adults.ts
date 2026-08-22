import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '@/game/config';
import { GameState } from '@/systems/progress';
import { BootScene } from '@/game/scenes/BootScene';
import { PreloadScene } from '@/game/scenes/PreloadScene';
import { MainMenuScene } from '@/game/scenes/MainMenuScene';
import { AdultIntroScene } from '@/game/scenes/adult/AdultIntroScene';

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
  // Act scenes are registered lazily on demand (see src/systems/sceneLoader.ts)
  // to keep the initial bundle small.
  scene: [
    BootScene,
    PreloadScene,
    MainMenuScene,
    AdultIntroScene,
  ],
};

new Phaser.Game(config);
