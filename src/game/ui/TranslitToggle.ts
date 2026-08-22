import Phaser from 'phaser';
import { FONT_FAMILY, COLORS } from '@/game/config';
import { GameState } from '@/systems/progress';

export class TranslitToggle extends Phaser.GameObjects.Container {
  private label: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    this.setScrollFactor(0);
    this.setDepth(100);

    const bg = scene.add.rectangle(0, 0, 20, 14, COLORS.UI_DARK, 0.8);
    bg.setStrokeStyle(1, COLORS.GOLD);
    bg.setInteractive({ useHandCursor: true });
    this.add(bg);

    this.label = scene.add.text(0, 0, 'Aa', {
      fontFamily: FONT_FAMILY,
      fontSize: '7px',
      color: '#ffd700',
    });
    this.label.setOrigin(0.5, 0.5);
    this.add(this.label);

    bg.on('pointerdown', () => {
      GameState.getInstance().toggleTranslit();
      this.updateLabel();
      scene.events.emit('translit-toggled');
    });

    this.updateLabel();
    scene.add.existing(this);
  }

  private updateLabel(): void {
    const enabled = GameState.getInstance().data.translitEnabled;
    this.label.setColor(enabled ? '#ffd700' : '#666666');
  }
}
