class SineWave {
  constructor(ampl, period = 2, WAVE_WIDTH, nodes, { width, height }) {
    this.initAmpl = ampl;
    this.ampl = ampl;
    this.period = period;
    this.canvasWidth = WAVE_WIDTH;
    this.canvasHeight = height;
    this.xspacing = WAVE_WIDTH / 12;
    this.w = WAVE_WIDTH + this.xspacing;
    this.dx = (TWO_PI / period) * this.xspacing;
    this.theta = 0;
    this.nodes = nodes;
    this.yvalues = new Array(12);
    this.play();
  }

  play() {
    this.paused = false;
    this.calcWave();
    this.anim = requestAnimationFrame(() => {
      this.play();
    });
  }

  pause() {
    this.paused = true;
    cancelAnimationFrame(this.anim);
  }

  calcWave() {
    const { dx, canvasHeight } = this;
    const threshold = this.initAmp * 9;
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      const offset = this.w / 2;
      let cx = offset + (this.w / 12) * i;
      this.yvalues[i] = Math.sin(x) * this.ampl;
      this.nodes[i].moveTo(cx, canvasHeight / 2 + this.yvalues[i]);

      x += dx;
    }
    this.theta += 2 * 0.012345679;
  }
}

window.onload = function () {
  const viewbox = document.querySelector(".viewbox");
  const { width, height } = getComputedStyle(viewbox);
  const nodes = Object.keys(colorModel).map((note, idx) => {
    return new WaveNode(
      {
        cx: idx * (pxToNum(width) / 12),
        cy: pxToNum(height) / 2,
        r: 3.14,
        fill: colorModel[note],
      },
      { ref: viewbox }
    );
  });
  const w = new SineWave(24, 2, pxToNum(width) / 2, nodes, {
    width: pxToNum(width),
    height: pxToNum(height),
  });
};
