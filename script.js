let sharpie;
let americaSlanted;
let space;
let trumpFlag;
const drops = [];

function preload() {
    sharpie = loadImage("sharpie.png",
        () => console.log("Image loaded successfully!"),
        () => console.log("Failed to load image!")
    );

    americaSlanted = loadImage("americaSlanted.png",
        () => console.log("map background loaded succesfully!"),
        () => console.log("failed to load map badkground")
    );

    space = loadImage("space.jpg",
        () => console.log("space background loaded succesfully!"),
        () => console.log("failed to load space badkground")
    );

    trumpFlag = loadImage("trumpFlag.png",
        () => console.log("space background loaded succesfully!"),
        () => console.log("failed to load space badkground")
    );
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 50; i++) {
        drops.push(new Raindrop());
    }
}

function draw() {
    
    image(space, 0, 0, width, height);

    image(americaSlanted, 0, 0, width, height);

    image(trumpFlag, 0, 0, width, height);
   
    for (let drop of drops) {
        drop.fall();
        drop.show();
    }
}

class Raindrop {
    constructor() {
        this.x = random(width);
        this.y = random(-500, height);
        this.speed = random(2, 5);
        this.size = random(400, 800);
    }

    fall() {
        this.y += this.speed;
        if (this.y > height) {
            this.y = random(-50, -10);
            this.x = random(width);
        }
    }

    show() {
        if (sharpie) { // Prevent errors if the image fails to load
            image(sharpie, this.x, this.y, this.size, this.size);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
