var ballon;
var database,height;

function setup() {
  createCanvas(800,400);
  
  database = firebase.database();
  ballon = createSprite(400,200,50,50);

  var ballonp = database.ref('ballon/height')
    ballonp.on("value",readheight)
}

function draw() {
  background(255,255,255);  
  
  if(keyDown(LEFT_ARROW)){
    ballon.x = ballon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  ballon.x = ballon.x -10;
}
else if(keyDown(UP_ARROW)){
  ballon.x = ballon.x -10;
}
else if(keyDown(DOWN_ARROW)){
  ballon.x = ballon.x -10;
}
drawSprites();
}
function readheight(data){
    height = data.val();
    ballon.x = height.x
    ballon.y = height.y
}