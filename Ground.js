class Ground{
    constructor(x,y){
     var opt={
         isStatic:true
     }
        this.body =Bodies.rectangle(x,y,1500,20,opt);
        this.width=1500;
        this.height=20;
        World.add(myWorld,this.body); 
    }
    display(){
        var pos=this.body.position;
        push();
        fill("brown"); 
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height); 
        pop(); 
    }

}