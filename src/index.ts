import { html, GemElement } from '@mantou/gem';

interface HTMLAudioElementExt extends HTMLAudioElement {
  captureStream: () => MediaStream;
  mozCaptureStream: () => MediaStream;
}

interface HTMLCanvasElementExt extends HTMLCanvasElement {
  captureStream: (rate?: number) => MediaStream;
}

class App extends GemElement {
  shadowRoot: ShadowRoot;
  mr: MediaRecorder;
  get audio() {
    return this.shadowRoot.querySelector('audio') as HTMLAudioElementExt;
  }
  get canvas() {
    return this.shadowRoot.querySelector('canvas') as HTMLCanvasElementExt;
  }
  get video() {
    return this.shadowRoot.querySelector('video') as HTMLVideoElement;
  }
  mounted() {
    const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    const render = () => {
      ctx.rect(10, 10, 150, 100);
      ctx.fill();
      window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
  }
  onClick = async () => {
    this.audio.captureStream = this.audio.captureStream || this.audio.mozCaptureStream;
    const ams = this.audio.captureStream().getAudioTracks()[0];
    const ims = this.canvas.captureStream(25).getVideoTracks()[0];
    console.log({ ams, ims });
    this.audio.currentTime = 0;
    await this.audio.play();
    const vms = new MediaStream([ims, ams]);
    console.log({ vms });
    this.video.onerror = console.error;
    this.video.srcObject = vms;
    this.video.play();
    this.mr = new MediaRecorder(vms);
    this.mr.ondataavailable = console.log;
    this.mr.onerror = console.error;
    this.mr.onstart = console.log;
    this.mr.onstop = console.log;
    this.mr.start();
  };
  onStop = () => {
    this.audio.pause();
    this.video.pause();
    this.mr.stop();
  };
  render() {
    return html`
      <canvas></canvas>
      <audio
        muted
        crossorigin="anonymous"
        src="https://raw.githubusercontent.com/mantou132/javascript-learn/master/media-session/take-me-hand.mp3"
      ></audio>
      <button @click=${this.onClick}>play</button>
      <button @click=${this.onStop}>stop</button>
      <video controls muted></video>
    `;
  }
}

customElements.define('app-root', App);
