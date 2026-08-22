import Phaser from 'phaser';

export type CharacterName = 'masha' | 'shura' | 'mama';
export type Emotion = 'neutral' | 'happy' | 'scared' | 'excited' | 'worried' | 'relieved' | 'determined' | 'curious';

export interface CharacterConfig {
  name: CharacterName;
  x: number;
  y: number;
  scale?: number;
  emotion?: Emotion;
}

/**
 * Character - Animated character sprite with emotion system
 * Masha and Shura with personality and emotional expressions
 */
export class Character extends Phaser.GameObjects.Container {
  private characterName: CharacterName;
  private currentEmotion: Emotion;
  private sprite: Phaser.GameObjects.Graphics;
  private speechBubble?: Phaser.GameObjects.Container;
  private voicePitch: number;

  // Character-specific colors
  private static readonly COLORS = {
    masha: {
      dress: 0xff6b9d,
      hair: 0x8b4513,
      skin: 0xffd1a3,
    },
    shura: {
      shirt: 0x4a90e2,
      pants: 0x2c5f8d,
      hair: 0x654321,
      skin: 0xffd1a3,
    },
    mama: {
      dress: 0x9b59b6,
      apron: 0xffffff,
      hair: 0x654321,
      skin: 0xffd1a3,
    },
  };

  constructor(scene: Phaser.Scene, config: CharacterConfig) {
    super(scene, config.x, config.y);

    this.characterName = config.name;
    this.currentEmotion = config.emotion || 'neutral';

    // Voice characteristics
    this.voicePitch = this.getVoicePitch();

    // Create sprite
    this.sprite = scene.add.graphics();
    this.add(this.sprite);

    this.drawCharacter();

    if (config.scale) {
      this.setScale(config.scale);
    }

    scene.add.existing(this);
  }

  private getVoicePitch(): number {
    switch (this.characterName) {
      case 'masha':
        return 1.2; // Higher pitch
      case 'shura':
        return 0.9; // Lower pitch
      case 'mama':
        return 1.0; // Normal pitch
    }
  }

  private drawCharacter(): void {
    this.sprite.clear();

    switch (this.characterName) {
      case 'masha':
        this.drawMasha();
        break;
      case 'shura':
        this.drawShura();
        break;
      case 'mama':
        this.drawMama();
        break;
    }
  }

  private drawMasha(): void {
    const colors = Character.COLORS.masha;

    // Body (dress)
    this.sprite.fillStyle(colors.dress);
    this.sprite.fillRect(-20, 0, 40, 60);

    // Head (skin)
    this.sprite.fillStyle(colors.skin);
    this.sprite.fillCircle(0, -20, 20);

    // Hair (brown)
    this.sprite.fillStyle(colors.hair);
    this.sprite.fillEllipse(0, -30, 30, 20);
    // Pigtails
    this.sprite.fillCircle(-20, -15, 8);
    this.sprite.fillCircle(20, -15, 8);

    // Face based on emotion
    this.drawFace(0, -20);

    // Arms
    this.sprite.fillStyle(colors.skin);
    this.sprite.fillRect(-25, 10, 8, 30);
    this.sprite.fillRect(17, 10, 8, 30);
  }

  private drawShura(): void {
    const colors = Character.COLORS.shura;

    // Body (shirt)
    this.sprite.fillStyle(colors.shirt);
    this.sprite.fillRect(-18, 0, 36, 35);

    // Pants
    this.sprite.fillStyle(colors.pants);
    this.sprite.fillRect(-18, 35, 16, 25);
    this.sprite.fillRect(2, 35, 16, 25);

    // Head (skin)
    this.sprite.fillStyle(colors.skin);
    this.sprite.fillCircle(0, -20, 18);

    // Hair (short, brown)
    this.sprite.fillStyle(colors.hair);
    this.sprite.fillEllipse(0, -30, 25, 15);

    // Face based on emotion
    this.drawFace(0, -20);

    // Arms
    this.sprite.fillStyle(colors.skin);
    this.sprite.fillRect(-23, 5, 7, 25);
    this.sprite.fillRect(16, 5, 7, 25);
  }

