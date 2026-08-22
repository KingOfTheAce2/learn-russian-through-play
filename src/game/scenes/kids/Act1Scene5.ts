import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_5_BRIDGE } from '@/data/scenes/kids/act1_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

export class Act1Scene5 extends StoryScene {
  private masha!: Character;
  private shura!: Character;

  constructor() {
    super(SCENES.ACT1_SCENE5);
  }

  protected getScript(): SceneScript {
    return SCENE_5_BRIDGE;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0x87CEEB, 0x87CEEB, 0x90EE90, 0x90EE90, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const stream = this.add.graphics();
    stream.fillStyle(0x4169E1, 0.7);
    stream.fillRect(0, 210, GAME_WIDTH, 80);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.masha = new Character(this, {
      name: 'masha',
      x: 200,
      y: 280,
      scale: 1.5,
      emotion: 'curious',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: 350,
      y: 280,
      scale: 1.5,
      emotion: 'curious',
    });

    this.addCharacter('masha', this.masha);
    this.addCharacter('shura', this.shura);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/types').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'examine_planks':
        this.showPlanks();
        break;
      case 'masha_trills':
        this.playRSound();
        break;
      case 'cross_bridge':
        this.crossBridge();
        break;
    }
  }

  private showPlanks(): void {
    const words = ['Ð ÐÐœÐ', 'ÐœÐÐ Ð', 'ÐœÐÐ¨Ð', 'Ð¨Ð£Ð Ð'];
    const y = 230;
    
    words.forEach((word, i) => {
      const plank = this.add.rectangle(150 + i * 150, y, 120, 40, 0x8B4513);
      plank.setStrokeStyle(2, 0x000000);
      
      const text = this.add.text(150 + i * 150, y, word, {
        fontFamily: 'Arial',
        fontSize: '16px',
        color: '#000000',
      });
      text.setOrigin(0.5);
    });

    this.time.delayedCall(2000, () => this.advanceStage());
  }

  private playRSound(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.value = 80;
      gain.gain.value = 0.1;
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }

    this.time.delayedCall(1500, () => this.advanceStage());
  }

  private crossBridge(): void {
    this.tweens.add({
      targets: [this.masha, this.shura],
      x: '+=400',
      duration: 2000,
      ease: 'Linear',
    });

    this.time.delayedCall(2500, () => this.advanceStage());
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      startScene(this, SCENES.ACT1_SCENE6);
    });
  }
}
