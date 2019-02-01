let sketch = function(p) {

  p.setup = function() {
    p.createCanvas(720, 400); 
    p.noStroke();
    p.rectMode(p.CENTER);
  }

  p.draw = function() {
    p.background(230); 
    p.fill(244,122,158);
    p.rect(p.mouseX, p.height/2, p.mouseY/2+10, p.mouseY/2+10);
    p.fill(237,34,93);
    var inverseX = p.width-p.mouseX;
    var inverseY = p.height-p.mouseY;
    p.rect(inverseX, p.height/2, (inverseY/2)+10, (inverseY/2)+10);
  }
}

new p5(sketch, 'sketch');