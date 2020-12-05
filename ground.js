class Ground{

constructor(x,y,width,height){

    var GroundOption={
        isStatic:true
    };
this.body=Bodies.rectangle(x,y,width,height,GroundOption)
this.width=width
this.height=height
World.add(myworld,this.body);

}

display(){

    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
}


}


