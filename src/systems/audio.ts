export class AudioManager {
  private static instance: AudioManager;
  private synth: SpeechSynthesis | null = null;
  private russianVoice: SpeechSynthesisVoice | null = null;
  private ready = false;
  private unlocked = false;
  private audioCtx: AudioContext | null = null;

  private constructor() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      this.synth = window.speechSynthesis;
      this.findRussianVoice();
      // Voices may load asynchronously
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.findRussianVoice();
      }
    }
    // Web Audio API for SFX
    try {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch {
      // No Web Audio support
    }
  }

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  private findRussianVoice(): void {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    this.russianVoice =
      voices.find(v => v.lang === 'ru-RU') ??
      voices.find(v => v.lang.startsWith('ru')) ??
      null;
    this.ready = true;
  }

  /**
   * Must be called from a user gesture (click/tap) to unlock
   * both TTS and Web Audio in the browser.
   */
  unlock(): void {
    if (this.unlocked) return;
    this.unlocked = true;

    // Unlock Web Audio
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    // Unlock TTS with a silent utterance
    if (this.synth) {
      const u = new SpeechSynthesisUtterance('');
      u.volume = 0;
      u.lang = 'ru-RU';
      this.synth.speak(u);
    }
  }

  private speak(text: string, rate = 0.8): void {
    if (!this.synth || !text) return;
    // Cancel any ongoing speech
    this.synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    if (this.russianVoice) {
      utterance.voice = this.russianVoice;
    }
    this.synth.speak(utterance);
  }

  speakLetter(letter: string): void {
    this.speak(letter, 0.6);
  }

  speakSyllable(syllable: string): void {
    this.speak(syllable, 0.7);
  }

  speakWord(word: string): void {
    this.speak(word, 0.8);
  }

  speakSentence(sentence: string): void {
    this.speak(sentence, 0.9);
  }

  isReady(): boolean {
    return this.ready;
  }

  // --- SFX via Web Audio API oscillators ---

  private playTone(
    freq: number,
    duration: number,
    type: OscillatorType = 'sine',
    volume = 0.15,
  ): void {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001, this.audioCtx.currentTime + duration,
    );
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + duration);
  }

  /** Short click sound for UI buttons. */
  sfxClick(): void {
    this.playTone(800, 0.08, 'square', 0.06);
  }

  /** Ascending chime when a rune is collected. */
  sfxRuneCollect(): void {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    [523, 659, 784].forEach((freq, i) => {
      const osc = this.audioCtx!.createOscillator();
      const gain = this.audioCtx!.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.12, now + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
      osc.connect(gain);
      gain.connect(this.audioCtx!.destination);
      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.3);
    });
  }

  /** Happy two-tone for correct answers. */
  sfxCorrect(): void {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    [440, 660].forEach((freq, i) => {
      const osc = this.audioCtx!.createOscillator();
      const gain = this.audioCtx!.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.12, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.2);
      osc.connect(gain);
      gain.connect(this.audioCtx!.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.2);
    });
  }

  /** Low buzz for wrong answers. */
  sfxWrong(): void {
    this.playTone(200, 0.25, 'sawtooth', 0.08);
  }

  /** Sparkle sound for letter reveal. */
  sfxReveal(): void {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    [784, 988, 1175, 1319].forEach((freq, i) => {
      const osc = this.audioCtx!.createOscillator();
      const gain = this.audioCtx!.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx!.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.25);
    });
  }
}
