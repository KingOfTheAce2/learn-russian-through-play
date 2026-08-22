import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_6_HOME } from '@/data/scenes/kids/act1_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

export class Act1Scene6 extends StoryScene {
  private masha!: Character;
  private shura!: Character;
  private mama?: Character;

  constructor() {
    super(SCENES.ACT1_SCENE6);
  }

  protected getScript(): SceneScript {
    return SCENE_6_HOME;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0xFFE4B5, 0xFFE4B5, 0xDEB887, 0xDEB887, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const house = this.add.graphics();
    house.fillStyle(0x8B4513);
    house.fillRect(GAME_WIDTH / 2 - 150, 10, 300, 200);
    house.fillStyle(0xDC143C);
    house.fillTriangle(
      GAME_WIDTH / 2 - 180, 10,
      GAME_WIDTH / 2, -90,
      GAME_WIDTH / 2 + 180, 10
    );

    const door = this.add.graphics();
    door.fillStyle(0x654321);
    door.fillRect(GAME_WIDTH / 2 - 40, 140, 80, 70);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH / 2 - 100,
      y: 240,
      scale: 1.5,
      emotion: 'excited',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH / 2 + 100,
      y: 240,
      scale: 1.5,
      emotion: 'excited',
    });

    this.addCharacter('masha', this.masha);
    this.addCharacter('shura', this.shura);
  }

  protected createHotspots(): void {}

  protected playStage(stage: import('@/data/scenes/types').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'masha_sings':
        this.unlockDoor();
        break;
      case 'door_opens':
        this.openDoor();
        break;
      case 'mama_speaks':
        this.introduceMama();
        break;
    }
  }

  private unlockDoor(): void {
    const centerX = GAME_WIDTH / 2;
    const centerY = GAME_HEIGHT / 2 - 100;

    const letters = ['Ð', 'Ð', 'Ð¨', 'Ð'];
    
    letters.forEach((letter, i) => {
      const text = this.add.text(centerX - 80 + i * 50, centerY, letter, {
        fontFamily: '"Press Start 2P"',
        fontSize: '32px',
        color: '#ffd700',
      });
      text.setOrigin(0.5);
      text.setScale(0);

      this.tweens.add({
        targets: text,
        scale: 1,
        delay: i * 200,
        duration: 400,
        ease: 'Back.easeOut',
      });
    });

    this.audioManager.sfxReveal();
    this.time.delayedCall(2000, () => this.advanceStage());
  }

  private openDoor(): void {
    this.cameras.main.flash(500, 255, 255, 200);
    this.audioManager.sfxCorrect();
    this.time.delayedCall(1000, () => this.advanceStage());
  }

  private introduceMama(): void {
    this.mama = new Character(this, {
      name: 'mama',
      x: GAME_WIDTH / 2,
      y: 180,
      scale: 1.8,
      emotion: 'happy',
    });

    this.addCharacter('mama', this.mama);
    
    this.mama.setAlpha(0);
    this.tweens.add({
      targets: this.mama,
      alpha: 1,
      duration: 1000,
    });

    this.time.delayedCall(1500, () => {
      this.masha?.setEmotion('happy');
      this.shura?.setEmotion('happy');
      this.advanceStage();
    });
  }

  protected playAmbientAudio(): void {
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const melody = ctx.createOscillator();
      const gain = ctx.createGain();
      melody.type = 'sine';
      melody.frequency.value = 523.25;
      gain.gain.value = 0.02;
      melody.connect(gain);
      gain.connect(ctx.destination);
      melody.start();

      this.events.on('shutdown', () => {
        melody.stop();
      });
    }
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(1000);
    this.time.delayedCall(1000, () => {
      this.scene.start(SCENES.ACT2_SCENE1);
    });
  }
}
