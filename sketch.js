var movingrect,fixedrect ;
var rectQ , rectR ;


function setup() {
  createCanvas(800,400);
 movingrect =createSprite(400, 200, 50, 50);
fixedrect = createSprite (200,200,50,50) ;
rectQ = createSprite(200,300,50,50) ;
rectR = createSprite(200,100,50,50) ;

movingrect.velocityX =-10
fixedrect.velocityX = 5
rectQ.velocityY = -4
rectR.velocityY = 5


movingrect.shapeColor = "yellow"
fixedrect.shapeColor = "blue"
rectR.shapeColor = "pink"
rectQ.shapeColor = "red"
}

function draw() {
  background(0);  
  drawSprites();

bounce (rectQ , rectR)
bounce (movingrect , fixedrect)

}






