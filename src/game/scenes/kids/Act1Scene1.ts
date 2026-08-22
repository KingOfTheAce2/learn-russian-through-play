import { StoryScene } from '../StoryScene';
import { SceneScript, SCENE_1_THE_ECHO } from '@/data/scenes/kids/act1_story_script';
import { Character } from '@/game/sprites/Character';
import { LetterParticle } from '@/game/sprites/LetterParticle';
import { GAME_WIDTH, GAME_HEIGHT, SCENES } from '@/game/config';

/**
 * Act 1, Scene 1: "The Echo"
 * Letter: Ð
 *
 * Story: ÐœÐ°ÑˆÐ° and Ð¨ÑƒÑ€Ð° are gathering berries when fog separates them.
 * Masha is scared and shouts "Ð-Ð°-Ð°!" into the mist. The echo reveals the letter Ð.
 */
export class Act1Scene1 extends StoryScene {
  private masha!: Character;
  private collectedCount = 0;
  private readonly TOTAL_LETTERS = 3; // Reduced from 5 - less tedious

  constructor() {
    super(SCENES.ACT1_SCENE1);
  }

  protected getScript(): SceneScript {
    return SCENE_1_THE_ECHO;
  }

  protected createBackground(): void {
    // Illustrated forest with fog
    // IMPORTANT: Only fill picture area (0-360), not the entire screen!
    const PICTURE_HEIGHT = 360;

    const bg = this.add.graphics();

    // Dark forest bottom
    bg.fillGradientStyle(0x1a4d2e, 0x1a4d2e, 0x4a4a4a, 0x4a4a4a, 1);
    bg.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT);
    bg.setDepth(0);

    // Fog overlay
    const fog = this.add.graphics();
    fog.fillStyle(0xcccccc, 0.3);
    fog.fillRect(0, 0, GAME_WIDTH, PICTURE_HEIGHT / 2);
    fog.setDepth(1);

