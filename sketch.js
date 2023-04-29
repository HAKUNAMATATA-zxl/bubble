// gui params
var seedColor = "#00ffff";
var size = 10
var gui;
var isRandomColor = true;
var speed = 1;
const circles = [];
var R = 200
var B = 100
var G = 100


function setup() {

    createCanvas(windowWidth, windowHeight);
    // Create the GUI

    gui = createGui('p5.gui');
    sliderRange(5, 50, 1);
    gui.addGlobals('size');
    sliderRange(1, 10, 1);
    gui.addGlobals('speed');
    sliderRange(0, 255, 1);
    gui.addGlobals('isRandomColor', 'R', 'G', 'B');
    // gui.setStyle("padding", "2px");
    // gui.setStyle("backgroundColor", "#eee");
    console.log(gui)
    // Only call draw when then gui is changed
    // noLoop();
    background(0);
}


function draw() {
    noStroke()
    for (let i = 0; i < circles.length; i++) {
        fill(circles[i].color);
        circle(circles[i].x, circles[i].y, circles[i].size)
    }
}

function mouseMoved() {

    let r = noise(mouseY) * R;
    let g = noise(mouseY) * G;
    let b = noise(mouseY) * B;
    for (let i = 0; i < speed; i++) {
        if (isRandomColor) {
            r = map(mouseY, 0, height, 0, 255)
            g = map(mouseX, 0, width, 0, 255)
            b = noise(mouseX) * 255
        }
        circles.push({
            x: mouseX + random(-100, 100),
            y: mouseY + random(-100, 100),
            size: size + random(-5, 15),
            color: [r, g, b]
        })
    }

}

// dynamically adjust the canvas to the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}