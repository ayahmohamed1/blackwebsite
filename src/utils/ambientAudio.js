/**
 * Ambient Soft Music Synthesizer (Zero-dependency Web Audio API)
 * Creates a soothing, cinematic ambient soundscape for the birthday experience.
 */
class AmbientSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.gainNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);
  }

  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.isPlaying) return;

    this.isPlaying = true;
    
    // Chord frequencies: Warm, dreamy ambient chord (C major 9 / F maj 7 vibes)
    const frequencies = [130.81, 164.81, 196.00, 246.94, 293.66, 329.63];

    this.oscillators = frequencies.map((freq, index) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      
      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      // Gentle pulsing LFO effect
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
      if (panner) {
        panner.pan.setValueAtTime((index % 2 === 0 ? -0.4 : 0.4), this.ctx.currentTime);
        oscGain.connect(panner);
        panner.connect(this.gainNode);
      } else {
        oscGain.connect(this.gainNode);
      }

      oscGain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      osc.connect(oscGain);
      osc.start();

      return { osc, oscGain };
    });
  }

  stop() {
    if (!this.isPlaying) return;
    this.oscillators.forEach(({ osc, oscGain }) => {
      try {
        oscGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
        setTimeout(() => osc.stop(), 800);
      } catch (e) {
        // Safe catch
      }
    });
    this.oscillators = [];
    this.isPlaying = false;
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const ambientSound = new AmbientSoundscape();
