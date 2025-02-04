let sharpie;
const drops = [];

function preload () {
    sharpie = loadImage("sharpie.png",
    () => console.log("image load Succesfully!"),
    () => console.log("failed to load image!")

    );

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < 50; i++) {
        drops.push(new Raindrop());
    }
}

function draw() {
    background(0);
    for(let drop of drops) {
        drop.fall();
        drop.show();
    }
}

class Raindrop {
    constructor(){
        this.x = random(width);
        this.y = random(-500, height);
        this.speed = random(2, 5);
        this.size = random(20, 50);
    }

    fall() {
        this.y += this.speed;
        if (this.y > height) {
            this.y = random(-50, -10);
            this.x = random (width);
        }
    }

    show() {
        image(sharpie, this.x, this.y, this.size, this.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
