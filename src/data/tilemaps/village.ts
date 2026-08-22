import { MAP_COLS, MAP_ROWS } from '@/game/config';

// Tile IDs
export const TILE = {
  GRASS: 0,
  PATH: 1,
  WALL: 2,
  ROOF: 3,
  DOOR: 4,
  WATER: 5,
  FENCE: 6,
  FLOWERS: 7,
  STONE: 8,
} as const;

const G = TILE.GRASS;
const P = TILE.PATH;
const W = TILE.WALL;
const R = TILE.ROOF;
const D = TILE.DOOR;
const A = TILE.WATER;
const F = TILE.FENCE;
const L = TILE.FLOWERS;
const S = TILE.STONE;

// 40x30 village ground layer
export const VILLAGE_GROUND: number[][] = [
  [F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,R,R,R,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,R,R,R,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,W,W,W,G,G,G,P,P,P,P,P,G,G,G,G,G,G,G,G,G,G,G,W,W,W,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,W,D,W,G,G,G,P,G,G,G,P,G,G,G,G,G,G,G,G,G,G,G,W,D,W,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,P,G,G,G,P,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,P,G,G,G,P,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,P,P,P,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,L,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,A,A,A,A,A,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,A,A,A,A,A,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,A,A,A,A,A,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,R,R,R,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,W,W,W,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,W,D,W,G,G,G,G,G,P,P,P,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,P,G,P,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,P,P,P,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,R,R,R,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,W,W,W,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,W,D,W,G,G,G,F],
  [F,G,G,G,L,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,A,A,A,A,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,A,A,A,A,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,A,A,A,A,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,P,P,P,P,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,P,G,G,P,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,P,P,P,P,G,G,G,G,G,G,G,G,G,S,S,S,S,S,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,F],
  [F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F],
];

// Collision layer: 1 = solid, 0 = walkable
export const VILLAGE_COLLISION: number[][] = VILLAGE_GROUND.map(row =>
  row.map(tile => {
    switch (tile) {
      case TILE.FENCE:
      case TILE.WALL:
      case TILE.ROOF:
      case TILE.WATER:
      case TILE.STONE:
        return 1;
      default:
        return 0;
    }
  })
);

// Key positions in pixel coords (tile * 16)
export const VILLAGE_POSITIONS = {
  playerSpawn: { x: 12 * 16, y: 6 * 16 },
  runes: {
    'А': { x: 16 * 16, y: 2 * 16 },
    'У': { x: 16 * 16, y: 8 * 16 },
    'М': { x: 27 * 16, y: 3 * 16 },
    'Ш': { x: 27 * 16, y: 14 * 16 },
    'Р': { x: 8 * 16, y: 17 * 16 },
    'Н': { x: 19 * 16, y: 21 * 16 },
  },
  npcs: {
    masha: { x: 10 * 16, y: 11 * 16 },
    shura: { x: 32 * 16, y: 25 * 16 },
  },
  gate: { x: 32 * 16, y: 26 * 16 },
} as const;

export function getTileAt(col: number, row: number): number {
  if (row < 0 || row >= MAP_ROWS || col < 0 || col >= MAP_COLS) return TILE.FENCE;
  return VILLAGE_GROUND[row][col];
}

export function isWalkable(col: number, row: number): boolean {
  if (row < 0 || row >= MAP_ROWS || col < 0 || col >= MAP_COLS) return false;
  return VILLAGE_COLLISION[row][col] === 0;
}
