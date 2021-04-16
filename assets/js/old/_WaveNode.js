class WaveNode {
  constructor(shape, container) {
    this.shape = shape;
    this.container = container;
    this.shape.ref = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.shape.ref.setAttribute("cx", shape.cx);
    this.shape.ref.setAttribute("cy", shape.cy);
    this.shape.ref.setAttribute("r", shape.r);
    this.shape.ref.setAttribute("fill", shape.fill);
    container.ref.appendChild(shape.ref);
  }

  moveTo(x, y) {
    this.shape.cx = numToPx(x);
    this.shape.cy = numToPx(y);
    this.shape.ref.setAttribute("cx", x);
    this.shape.ref.setAttribute("cy", y);
  }
}
