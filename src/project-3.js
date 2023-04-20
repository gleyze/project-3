
import { LitElement, html, css } from 'lit';

import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-colors';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";

import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";

export class Project3 extends LitElement {
  static properties = {
    paragraph: { type: String, reflect: true},
    audioFile: { attribute: "audio-file", type: String, reflect: true},
    isPlaying: { type: Boolean, reflect: true},
    icon: {type: String, reflect: true},
    filename: {type: String, reflect: true}
  }

    
  static styles = css`
    :host {
      min-height: 100vh;
      display: inline;
      vertical-align:middle;
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      background-color: var(--inline-audio-background-color);
    }
    .container {
      display: inline-flex;
      align-items: center;
      padding: 0.5px 10px 0.5px 0px;
      background-color: var(--simple-colors-default-theme-pink-7);
      border-radius: 4px;
      min-width: 64px;
      cursor: pointer;
      font-size: 18px;
      position: relative;
      z-index: 1;
    }
    .progress-bar {
      height: 100%;
      background-color: var(--simple-colors-default-theme-pink-8);
      transition: width 0.1s;
      position: absolute;
      border-radius: 4px;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .progress {
      height: 100%;
      background-color: var(--simple-colors-default-theme-pink-8);
      position: absolute;
      border-radius: 4px;
      top: 0;
      left: 0;
      z-index: -1;
      animation: progress-bar 1s linear forwards;
    }
  `;

  constructor() {
    super();
    this.isPlaying = false;
    this.icon = "av:play-arrow";
    this.filename = '';
    
  }


  togglePlayPause() {
    const audio = this.shadowRoot.querySelector('audio');
  if (audio.paused) {
    audio.play();
    this.isPlaying = true;
    this.icon = "av:pause";
    audio.addEventListener('ended', () => {
      this.isPlaying = false;
      this.icon = "av:play-arrow";
    });
  } else {
    audio.pause();
    this.isPlaying = false;
    this.icon = "av:play-arrow";
  }
  }

  updateProgressBar() {
    const audio = this.shadowRoot.querySelector("audio");
    const progressBar = this.shadowRoot.querySelector(".progress");
    if (progressBar) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      if (!audio.paused) {
        requestAnimationFrame(() => this.updateProgressBar());
      }
    }
  }

  render() {
    return html`
      <div class="container" @click="${this.togglePlayPause}"> 
      <simple-icon-button icon="${this.icon}"></simple-icon-button>
      <slot></slot>
      <audio class="player" src="${this.filename}" @timeupdate="${this.updateProgressBar}"></audio>
      <div class="progress-bar"></div>
      <div class="progress"></div>
    </div>
    `;
  }
}

customElements.define('project-3', Project3);

