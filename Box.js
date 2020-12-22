class Box{
    constructor(x,y,color){
        var opt = {
            restitution :0.8,
            density : 0.04,
            friction :0.5
        }
        this.body = Bodies.rectangle(x,y,70,70,opt);
        this.width=70;
        this.height=70;
        this.color=color;
        World.add(myWorld,this.body);
        }

        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            strokeWeight(4);
            stroke("gray");
            fill(this.color);
            translate(pos.x,pos.y);
            rotate(angle); 
            rectMode(CENTER);
            rect(0,0,this.width,this.height); 
            pop();  
        }
}