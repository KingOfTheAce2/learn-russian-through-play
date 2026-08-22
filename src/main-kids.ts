import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '@/game/config';
import { GameState } from '@/systems/progress';
import { BootScene } from '@/game/scenes/BootScene';
import { PreloadScene } from '@/game/scenes/PreloadScene';
import { MainMenuScene } from '@/game/scenes/MainMenuScene';
import { BukvarIntroScene } from '@/game/scenes/kids/BukvarIntroScene';
import { Act1Scene1 } from '@/game/scenes/kids/Act1Scene1';
import { Act1Scene2 } from '@/game/scenes/kids/Act1Scene2';
import { Act1Scene3 } from '@/game/scenes/kids/Act1Scene3';
import { Act1Scene4 } from '@/game/scenes/kids/Act1Scene4';
import { Act1Scene5 } from '@/game/scenes/kids/Act1Scene5';
import { Act1Scene6 } from '@/game/scenes/kids/Act1Scene6';
import { Act2Scene1 } from '@/game/scenes/kids/Act2Scene1';
import { Act2Scene2 } from '@/game/scenes/kids/Act2Scene2';
import { Act2Scene3 } from '@/game/scenes/kids/Act2Scene3';
import { Act2Scene4 } from '@/game/scenes/kids/Act2Scene4';
import { Act2Scene5 } from '@/game/scenes/kids/Act2Scene5';
import { Act2Scene6 } from '@/game/scenes/kids/Act2Scene6';
import { Act3Scene1 } from '@/game/scenes/kids/Act3Scene1';
import { Act3Scene2 } from '@/game/scenes/kids/Act3Scene2';
import { Act3Scene3 } from '@/game/scenes/kids/Act3Scene3';
import { Act3Scene4 } from '@/game/scenes/kids/Act3Scene4';
import { Act3Scene5 } from '@/game/scenes/kids/Act3Scene5';
import { Act3Scene6 } from '@/game/scenes/kids/Act3Scene6';
import { Act4Scene1 } from '@/game/scenes/kids/Act4Scene1';
import { Act4Scene2 } from '@/game/scenes/kids/Act4Scene2';
import { Act4Scene3 } from '@/game/scenes/kids/Act4Scene3';
import { Act4Scene4 } from '@/game/scenes/kids/Act4Scene4';
import { Act4Scene5 } from '@/game/scenes/kids/Act4Scene5';
import { Act4Scene6 } from '@/game/scenes/kids/Act4Scene6';
import { Act5Scene1 } from '@/game/scenes/kids/Act5Scene1';
import { Act5Scene2 } from '@/game/scenes/kids/Act5Scene2';
import { Act5Scene3 } from '@/game/scenes/kids/Act5Scene3';
import { Act5Scene4 } from '@/game/scenes/kids/Act5Scene4';
import { Act5Scene5 } from '@/game/scenes/kids/Act5Scene5';
import { Act5Scene6 } from '@/game/scenes/kids/Act5Scene6';
import { JournalScene } from '@/game/scenes/JournalScene';
import { TransitionScene } from '@/game/scenes/TransitionScene';

// Set learning mode to kids on startup
GameState.getInstance().setLearningMode('kids');

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
    BukvarIntroScene,
    Act1Scene1,
    Act1Scene2,
    Act1Scene3,
    Act1Scene4,
    Act1Scene5,
    Act1Scene6,
    Act2Scene1,
    Act2Scene2,
    Act2Scene3,
    Act2Scene4,
    Act2Scene5,
    Act2Scene6,
    Act3Scene1,
    Act3Scene2,
    Act3Scene3,
    Act3Scene4,
    Act3Scene5,
    Act3Scene6,
    Act4Scene1,
    Act4Scene2,
    Act4Scene3,
    Act4Scene4,
    Act4Scene5,
    Act4Scene6,
    Act5Scene1,
    Act5Scene2,
    Act5Scene3,
    Act5Scene4,
    Act5Scene5,
    Act5Scene6,
    JournalScene,
    TransitionScene,
  ],
};

new Phaser.Game(config);
