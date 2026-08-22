import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_5_NAMES } from '@/data/scenes/kids/act2_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

export class Act2Scene5 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private sasha!: Character;

  constructor() {
    super(SCENES.ACT2_SCENE5);
  }

  protected getScript(): SceneScript {
    return SCENE_5_NAMES;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0x87CEEB, 0x87CEEB, 0x90EE90, 0x90EE90, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const grass = this.add.graphics();
    grass.fillStyle(0x228B22);
    grass.fillRect(0, 260, GAME_WIDTH, 100);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.masha = new Character(this, {
      name: 'masha',
      x: 180,
      y: 260,
      scale: 1.5,
      emotion: 'curious',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH / 2,
      y: 260,
      scale: 1.5,
      emotion: 'excited',
    });

    this.sasha = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH - 180,
      y: 260,
      scale: 1.5,
      emotion: 'happy',
    });

    this.addCharacter('masha', this.masha);
    this.addCharacter('shura', this.shura);
    this.addCharacter('sasha', this.sasha);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/kids/act2_story_script').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'sasha_replies':
        this.showNames();
        break;
      case 'soft_sounds':
        this.showSoftPairs();
        break;
    }
  }

  private showNames(): void {
    const names = ['МИ-ЛА', 'НИ-НА', 'СИ-МА'];
    const y = GAME_HEIGHT / 2 - 100;

    names.forEach((name, i) => {
      const text = this.add.text(GAME_WIDTH / 2, y + i * 60, name, {
        fontFamily: '"Press Start 2P"',
        fontSize: '28px',
        color: '#4a90e2',
      });
      text.setOrigin(0.5);
      text.setAlpha(0);

      this.tweens.add({
        targets: text,
        alpha: 1,
        scale: { from: 0.5, to: 1 },
        delay: i * 400,
        duration: 400,
        ease: 'Back.easeOut',
      });
    });

    this.playISound();
    this.time.delayedCall(2500, () => this.advanceStage());
  }

  private playISound(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 800;
      gain.gain.value = 0.08;

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    }
  }

  private showSoftPairs(): void {
    const pairs = [
      { hard: 'МА', soft: 'МИ' },
      { hard: 'РА', soft: 'РИ' },
      { hard: 'НА', soft: 'НИ' },
    ];

    const startY = GAME_HEIGHT / 2 - 80;

    pairs.forEach((pair, i) => {
      const y = startY + i * 70;

      const hardText = this.add.text(200, y, pair.hard, {
        fontFamily: '"Press Start 2P"',
        fontSize: '32px',
        color: '#666666',
      });
      hardText.setOrigin(0.5);

      const arrow = this.add.text(GAME_WIDTH / 2, y, '→', {
        fontFamily: 'Arial',
        fontSize: '32px',
        color: '#999999',
      });
      arrow.setOrigin(0.5);

      const softText = this.add.text(GAME_WIDTH - 200, y, pair.soft, {
        fontFamily: '"Press Start 2P"',
        fontSize: '32px',
        color: '#4a90e2',
      });
      softText.setOrigin(0.5);
      softText.setAlpha(0);

      this.tweens.add({
        targets: softText,
        alpha: 1,
        delay: i * 500,
        duration: 400,
      });
    });

    this.audioManager.sfxReveal();
    this.time.delayedCall(2500, () => this.advanceStage());
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      this.scene.start(SCENES.ACT2_SCENE6);
    });
  }
}
