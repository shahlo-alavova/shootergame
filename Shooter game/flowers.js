function Flower(x,y){
	this.x= x;
	this.y= y;
	this.r = 25;
	this.toDelete = false;
	this.xdir = 1;


	this.move=function(){
this.x = this.x + this.xdir;
   }

   this.shiftDown=function(){
   	this.xdir *= -1;
   	this.y = this.y+ this.r;
   }

	this.vanish = function(){
		this.toDelete=true;
	}

	this.shrink = function(){
		this.r = this.r - 3;
	}

	this.show = function(){
		fill(230,0,200);
		ellipse(this.x,this.y,this.r*2, this.r*2);
	}
}