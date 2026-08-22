/**
 * Visual Themes for Kids vs Adult Modes
 */

export interface Theme {
  name: string;
  colors: {
    primary: number;
    secondary: number;
    accent: number;
    background: number;
    textBox: number;
    buttonBar: number;
    text: string;
    textSecondary: string;
  };
  fonts: {
    main: string;
    dialogue: string;
    ui: string;
  };
  layout: {
    textBoxAlpha: number;
    separatorThickness: number;
  };
}

export const KIDS_THEME: Theme = {
  name: 'Kids',
  colors: {
    primary: 0xffd700,      // Bright gold
    secondary: 0xff6b9d,    // Pink
    accent: 0x4a90e2,       // Blue
    background: 0x87ceeb,   // Sky blue
    textBox: 0x000000,      // Black
    buttonBar: 0x2a2a4e,    // Dark blue
    text: '#ffffff',
    textSecondary: '#ffff00',
  },
  fonts: {
    main: '"Press Start 2P", monospace',
    dialogue: 'Arial',
    ui: '"Press Start 2P", monospace',
  },
  layout: {
    textBoxAlpha: 0.85,
    separatorThickness: 3,
  },
};

export const ADULT_THEME: Theme = {
  name: 'Adult',
  colors: {
    primary: 0x2c3e50,      // Dark slate
    secondary: 0x3498db,    // Professional blue
    accent: 0xe74c3c,       // Accent red
    background: 0xecf0f1,   // Light gray
    textBox: 0x2c3e50,      // Dark slate
    buttonBar: 0x34495e,    // Charcoal
    text: '#ffffff',
    textSecondary: '#3498db',
  },
  fonts: {
    main: 'Georgia, serif',
    dialogue: 'Arial, sans-serif',
    ui: 'Arial, sans-serif',
  },
  layout: {
    textBoxAlpha: 0.95,
    separatorThickness: 2,
  },
};

export function getTheme(mode: 'kids' | 'adult'): Theme {
  return mode === 'kids' ? KIDS_THEME : ADULT_THEME;
}
