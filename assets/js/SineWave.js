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
    this.yvalues = new Array(12).fill(0);
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
      let x1 = offset + (this.w / 12) * i;
      this.yvalues[i] = Math.sin(x) * this.ampl;
      this.nodes[i].moveTo(
        x1,
        canvasHeight / 2 + this.yvalues[i],
        x1,
        canvasHeight / 2 + this.yvalues[(i + 6) % this.yvalues.length]
      );
      x += dx;
    }
    this.theta += 1 * 0.012345679;
  }
}

window.onload = function () {
  const viewbox = document.querySelector(".viewbox");
  const { width, height } = getComputedStyle(viewbox);
  const nodes = Object.keys(colorModel).map((note, idx) => {
    return new WaveNode(
      {
        x1: idx * (pxToNum(width) / 12),
        y1: pxToNum(height) / 2,
        stroke: colorModel[note],
        next: idx !== 11 ? idx + 1 : false,
        prev: idx ? idx - 1 : false,
      },
      { ref: viewbox }
    );
  });

  const w = new SineWave(12, 1, pxToNum(width) / 2, nodes, {
    width: pxToNum(width),
    height: pxToNum(height),
  });
  // document.addEventListener("keydown", (e) => {
  //   if (e.code === "Space") {
  //     w.play();
  //   }
  // });
};
