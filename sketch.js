var canvas;
var music;
var block1, block2, block3, block4;
var ball;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(701,595,190,30);
    block1.shapeColor = "blue";
    block2 = createSprite(501,595,190,30);
    block2.shapeColor = "deeppink";
    block3 = createSprite(301,595,190,30);
    block3.shapeColor = "orange";
    block4 = createSprite(101,595,190,30);
    block4.shapeColor = "green";


    //create box sprite and give velocity
    ball = createSprite(random(20,750));
    ball.shapeColor = "white";
    ball.velocityY = 5;
    ball.scale = 0.3;
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites(); 
     ball.bounceOff(edges);
     ball -> ball.velocityX = 4;
   
    //add condition to check if box touching surface and make it box
   if(block1.isTouching(ball) && ball.bounceOff(block1)){
       ball.shapeColor = "blue";
       music.play();
      
             
   }
  
   if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor = "orange";
    music.play();
   
      
   }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
      
               
    }
    if(block2.isTouching(ball) ){
        ball.shapeColor = "deeppink";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
        
         
    
    } 
    
    drawSprites();
}


