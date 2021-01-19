var canvas,ob1,ob2,ob3,ob4,ball,edge;
var music;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);
    ob1=createSprite(100,550,140,20);
    ob1.shapeColor="yellow";
    ob2=createSprite(250,550,140,20);
    ob2.shapeColor="blue";
    ob3=createSprite(400,550,140,20);
    ob3.shapeColor="red";
    ob4=createSprite(550,550,140,20);
    ob4.shapeColor="green";
    ball=createSprite(450,400,30,30);
    ball.shapeColor="white"
    ball.velocityX=-3;
    ball.velocityY=3;


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    console.log(ball.x)
    //create edgeSprite
    createEdgeSprites()
    ball.bounceOff(edges);
    ball.bounceOff(ob1);
    ball.bounceOff(ob2);
    ball.bounceOff(ob3);
    ball.bounceOff(ob4);
 if(isTouching(ob1,ball)){
     ob1.shapeColor="pink";
     ball.shapeColor="pink";
    
 }
 else if(isTouching(ob2,ball)){
    ob2.shapeColor="pink";
    ball.shapeColor="pink";
   
}
else if(isTouching(ob3,ball)){
    ob3.shapeColor="pink";
    ball.shapeColor="pink";
   
}
else if(isTouching(ob4,ball)){
    ob4.shapeColor="pink";
    ball.shapeColor="pink";
    
}
else{
    ball.shapeColor="white"
    ob1.shapeColor="yellow";
    ob2.shapeColor="blue";
    ob3.shapeColor="red";
    ob4.shapeColor="green";
}

   

 drawSprites();
    //add condition to check if box touching surface and make it box
}
function isTouching(object1,object2){
    if(object1.y-object2.y<(object1.height+object2.height)/2&&
    object2.y-object1.y<(object1.height+object2.height)/2 &&
    object1.x-object2.x<(object1.width+object2.width)/2 &&
    object2.x-object1.x<(object1.width+object2.width)/2)
    {
        return true;
    }
    else{
        return false;
    }
}