  private drawMama(): void {
    const colors = Character.COLORS.mama;

    // Body (dress)
    this.sprite.fillStyle(colors.dress);
    this.sprite.fillRect(-25, 0, 50, 70);

    // Apron
    this.sprite.fillStyle(colors.apron);
    this.sprite.fillRect(-20, 10, 40, 50);

    // Head (skin)
    this.sprite.fillStyle(colors.skin);
    this.sprite.fillCircle(0, -25, 22);

    // Hair (bun)
    this.sprite.fillStyle(colors.hair);
    this.sprite.fillEllipse(0, -35, 30, 20);
    this.sprite.fillCircle(0, -45, 10);

    // Face
    this.drawFace(0, -25);

    // Arms
    this.sprite.fillStyle(colors.skin);
    this.sprite.fillRect(-30, 15, 8, 35);
    this.sprite.fillRect(22, 15, 8, 35);
  }

  private drawFace(centerX: number, centerY: number): void {
    const skin = Character.COLORS[this.characterName].skin;

    // Eyebrows (drawn before eyes so eyes render on top)
    this.sprite.lineStyle(2, 0x4a2800, 1);
    switch (this.currentEmotion) {
      case 'worried':
      case 'scared':
        // Raised inner corners — furrowed look
        this.sprite.lineBetween(centerX - 13, centerY - 12, centerX - 5, centerY - 14);
        this.sprite.lineBetween(centerX + 5,  centerY - 14, centerX + 13, centerY - 12);
        break;
      case 'determined':
        // Low flat brows — intense
        this.sprite.lineBetween(centerX - 13, centerY - 10, centerX - 5, centerY - 10);
        this.sprite.lineBetween(centerX + 5,  centerY - 10, centerX + 13, centerY - 10);
        break;
      default:
        // Relaxed arched brows
        this.sprite.lineBetween(centerX - 13, centerY - 13, centerX - 5, centerY - 15);
        this.sprite.lineBetween(centerX + 5,  centerY - 15, centerX + 13, centerY - 13);
        break;
    }

    // Rosy cheeks for happy/excited/relieved emotions
    if (['happy', 'excited', 'relieved'].includes(this.currentEmotion)) {
      this.sprite.fillStyle(0xffaaaa, 0.45);
      this.sprite.fillCircle(centerX - 13, centerY + 4, 6);
      this.sprite.fillCircle(centerX + 13, centerY + 4, 6);
    }

    // Eyes
    this.sprite.fillStyle(0x000000);

    switch (this.currentEmotion) {
      case 'happy':
      case 'excited':
      case 'relieved':
        // Smiling eyes (curved)
        this.sprite.fillEllipse(centerX - 8, centerY - 3, 8, 10);
        this.sprite.fillEllipse(centerX + 8, centerY - 3, 8, 10);
        // Hide top half to create crescent/squint
        this.sprite.fillStyle(skin);
        this.sprite.fillRect(centerX - 12, centerY - 8, 24, 4);
        this.sprite.fillStyle(0x000000);
        break;

      case 'scared':
      case 'worried':
        // Wide eyes
        this.sprite.fillCircle(centerX - 8, centerY - 3, 5);
        this.sprite.fillCircle(centerX + 8, centerY - 3, 5);
        break;

      case 'determined':
      case 'curious':
        // Focused eyes (slightly narrowed)
        this.sprite.fillEllipse(centerX - 8, centerY - 3, 7, 6);
        this.sprite.fillEllipse(centerX + 8, centerY - 3, 7, 6);
        break;

      default: // neutral
        // Normal round eyes
        this.sprite.fillCircle(centerX - 8, centerY - 3, 4);
        this.sprite.fillCircle(centerX + 8, centerY - 3, 4);
        break;
    }

    // Mouth
    this.sprite.lineStyle(2, 0x000000);

    switch (this.currentEmotion) {
      case 'happy':
      case 'excited':
      case 'relieved':
        // Smile
        this.sprite.beginPath();
        this.sprite.arc(centerX, centerY + 5, 8, 0, Math.PI, false);
        this.sprite.strokePath();
        break;

      case 'scared':
      case 'worried':
        // Open mouth (O shape)
        this.sprite.strokeCircle(centerX, centerY + 8, 5);
        break;

      case 'determined':
        // Serious line
        this.sprite.lineBetween(centerX - 6, centerY + 8, centerX + 6, centerY + 8);
        break;

      case 'curious':
        // Small O
        this.sprite.strokeCircle(centerX, centerY + 8, 3);
        break;

      default: // neutral
        // Slight smile
        this.sprite.beginPath();
        this.sprite.arc(centerX, centerY + 5, 6, 0.2, Math.PI - 0.2, false);
        this.sprite.strokePath();
        break;
    }
  }

