function Drop(x, y){
	this.x = x;
	this.y = y;
	this.r = 8;
	this.toDelete=false;

	this.vanish=function(){
		this.toDelete=true;
	}

	this.show = function(){
		noStroke();
		fill(50,100,200);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.move = function(){
		this.y = this.y -5;
	}

	this.hits = function(flower){
var d = dist(this.x, this.y, flower.x, flower.y);
if(d < this.r+flower.r) {
	return true;
}
	else {
		return false;}
	}
}