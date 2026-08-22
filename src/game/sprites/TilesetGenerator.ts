import Phaser from 'phaser';
import { TILE_SIZE, COLORS } from '@/game/config';
import { TILE } from '@/data/tilemaps/village';

/**
 * Generates all placeholder textures at runtime using Phaser Graphics.
 * When real pixel art is added, just load sprite sheets instead.
 */
export function generateTileset(scene: Phaser.Scene): void {
  const s = TILE_SIZE;

  // Grass tile
  drawTile(scene, 'tile_grass', (g) => {
    g.fillStyle(COLORS.GRASS);
    g.fillRect(0, 0, s, s);
    // Slight variation dots
    g.fillStyle(COLORS.GRASS_DARK);
    g.fillRect(3, 4, 1, 1);
    g.fillRect(10, 2, 1, 1);
    g.fillRect(7, 11, 1, 1);
    g.fillRect(13, 8, 1, 1);
  });

  // Path tile
  drawTile(scene, 'tile_path', (g) => {
    g.fillStyle(COLORS.PATH);
    g.fillRect(0, 0, s, s);
    g.fillStyle(COLORS.PATH_DARK);
    g.fillRect(2, 5, 2, 1);
    g.fillRect(9, 10, 2, 1);
  });

  // Wall tile
  drawTile(scene, 'tile_wall', (g) => {
    g.fillStyle(COLORS.WOOD);
    g.fillRect(0, 0, s, s);
    g.fillStyle(COLORS.WOOD_DARK);
    g.fillRect(0, 7, s, 1);
    g.fillRect(7, 0, 1, s);
  });

  // Roof tile
  drawTile(scene, 'tile_roof', (g) => {
    g.fillStyle(COLORS.ROOF);
    g.fillRect(0, 0, s, s);
    g.fillStyle(COLORS.ROOF_DARK);
    g.fillRect(0, s - 2, s, 2);
  });

  // Door tile
  drawTile(scene, 'tile_door', (g) => {
    g.fillStyle(COLORS.DOOR);
    g.fillRect(2, 0, s - 4, s);
    g.fillStyle(COLORS.GOLD);
    g.fillRect(10, 7, 2, 2); // doorknob
  });

  // Water tile
  drawTile(scene, 'tile_water', (g) => {
    g.fillStyle(COLORS.WATER);
    g.fillRect(0, 0, s, s);
    g.fillStyle(COLORS.WATER_DARK);
    g.fillRect(2, 4, 4, 1);
    g.fillRect(9, 10, 4, 1);
  });

  // Fence tile
  drawTile(scene, 'tile_fence', (g) => {
    g.fillStyle(COLORS.GRASS_DARK);
    g.fillRect(0, 0, s, s);
    g.fillStyle(COLORS.FENCE);
    g.fillRect(3, 2, 2, s - 2);
    g.fillRect(11, 2, 2, s - 2);
    g.fillRect(0, 4, s, 2);
    g.fillRect(0, 10, s, 2);
  });

  // Flowers tile
  drawTile(scene, 'tile_flowers', (g) => {
    g.fillStyle(COLORS.GRASS);
    g.fillRect(0, 0, s, s);
    g.fillStyle(COLORS.FLOWER_PINK);
    g.fillRect(4, 3, 2, 2);
    g.fillStyle(COLORS.GOLD);
    g.fillRect(10, 9, 2, 2);
  });

  // Stone tile
  drawTile(scene, 'tile_stone', (g) => {
    g.fillStyle(COLORS.STONE);
    g.fillRect(0, 0, s, s);
    g.fillStyle(COLORS.STONE_DARK);
    g.fillRect(0, 7, s, 1);
    g.fillRect(7, 0, 1, s);
  });
}

function drawTile(
  scene: Phaser.Scene,
  key: string,
  draw: (g: Phaser.GameObjects.Graphics) => void
): void {
  const g = scene.add.graphics();
  draw(g);
  g.generateTexture(key, TILE_SIZE, TILE_SIZE);
  g.destroy();
}

/** Map tile ID to texture key. */
export function tileToTexture(tileId: number): string {
  switch (tileId) {
    case TILE.GRASS: return 'tile_grass';
    case TILE.PATH: return 'tile_path';
    case TILE.WALL: return 'tile_wall';
    case TILE.ROOF: return 'tile_roof';
    case TILE.DOOR: return 'tile_door';
    case TILE.WATER: return 'tile_water';
    case TILE.FENCE: return 'tile_fence';
    case TILE.FLOWERS: return 'tile_flowers';
    case TILE.STONE: return 'tile_stone';
    default: return 'tile_grass';
  }
}

/** Generate player placeholder texture (16x24). */
export function generatePlayerTexture(scene: Phaser.Scene): void {
  const g = scene.add.graphics();
  // Body
  g.fillStyle(COLORS.PLAYER_BLUE);
  g.fillRect(2, 8, 12, 12);
  // Head
  g.fillStyle(0xffcc99); // skin
  g.fillRect(4, 0, 8, 8);
  // Hair
  g.fillStyle(0x553311);
  g.fillRect(4, 0, 8, 3);
  // Legs
  g.fillStyle(0x664422);
  g.fillRect(3, 20, 4, 4);
  g.fillRect(9, 20, 4, 4);
  g.generateTexture('player', 16, 24);
  g.destroy();
}

/** Generate NPC textures. */
export function generateNPCTextures(scene: Phaser.Scene): void {
  // Masha - red dress
  const gm = scene.add.graphics();
  gm.fillStyle(COLORS.MASHA_RED);
  gm.fillRect(2, 8, 12, 12);
  gm.fillStyle(0xffcc99);
  gm.fillRect(4, 0, 8, 8);
  gm.fillStyle(0x993311); // dark red hair
  gm.fillRect(4, 0, 8, 4);
  gm.fillRect(2, 2, 2, 6); // braids
  gm.fillRect(12, 2, 2, 6);
  gm.fillStyle(COLORS.MASHA_RED);
  gm.fillRect(3, 20, 4, 4);
  gm.fillRect(9, 20, 4, 4);
  gm.generateTexture('npc_masha', 16, 24);
  gm.destroy();

  // Shura - green tunic
  const gs = scene.add.graphics();
  gs.fillStyle(COLORS.SHURA_GREEN);
  gs.fillRect(2, 8, 12, 12);
  gs.fillStyle(0xffcc99);
  gs.fillRect(4, 0, 8, 8);
  gs.fillStyle(0x445522); // cap
  gs.fillRect(3, 0, 10, 3);
  gs.fillStyle(0x664422);
  gs.fillRect(3, 20, 4, 4);
  gs.fillRect(9, 20, 4, 4);
  gs.generateTexture('npc_shura', 16, 24);
  gs.destroy();
}

/** Generate rune placeholder texture. */
export function generateRuneTexture(scene: Phaser.Scene): void {
  const g = scene.add.graphics();
  g.fillStyle(COLORS.GOLD);
  g.fillCircle(8, 8, 7);
  g.fillStyle(0xffee88);
  g.fillCircle(8, 8, 5);
  g.generateTexture('rune', 16, 16);
  g.destroy();
}

/** Generate quest indicator "!" texture. */
export function generateQuestIndicator(scene: Phaser.Scene): void {
  const g = scene.add.graphics();
  g.fillStyle(COLORS.GOLD);
  g.fillRect(2, 0, 4, 5);
  g.fillRect(2, 6, 4, 2);
  g.generateTexture('quest_indicator', 8, 8);
  g.destroy();
}
