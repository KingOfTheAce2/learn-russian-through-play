import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_4_HAT } from '@/data/scenes/kids/act1_story_script';
import { Character } from '@/game/sprites/Character';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

export class Act1Scene4 extends StoryScene {
  private masha!: Character;
  private shura!: Character;

  constructor() {
    super(SCENES.ACT1_SCENE4);
  }

  protected getScript(): SceneScript {
    return SCENE_4_HAT;
  }

  protected createBackground(): void {
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;
    bg.fillGradientStyle(0x87CEEB, 0x87CEEB, 0x90EE90, 0x90EE90, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    const tree = this.add.graphics();
    tree.fillStyle(0x8B4513);
    tree.fillRect(GAME_WIDTH / 2 - 20, 10, 40, 250);
    tree.fillStyle(0x228B22);
    tree.fillCircle(GAME_WIDTH / 2, 0, 100);

    this.background = bg;
  }

  protected createCharacters(): void {
    this.masha = new Character(this, {
      name: 'masha',
      x: 250,
      y: 300,
      scale: 1.5,
      emotion: 'excited',
    });

    this.shura = new Character(this, {
      name: 'shura',
      x: GAME_WIDTH - 250,
      y: 300,
      scale: 1.5,
      emotion: 'determined',
    });

    this.addCharacter('masha', this.masha);
    this.addCharacter('shura', this.shura);
  }

  protected createHotspots(): void {
    // No hotspots - animation driven
  }

  protected playStage(stage: import('@/data/scenes/types').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'hat_rustles':
        this.animateHat();
        break;
      case 'shura_climbs':
        this.shuraClimbs();
        break;
      case 'names_revealed':
        this.showNames();
        break;
    }
  }

  private animateHat(): void {
    const hat = this.add.graphics();
    hat.fillStyle(0xff6b9d);
    hat.fillEllipse(GAME_WIDTH / 2, 50, 50, 20);
    
    this.tweens.add({
      targets: hat,
      x: '+=10',
      duration: 200,
      yoyo: true,
      repeat: 5,
    });

    this.time.delayedCall(2000, () => this.advanceStage());
  }

  private shuraClimbs(): void {
    this.tweens.add({
      targets: this.shura,
      y: 100,
      duration: 1500,
      ease: 'Quad.easeInOut',
    });

    this.time.delayedCall(2000, () => this.advanceStage());
  }

  private showNames(): void {
    const centerY = GAME_HEIGHT / 2;
    
    const masha = this.add.text(GAME_WIDTH / 2 - 100, centerY, 'ÐœÐ-Ð¨Ð', {
      fontFamily: '"Press Start 2P"',
      fontSize: '40px',
      color: '#ff6b9d',
    });
    masha.setOrigin(0.5);
    masha.setAlpha(0);

    const shura = this.add.text(GAME_WIDTH / 2 + 100, centerY, 'Ð¨Ð£-Ð Ð', {
      fontFamily: '"Press Start 2P"',
      fontSize: '40px',
      color: '#4a90e2',
    });
    shura.setOrigin(0.5);
    shura.setAlpha(0);

    this.tweens.add({
      targets: [masha, shura],
      alpha: 1,
      duration: 1000,
    });

    this.audioManager.sfxReveal();
    this.time.delayedCall(2500, () => this.advanceStage());
  }

  protected playAmbientAudio(): void {}

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500);
    this.time.delayedCall(500, () => {
      startScene(this, SCENES.ACT1_SCENE5);
    });
  }
}
