var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;
//notes for my colors 
//209, 66, 244 this is a purple type of color
//65, 244, 125 this is a green type of color
//45, 229, 21 this is a blue color type 
//255, 58, 179 this is a pink
//251, 255, 57 this is a yellow

function setup(){
    createCanvas(600,400);
    background(185, 56, 255);
}

//the three functions is going to make the ball drag with a green color and a pink outline
function draw(){
    strokeWeight(4);
    stroke(3, 15, 175);
    display();
    move();
    bounce();
    
    var x = 0;
        while(x<650){
            fill(186, 255, 249);
            rect(x,255,25,25);
            x = x + 50
        }
    for(var x = 0; x < 650; x = x + 50){
        fill(251, 255, 57);
        rect(x,100,25,25);
        } 
}
function display(){
     //display ball
    fill(65, 244, 125);
    ellipse(x, y, 50, 50);
}
function move(){
    //make ball move with the speeds
    y = y + speedy;
    x = x + speedx;
    
}

function bounce(){
    //ball changes direction when it hits wall
    if(x>600 || x<0){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }
}