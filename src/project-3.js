import { LitElement, html, css } from 'lit';

import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

class AudioPlayer {
  constructor(audio, playPauseBtn, progressBar) {
    this.paragraph = "Tens of thousands of Egyptians packed into Tahrir Square in central Cairo on Friday. The crowd was as large as any that has gathered in the square since the protests that forced out President Hosni Mubarak in February 2011.";
    this.audio = audio;
    this.playPauseBtn = playPauseBtn;
    this.progressBar = progressBar;
  }

  playAudio() {
    if (this.audio.paused) {
      this.audio.play();
      this.playPauseBtn.textContent = "Pause";
    } else {
      this.audio.pause();
      this.playPauseBtn.textContent = "Play";
    }
  }

  updateProgressBar() {
    const progress = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressBar.style.width = `${progress}%`;
  }

  initialize() {
    this.playPauseBtn.addEventListener("click", () => this.playAudio());
    this.audio.addEventListener("timeupdate", () => this.updateProgressBar());
  }
}

export class Project3 extends LitElement {
  static properties = {
    header: { type: String },
    audioFile: { attribute: "audio-file", type: String},
    playing: { type: Boolean}
  }

  static styles = css`
    .audio-player {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 10px;
    }

    .play-pause-btn {
      width: 100px;
      height: 40px;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 20px;
    }

    .progress-bar-container {
      height: 40px;
      width: 100%;
      background-color: #ccc;
      border-radius: 5px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background-color: #5A5A5A;
      width: 0%;
      transition: width 0.1s ease-in-out;
    }
  `;

  constructor() {
    super();
    this.audioPlayer = new AudioPlayer(
      this.shadowRoot.querySelector("audio"),
      this.shadowRoot.querySelector(".play-pause-btn"),
      this.shadowRoot.querySelector(".progress-bar")
    );
    this.audioPlayer.initialize();
  }

  render() {
    return html`
      <div class="audio-player">
        <audio src="http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"></audio>
        <button class="play-pause-btn">Play</button>
        <div class="progress-bar-container">
        <div class="progress-bar"></div>
        <div class="paragraph">${this.paragraph}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('project-3', Project3);
