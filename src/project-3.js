
// import { LitElement, html, css } from 'lit';

// import '@lrnwebcomponents/simple-icon/simple-icon.js';
// import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

// export class Project3 extends LitElement {
//   static properties = {
//     paragraph: { type: String, reflect: true},
//     audioFile: { attribute: "audio-file", type: String, reflect: true},
//     isPlaying: { type: Boolean, reflect: true},
//     icon: {type: String, reflect: true}
//   }

//   static styles = css`
//     :host {
//       min-height: 100vh;
//       display: inline;
//       vertical-align:middle;
//       color: #1a2b42;
//       max-width: 960px;
//       margin: 0 auto;
//       background-color: var(--inline-audio-background-color);
//     }
//     .container {
//       display: inline-flex;
//       align-items: center;
//       padding: 4px 4px 4px 0px;
//       background-color: white;
//       border-radius: 4px;
//       min-width: 64px;
//       cursor: pointer;
//       font-size: 18px;
//     }
//     .icon-spacing{
//       padding-right: 8px;
//     }
    
//   `;

//   constructor() {
//     super();
//     this.isPlaying = false;
//     this.playerIcon = "av:play-arrow";
//     this.audioFile = new URL('../assets/fart-with-reverb-39675.mp3', import.meta.url).href;
//   }

//   togglePlayPause() {
//     const audio = this.shadowRoot.querySelector('audio');
//     if (audio.paused) {
//       audio.play();
//       this.isPlaying = true;
//       this.playerIcon = "av:pause";
//     } else {
//       audio.pause();
//       this.isPlaying = false;
//       this.playerIcon = "av:play-arrow";
//     }
//   }

//   updateProgressBar() {
//     const audio = this.shadowRoot.querySelector("audio");
//     const progressBar = this.shadowRoot.querySelector(".progress-bar");
//     const progress = (audio.currentTime / audio.duration) * 100;
//     progressBar.style.width = `${progress}%`;
//   }

//   render() {
//     return html`
//       <div class="container" @click="${this.togglePlayPause}"> 
//         <simple-icon class="icon-spacing" icon="${this.playerIcon}"></simple-icon>
//         <slot></slot>
//         <audio class="player" src="${this.audioFile}"></audio>
//       </div>
//     `;
//   }
// }

// customElements.define('project-3', Project3);
/////////////////////////////////////////////////////////////////////////////////////

// import { LitElement, html, css } from 'lit';

// import '@lrnwebcomponents/simple-icon/simple-icon.js';
// import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

// export class Project3 extends LitElement {
//   static properties = {
//     paragraph: { type: String, reflect: true},
//     audioFile: { attribute: "audio-file", type: String, reflect: true},
//     isPlaying: { type: Boolean, reflect: true},
//     icon: {type: String, reflect: true}
//   }

//   static styles = css`
//     :host {
//       min-height: 100vh;
//       display: inline;
//       vertical-align:middle;
//       color: #1a2b42;
//       max-width: 960px;
//       margin: 0 auto;
//       background-color: var(--inline-audio-background-color);
//     }
//     .container {
//       display: inline-flex;
//       align-items: center;
//       padding: 4px 4px 4px 0px;
//       background-color: white;
//       border-radius: 4px;
//       min-width: 64px;
//       cursor: pointer;
//       font-size: 18px;
//     }
//     .icon-spacing{
//       padding-right: 8px;
//     }
//     .progress-bar {
//       height: 4px;
//       background-color: var(--inline-audio-highlight-color);
//       transition: width 0.1s ease-in-out;
//     }
//   `;

//   constructor() {
//     super();
//     this.isPlaying = false;
//     this.playerIcon = "av:play-arrow";
//     this.audioFile = new URL('../assets/fart-with-reverb-39675.mp3', import.meta.url).href;
//   }

//   togglePlayPause() {
//     const audio = this.shadowRoot.querySelector('audio');
//     if (audio.paused) {
//       audio.play();
//       this.isPlaying = true;
//       this.playerIcon = "av:pause";
//     } else {
//       audio.pause();
//       this.isPlaying = false;
//       this.playerIcon = "av:play-arrow";
//     }
//   }

//   render() {
//     return html`
//        <div class="container" @click="${this.togglePlayPause}"> 
//       <simple-icon class="icon-spacing" icon="${this.playerIcon}"></simple-icon>
//       <slot></slot>
//       <audio class="player" src="${this.audioFile}" @timeupdate="${this.updateProgressBar}"></audio>
//       <div class="progress-bar"></div>
//     </div>
//     `;
//   }
// }

// customElements.define('project-3', Project3);


import { LitElement, html, css } from 'lit';

import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class Project3 extends LitElement {
  static properties = {
    paragraph: { type: String, reflect: true},
    audioFile: { attribute: "audio-file", type: String, reflect: true},
    isPlaying: { type: Boolean, reflect: true},
    icon: {type: String, reflect: true}
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
      padding: 4px 4px 4px 0px;
      background-color: white;
      border-radius: 4px;
      min-width: 64px;
      cursor: pointer;
      font-size: 18px;
      position: relative;
      z-index: 1;
    }
    .icon-spacing{
      padding-right: 8px;
    }
    .progress-bar {
      height: 100%;
      background-color: grey;
      transition: width 0.1s;
      position: absolute;
      border-radius: 4px;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .progress {
      height: 100%;
      background-color: grey;
      width: 0;
      position: absolute;
      border-radius: 4px;
      top: 0;
      left: 0;
      z-index: 0;
    }
  `;

  constructor() {
    super();
    this.isPlaying = false;
    this.icon = "av:play-arrow";
    this.audioFile = new URL('../assets/fart-with-reverb-39675.mp3', import.meta.url).href;
  }

  togglePlayPause() {
    const audio = this.shadowRoot.querySelector('audio');
    if (audio.paused) {
      audio.play();
      this.isPlaying = true;
      this.icon = "av:pause";
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
    }
  }

  render() {
    return html`
      <div class="container" @click="${this.togglePlayPause}"> 
      <simple-icon class="icon-spacing" icon="${this.icon}"></simple-icon>
      <slot></slot>
      <audio class="player" src="${this.audioFile}" @timeupdate="${this.updateProgressBar}"></audio>
      <div class="progress-bar"></div>
      <div class="progress"></div>
    </div>
    `;
  }
}

customElements.define('project-3', Project3);