    // Animated fog movement
    this.tweens.add({
      targets: fog,
      alpha: 0.5,
      duration: 3000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    // Trees silhouettes (simple shapes)
    this.createTreeSilhouettes();

    this.background = bg;
  }

  private createTreeSilhouettes(): void {
    // Position trees in picture area (y < 360)
    const treePositions = [
      { x: 100, y: 280, scale: 1.2 },
      { x: 300, y: 300, scale: 0.9 },
      { x: 500, y: 260, scale: 1.4 },
      { x: 700, y: 290, scale: 1.0 },
    ];

    treePositions.forEach((pos) => {
      const tree = this.add.graphics();
      tree.fillStyle(0x0d2818, 0.8);

      // Simple triangle tree shape
      const height = 150 * pos.scale;
      const width = 60 * pos.scale;

      tree.fillTriangle(
        0, -height,
        -width / 2, 0,
        width / 2, 0
      );

      // Trunk
      tree.fillRect(-10 * pos.scale, 0, 20 * pos.scale, 40 * pos.scale);

      tree.setPosition(pos.x, pos.y);
    });
  }

  protected createCharacters(): void {
    // Masha appears center-left, looking worried
    // Position in picture area (0-360)
    this.masha = new Character(this, {
      name: 'masha',
      x: GAME_WIDTH / 3,
      y: 280,
      scale: 1.5,
      emotion: 'worried',
    });

    this.addCharacter('masha', this.masha);
  }

  protected createHotspots(): void {
    // Hotspot: Click on Masha to trigger her shout
    const mashaHotspot = this.addHotspot('masha_click', {
      x: GAME_WIDTH / 3,
      y: 280,
      shape: 'circle',
      radius: 60,
      id: 'masha',
      visualFeedback: true,
      onClick: () => this.onMashaClick(),
      debugDraw: false, // Set to true to see hitboxes
    });

    // Initially disabled - will enable when stage requires it
    mashaHotspot.disable();
  }

  protected playStage(stage: import('@/data/scenes/types').SceneStage): void {
    super.playStage(stage);

    // Custom stage handling
    switch (stage.id) {
      case 'masha_scared':
        // Enable clicking on Masha
        this.hotspots.get('masha_click')?.enable();
        break;

      case 'echo_appears':
        // Spawn letter Ð particles
        this.spawnLetterParticles();
        break;
    }
  }

  private onMashaClick(): void {
    // Masha shouts!
    this.masha.setEmotion('scared');
    this.masha.speak('Ð-Ð°-Ð°! Ð¨ÑƒÑ€Ð°! Ð“Ð´Ðµ Ñ‚Ñ‹?', 2000);

    // Play scream sound (pitched tone)
    this.playScreamSound();

    // Disable hotspot after use
    this.hotspots.get('masha_click')?.disable();

    // Advance after delay
    this.time.delayedCall(2500, () => {
      this.advanceStage();
    });
  }

  private playScreamSound(): void {
    // High-pitched crescendo representing fear
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.5); // A5

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    }
  }

  private spawnLetterParticles(): void {
    // Create 5 glowing Ð particles in the fog (picture area)
    const centerX = GAME_WIDTH / 2;
    const centerY = 180;

    this.letterParticles = LetterParticle.createCirclePattern(
      this,
      centerX,
      centerY,
      'Ð',
      this.TOTAL_LETTERS,
      120,
      () => this.onLetterCollected()
    );

    // Add instruction text (very clear for beginners)
    const instruction = this.add.text(
      centerX,
      centerY - 150,
      'Click each glowing Ð to collect it!\n(This is the Russian letter A)',
      {
        fontFamily: 'Arial',
        fontSize: '16px',
        color: '#ffd700',
        stroke: '#000000',
        strokeThickness: 4,
        align: 'center',
      }
    );
    instruction.setOrigin(0.5);
    instruction.setAlpha(0);

    this.tweens.add({
      targets: instruction,
      alpha: 1,
      duration: 500,
    });

    // Auto-fade out after 3 seconds
    this.time.delayedCall(3000, () => {
      this.tweens.add({
        targets: instruction,
        alpha: 0,
        duration: 500,
        onComplete: () => instruction.destroy(),
      });
    });
  }

  private onLetterCollected(): void {
    this.collectedCount++;
    this.audioManager.sfxRuneCollect();

    if (this.collectedCount >= this.TOTAL_LETTERS) {
      // All letters collected!
      this.time.delayedCall(500, () => {
        this.onAllLettersCollected();
      });
    }
  }

  private onAllLettersCollected(): void {
    // Masha realizes what happened
    this.masha.setEmotion('curious');
    this.masha.speak('Ð! Ð­Ñ‚Ð¾ Ð±ÑƒÐºÐ²Ð° Ð! ÐšÐ¾Ð³Ð´Ð° Ñ Ð¸ÑÐ¿ÑƒÐ³Ð°Ð»Ð°ÑÑŒ, Ñ ÐºÑ€Ð¸Ñ‡Ð°Ð»Ð°: Ð-Ð°-Ð°!', 3000);

    // Show discovery
    this.time.delayedCall(3500, () => {
      this.advanceStage();
    });
  }

  protected playAmbientAudio(): void {
    // Mysterious forest drone
    if (this.audioManager['audioCtx']) {
      const ctx = this.audioManager['audioCtx'];

      // Low drone
      const drone1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      drone1.type = 'sine';
      drone1.frequency.value = 55; // A1
      gain1.gain.value = 0.02;
      drone1.connect(gain1);
      gain1.connect(ctx.destination);
      drone1.start();

      // Higher harmonic
      const drone2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      drone2.type = 'sine';
      drone2.frequency.value = 110; // A2
      gain2.gain.value = 0.015;
      drone2.connect(gain2);
      gain2.connect(ctx.destination);
      drone2.start();

      // Stop when scene ends
      this.events.on('shutdown', () => {
        drone1.stop();
        drone2.stop();
      });
    }
  }

  protected transitionToNextScene(): void {
    this.cameras.main.fadeOut(500, 0, 0, 0);
    this.time.delayedCall(500, () => {
      // Next: Scene 2 (Letter Ð£)
      this.scene.start(SCENES.ACT1_SCENE2);
    });
  }
}
