import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_2_CALLING } from '@/data/scenes/kids/act1_story_script';
import { Character } from '@/game/sprites/Character';
import { LetterParticle } from '@/game/sprites/LetterParticle';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';
import { startScene } from '@/systems/sceneLoader';

/**
 * Act 1, Scene 2: "Calling for Help"
 * Letter: Ð£
 *
 * Story: ÐœÐ°ÑˆÐ° calls out "ÐÑƒ! ÐÑƒ!" trying to find Ð¨ÑƒÑ€Ð°.
 * Trees echo back. A baby bird cries "Ð£Ð°!". First syllables formed: ÐÐ£ and Ð£Ð.
 */
export class Act1Scene2 extends StoryScene {
  private masha!: Character;
  private collectedCount = 0;
  private readonly TOTAL_LETTERS = 5;
  private clickableTreesCreated = false;

  constructor() {
    super(SCENES.ACT1_SCENE2);
  }

  protected getScript(): SceneScript {
    return SCENE_2_CALLING;
  }

  protected createBackground(): void {
    // Forest clearing, more visible than Scene 1
    const bg = this.add.graphics();
    const PICTURE_HEIGHT = 360;

    // Lighter forest (fog is lifting)
    bg.fillGradientStyle(0x2a5d3a, 0x2a5d3a, 0x4a7c4f, 0x4a7c4f, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);

    // Trees with interactive spots
    this.createInteractiveTrees();

    this.background = bg;
  }

  private createInteractiveTrees(): void {
    const treePositions = [
      { x: 150, y: 280, scale: 1.3 },
      { x: 350, y: 300, scale: 1.1 },
      { x: 550, y: 260, scale: 1.5 },
      { x: 700, y: 290, scale: 1.2 },
    ];

    treePositions.forEach((pos, index) => {
      const tree = this.add.graphics();
      tree.fillStyle(0x0d2818, 0.9);

      const height = 160 * pos.scale;
      const width = 70 * pos.scale;

      tree.fillTriangle(
        0, -height,
        -width / 2, 0,
        width / 2, 0
      );

      tree.fillRect(-12 * pos.scale, 0, 24 * pos.scale, 45 * pos.scale);
      tree.setPosition(pos.x, pos.y);
      tree.setData('treeIndex', index);
    });
  }

  protected createCharacters(): void {
    // Masha appears center, looking around
    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH / 2,
      y: 280,
      scale: 1.5,
      emotion: 'determined',
    });

    this.addCharacter('masha', this.masha);
  }

  protected createHotspots(): void {
    // Hotspots for trees will be created when needed
  }

  protected playStage(stage: import('@/data/scenes/types').SceneStage): void {
    super.playStage(stage);

    switch (stage.id) {
      case 'masha_calls':
        this.createTreeHotspots();
        break;

      case 'combine_sounds':
        this.spawnSyllableActivity();
        break;
    }
  }

  private createTreeHotspots(): void {
    if (this.clickableTreesCreated) return;
    this.clickableTreesCreated = true;

    const positions = [
      { x: 150, y: 210 },
      { x: 350, y: 220 },
      { x: 550, y: 200 },
      { x: 700, y: 215 },
    ];

    positions.forEach((pos, i) => {
      const hotspot = this.addHotspot(`tree_${i}`, {
        x: pos.x,
        y: pos.y,
        shape: 'circle',
        radius: 50,
        id: `tree_${i}`,
        visualFeedback: true,
        onClick: () => this.onTreeClick(pos.x, pos.y),
      });
    });

    // Show instruction
    const inst = this.add.text(
      GAME_WIDTH / 2,
      80,
      'Click the trees to hear the Ð£ sound!\n(This is the Russian letter U)',
      {
        fontFamily: 'Arial',
        fontSize: '14px',
        color: '#ffd700',
        stroke: '#000000',
        strokeThickness: 3,
        align: 'center',
      }
    );
    inst.setOrigin(0.5);

    this.time.delayedCall(4000, () => {
      this.tweens.add({
        targets: inst,
        alpha: 0,
        duration: 500,
        onComplete: () => inst.destroy(),
      });
    });
  }

  private onTreeClick(x: number, y: number): void {
    // Tree responds with Ð£ sound
    this.playTreeEcho(x, y);

    // Spawn Ð£ particle
    const particle = new LetterParticle(this, {
      x,
      y: y - 50,
      letter: 'Ð£',
      interactive: true,
      onCollect: () => this.onLetterCollected(),
    });

    this.letterParticles.push(particle);
  }

  private playTreeEcho(x: number, y: number): void {
    // Visual feedback - ripple
    const ripple = this.add.circle(x, y - 50, 10, 0xffffff, 0.5);

    this.tweens.add({
      targets: ripple,
      radius: 60,
      alpha: 0,
      duration: 800,
      onComplete: () => ripple.destroy(),
    });

    // Audio: Ð£ sound (lower pitch than Ð)
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 349.23; // F4 (lower than Ð)
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    }
  }

  private onLetterCollected(): void {
    this.collectedCount++;
    this.audioManager.sfxRuneCollect();

    if (this.collectedCount >= this.TOTAL_LETTERS) {
      this.time.delayedCall(500, () => {
        this.advanceStage();
      });
    }
  }

  private spawnSyllableActivity(): void {
    // Show ÐÐ£ and Ð£Ð syllables forming
    const centerX = GAME_WIDTH / 2;
    const centerY = GAME_HEIGHT / 2;

    // ÐÐ£ on left
    this.time.delayedCall(500, () => {
      const au = this.add.text(centerX - 100, centerY, 'ÐÐ£', {
        fontFamily: '"Press Start 2P"',
        fontSize: '48px',
        color: '#ffd700',
      });
      au.setOrigin(0.5);
      au.setAlpha(0);
      au.setScale(0);

      this.tweens.add({
        targets: au,
        alpha: 1,
        scale: 1,
        duration: 600,
        ease: 'Back.easeOut',
      });

      this.audioManager.sfxCorrect();
    });

    // Ð£Ð on right
    this.time.delayedCall(1200, () => {
      const ua = this.add.text(centerX + 100, centerY, 'Ð£Ð', {
        fontFamily: '"Press Start 2P"',
        fontSize: '48px',
        color: '#ffd700',
      });
      ua.setOrigin(0.5);
      ua.setAlpha(0);
      ua.setScale(0);

      this.tweens.add({
        targets: ua,
        alpha: 1,
        scale: 1,
        duration: 600,
        ease: 'Back.easeOut',
      });

      this.audioManager.sfxCorrect();

      // Auto-advance after showing syllables
      this.time.delayedCall(2000, () => {
        this.advanceStage();
      });
    });
  }

  protected playAmbientAudio(): void {
    // Forest with bird sounds
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];

      const drone = ctx.createOscillator();
      const gain = ctx.createGain();
      drone.type = 'sine';
      drone.frequency.value = 73.42; // D2
      gain.gain.value = 0.02;
      drone.connect(gain);
      gain.connect(ctx.destination);
      drone.start();

      this.events.on('shutdown', () => {
        drone.stop();
      });
    }
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500, 0, 0, 0);
    this.time.delayedCall(500, () => {
      startScene(this, SCENES.ACT1_SCENE3);
    });
  }
}