  setEmotion(emotion: Emotion): void {
    this.currentEmotion = emotion;
    this.drawCharacter();
    this.playEmotionAnimation(emotion);
  }

  private playEmotionAnimation(emotion: Emotion): void {
    switch (emotion) {
      case 'happy':
      case 'excited':
        // Bounce
        this.scene.tweens.add({
          targets: this,
          y: this.y - 10,
          duration: 200,
          yoyo: true,
          ease: 'Bounce.easeOut',
        });
        break;

      case 'scared':
      case 'worried':
        // Shake
        this.scene.tweens.add({
          targets: this,
          x: this.x - 3,
          duration: 50,
          yoyo: true,
          repeat: 3,
          ease: 'Sine.easeInOut',
        });
        break;

      case 'relieved':
        // Gentle sway
        this.scene.tweens.add({
          targets: this,
          angle: -5,
          duration: 300,
          yoyo: true,
          ease: 'Sine.easeInOut',
        });
        break;

      case 'curious':
        // Lean forward
        this.scene.tweens.add({
          targets: this,
          scaleX: 1.05,
          duration: 300,
          yoyo: true,
          ease: 'Sine.easeInOut',
        });
        break;
    }
  }

  speak(text: string, duration: number = 2000): void {
    if (this.speechBubble) {
      this.speechBubble.destroy();
    }

    // Create speech bubble
    const bubbleWidth = Math.min(200, text.length * 8 + 20);
    const bubbleHeight = 50;

    const bubble = this.scene.add.container(0, -100);

    // Bubble background
    const bg = this.scene.add.graphics();
    bg.fillStyle(0xffffff, 0.95);
    bg.fillRoundedRect(-bubbleWidth / 2, -bubbleHeight / 2, bubbleWidth, bubbleHeight, 10);
    bg.lineStyle(2, 0x000000, 1);
    bg.strokeRoundedRect(-bubbleWidth / 2, -bubbleHeight / 2, bubbleWidth, bubbleHeight, 10);

    // Tail
    bg.fillTriangle(-10, bubbleHeight / 2, 10, bubbleHeight / 2, 0, bubbleHeight / 2 + 15);
    bg.lineStyle(2, 0x000000, 1);
    bg.strokeTriangle(-10, bubbleHeight / 2, 10, bubbleHeight / 2, 0, bubbleHeight / 2 + 15);

    bubble.add(bg);

    // Text
    const textObj = this.scene.add.text(0, 0, text, {
      fontSize: '14px',
      color: '#000000',
      align: 'center',
      wordWrap: { width: bubbleWidth - 20 },
    });
    textObj.setOrigin(0.5);
    bubble.add(textObj);

    this.add(bubble);
    this.speechBubble = bubble;

    // Fade in
    bubble.setAlpha(0);
    this.scene.tweens.add({
      targets: bubble,
      alpha: 1,
      duration: 200,
    });

    // Auto-hide
    this.scene.time.delayedCall(duration, () => {
      if (this.speechBubble === bubble) {
        this.scene.tweens.add({
          targets: bubble,
          alpha: 0,
          duration: 200,
          onComplete: () => bubble.destroy(),
        });
        this.speechBubble = undefined;
      }
    });
  }

  hideSpeech(): void {
    if (this.speechBubble) {
      this.speechBubble.destroy();
      this.speechBubble = undefined;
    }
  }

  getVoicePitchValue(): number {
    return this.voicePitch;
  }
}
