export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 650;
export const TILE_SIZE = 16;
export const FONT_FAMILY = '"Press Start 2P", monospace';

export const COLORS = {
  UI_DARK: 0x1a1a2e,
  GRASS: 0x4a7c4f,
  GRASS_DARK: 0x3d6b42,
  PATH: 0xc4a35a,
  PATH_DARK: 0xb39348,
  WOOD: 0x8b6b3d,
  WOOD_DARK: 0x7a5c32,
  ROOF: 0xb83030,
  ROOF_DARK: 0xa02828,
  DOOR: 0x5a3a1a,
  WATER: 0x3a7ca5,
  WATER_DARK: 0x2d6b94,
  FENCE: 0x9c7c4c,
  STONE: 0x888888,
  STONE_DARK: 0x777777,
  GOLD: 0xffd700,
  WHITE: 0xffffff,
  GRAY: 0x333333,
  PLAYER_BLUE: 0x3366cc,
  MASHA_RED: 0xcc3366,
  SHURA_GREEN: 0x33cc66,
  FLOWER_PINK: 0xff6b9d,
  BLACK: 0x000000,
} as const;

export const CSS_COLORS = {
  UI_DARK: '#1a1a2e',
  GOLD: '#ffd700',
  WHITE: '#ffffff',
  GRAY: '#333333',
  GRASS: '#4a7c4f',
} as const;

export const ACT1_LETTERS = ['А', 'У', 'М', 'Ш', 'Р', 'Н'] as const;
export const ACT2_LETTERS = ['Л', 'Ы', 'О', 'С', 'И', 'К'] as const;
export const ACT3_LETTERS = ['Т', 'В', 'П', 'Е', 'Д', 'З'] as const;
export const ACT4_LETTERS = ['Б', 'Г', 'Ч', 'Ж', 'Ь', 'Й'] as const;
export const ACT5_LETTERS = ['Х', 'Ц', 'Ф', 'Щ', 'Э', 'Я', 'Ё', 'Ю', 'Ъ'] as const;
export const TOTAL_LETTERS = 33;

export const INTERACTION_RADIUS = 48;
export const PLAYER_SPEED = 120;

export const MAP_COLS = 40;
export const MAP_ROWS = 30;

export const SCENES = {
  BOOT: 'BootScene',
  PRELOAD: 'PreloadScene',
  MAIN_MENU: 'MainMenuScene',
  // New story-based scenes
  BUKVAR_INTRO: 'BukvarIntroScene',
  ACT1_SCENE1: 'Act1Scene1',
  ACT1_SCENE2: 'Act1Scene2',
  ACT1_SCENE3: 'Act1Scene3',
  ACT1_SCENE4: 'Act1Scene4',
  ACT1_SCENE5: 'Act1Scene5',
  ACT1_SCENE6: 'Act1Scene6',
  ACT2_SCENE1: 'Act2Scene1',
  ACT2_SCENE2: 'Act2Scene2',
  ACT2_SCENE3: 'Act2Scene3',
  ACT2_SCENE4: 'Act2Scene4',
  ACT2_SCENE5: 'Act2Scene5',
  ACT2_SCENE6: 'Act2Scene6',
  ACT3_SCENE1: 'Act3Scene1',
  ACT3_SCENE2: 'Act3Scene2',
  ACT3_SCENE3: 'Act3Scene3',
  ACT3_SCENE4: 'Act3Scene4',
  ACT3_SCENE5: 'Act3Scene5',
  ACT3_SCENE6: 'Act3Scene6',
  ACT4_SCENE1: 'Act4Scene1',
  ACT4_SCENE2: 'Act4Scene2',
  ACT4_SCENE3: 'Act4Scene3',
  ACT4_SCENE4: 'Act4Scene4',
  ACT4_SCENE5: 'Act4Scene5',
  ACT4_SCENE6: 'Act4Scene6',
  ACT5_SCENE1: 'Act5Scene1',
  ACT5_SCENE2: 'Act5Scene2',
  ACT5_SCENE3: 'Act5Scene3',
  ACT5_SCENE4: 'Act5Scene4',
  ACT5_SCENE5: 'Act5Scene5',
  ACT5_SCENE6: 'Act5Scene6',
  // Old scenes (deprecated - will be removed)
  VILLAGE: 'VillageScene',
  LETTER_DISCOVERY: 'LetterDiscoveryScene',
  SPEED_MATCH: 'SpeedMatchScene',
  WORD_CHASE: 'WordChaseScene',
  DIALOGUE: 'DialogueScene',
  JOURNAL: 'JournalScene',
  TRANSITION: 'TransitionScene',
} as const;
