var shooter;
var flowers = [];
var drops = [];

function setup() {
	createCanvas (600,400);
	shooter = new Shooter();
	for (var j=0; j < 6; j++){
	flowers[j] = new Flower(j*80+100,60);
}   
}
function draw(){
	background(51);
	shooter.show();
	shooter.move();

	var edge = false;

for(var j=0; j< flowers.length; j++){
	flowers[j].show();
	flowers[j].move();
	if(flowers[j].x > width || flowers[j].x < 0){
		edge = true;
	}
}
if(edge){
	for(var j=0; j< flowers.length; j++){
flowers[j].shiftDown();
}}

for(var i = 0; i< drops.length; i++){
    drops[i].show();
    drops[i].move();

for(var j=0; j< flowers.length; j++){
	if (drops[i].hits(flowers[j])) {
	drops[i].vanish();
	flowers[j].shrink();

}}}

for(var i = drops.length-1; i>=0; i--){
	if(drops[i].toDelete){
		drops.splice(i, 1);
	}
}
	}


function keyReleased(){
	if(key != ' '){
	shooter.setDir(0);
}
}

function keyPressed(){
	if (key === " "){
		var drop = new Drop(shooter.x, height);
			drops.push(drop);
	}

	if(keyCode === LEFT_ARROW){
		shooter.setDir(-1);
	}
	else if(keyCode === RIGHT_ARROW)
		shooter.setDir(1);
}
