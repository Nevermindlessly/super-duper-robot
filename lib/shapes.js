class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    draw(draw) {
      draw.polygon('50,0 0,100 100,100').fill(this.color);
    }
  }
  
  class Circle {
    constructor(color) {
      this.color = color;
    }
  
    draw(draw) {
      draw.circle(100).fill(this.color);
    }
  }
  
  class Square {
    constructor(color) {
      this.color = color;
    }
  
    draw(draw) {
      draw.rect(100, 100).fill(this.color);
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };  