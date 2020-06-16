var ball,ballImg;
var paddle, paddleImage;
var edges
function preload() {
  
   ballImg = loadImage("ball.png");
   paddleImg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   
  ball = createSprite(200,200,10,10);
  ball.addImage(ballImg);
  
  paddle = createSprite(375,200,100,10);
  paddle.addImage(paddleImg);
  
  ball.velocityX=9;
  
}
 function draw() {
  background(205,153,0);
  edges= createEdgeSprites();
   
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
   ball.bounceOff(edges[2]);
   
  ball.bounceOff(paddle);
   
   if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  
  drawSprites();
  
}


