import Phaser from 'phaser';
import { FONT_FAMILY, INTERACTION_RADIUS, COLORS } from '@/game/config';

export class NPC extends Phaser.GameObjects.Container {
  private sprite: Phaser.GameObjects.Image;
  private nameTag: Phaser.GameObjects.Text;
  private questIndicator: Phaser.GameObjects.Image;
  public npcId: string;
  public dialogueId: string;
  private hasQuest = false;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    textureKey: string,
    name: string,
    npcId: string,
    dialogueId: string
  ) {
    super(scene, x, y);

    this.npcId = npcId;
    this.dialogueId = dialogueId;

    this.sprite = scene.add.image(0, 0, textureKey);
    this.sprite.setOrigin(0.5, 0.5);
    this.add(this.sprite);

    this.nameTag = scene.add.text(0, -18, name, {
      fontFamily: FONT_FAMILY,
      fontSize: '6px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 2,
    });
    this.nameTag.setOrigin(0.5, 1);
    this.add(this.nameTag);

    this.questIndicator = scene.add.image(0, -26, 'quest_indicator');
    this.questIndicator.setOrigin(0.5, 1);
    this.questIndicator.setVisible(false);
    this.add(this.questIndicator);

    // Bobbing animation for quest indicator
    scene.tweens.add({
      targets: this.questIndicator,
      y: -30,
      duration: 500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    this.setSize(16, 24);
    scene.add.existing(this);
  }

  setQuestActive(active: boolean): void {
    this.hasQuest = active;
    this.questIndicator.setVisible(active);
  }

  isInRange(px: number, py: number): boolean {
    const dist = Phaser.Math.Distance.Between(this.x, this.y, px, py);
    return dist <= INTERACTION_RADIUS;
  }
}
