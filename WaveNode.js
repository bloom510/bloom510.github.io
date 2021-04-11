class WaveNode {
  constructor(shape, container) {
    this.shape = shape;
    this.container = container;
    this.shape.ref = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    this.shape.ref.setAttribute("stroke-width", 4);

    this.shape.ref.setAttribute("x1", shape.x1);
    this.shape.ref.setAttribute("y1", shape.y1);
    this.shape.ref.setAttribute("x2", shape.x2 || 0);
    this.shape.ref.setAttribute("stroke", shape.stroke);
    container.ref.appendChild(shape.ref);
  }

  setColor(color) {
    this.shape.ref.setAttribute("stroke", color);
  }

  moveTo(x1, y1, x2, y2) {
    this.shape.ref.setAttribute("x1", x1);
    this.shape.ref.setAttribute("y1", y1);
    this.shape.ref.setAttribute("x2", x2);
    this.shape.ref.setAttribute("y2", y2);
  }
}
