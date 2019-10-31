function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
}

function setup() {
  createCanvas(810, 800, WEBGL);
}

function draw() {
  background(250);

   translate(-240, -100, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.00);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.00);
  plane(0);
  pop();
  
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.00);
  rotateY(frameCount * 0.00);
  box(0, 0, 0);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.00);
  rotateY(frameCount * 0.00);
  cylinder(0, 0);
  pop();

  translate(-240 * 2, 200, 0);
  push();
  rotateZ(frameCount * 0.00);
  rotateX(frameCount * 9.00);
  rotateY(frameCount * 0.00);
  cone(50, 100);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 9.01);
  rotateX(frameCount * 0.000);
  rotateY(frameCount * 0.0001);
  torus(100, 10);
  pop();
  
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.00);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.00);
  sphere(0);
  pop();
}
