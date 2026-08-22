import Phaser from 'phaser';
import { SCENES } from '@/game/config';
import { JournalUI } from '@/game/ui/Journal';

export class JournalScene extends Phaser.Scene {
  constructor() {
    super(SCENES.JOURNAL);
  }

  create(): void {
    new JournalUI(this);

    // Close with J or ESC
    if (this.input.keyboard) {
      const jKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
      const escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

      jKey.on('down', () => this.close());
      escKey.on('down', () => this.close());
    }
  }

  private close(): void {
    this.scene.stop();
    this.scene.resume(SCENES.VILLAGE);
  }
}
