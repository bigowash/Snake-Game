let s;
const scl = 20;


let food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    const cols = floor(width / scl);
    const rows = floor(height / scl);
    food = createVector(ceil(random(cols)), ceil(random(rows)));
    food.mult(scl);
}

function mousePressed() {
    s.total++
}

function draw() {
    background(51);
    s.death();
    s.update();
    s.show();

    if (s.eat(food)) {
        pickLocation();
        // s.total++
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl)
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    }
}