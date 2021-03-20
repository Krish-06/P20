var cat1Image,cat2Image,cat3Image,cat4Image,cat;
var mouse1Image,mouse2Image,mouse3Image,mouse4Image,mouse;
function preload() {
    cat1Image = loadAnimation("images/cat1.png");
    cat2Image = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Image = loadAnimation("images/cat4.png");
    mouse1Image = loadAnimation("images/mouse1.png");
    mouse2Image = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Image = loadAnimation("images/mouse4.png");
    backgroundImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",cat1Image);
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouse1Image);
    mouse.scale = 0.1;
}

function draw() {

    background(backgroundImage);
    if(cat.x - mouse.x<(cat.width/2 - mouse.width/2)){
        cat.velocityX = 0
        cat.addAnimation("catFinalImage",cat3Image);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catFinalImage");
        mouse.addAnimation("mouseFinalImage",mouse3Image);
        mouse.scale = 0.1;
        mouse.changeAnimation("mouseFinalImage");
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -4
        cat.addAnimation("catRunning",cat2Image);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",mouse2Image);
        mouse.changeAnimation("mouseTeasing");
    }
}
