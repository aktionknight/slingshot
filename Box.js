class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 255;
    this.image = loadImage("sprites/wood1.png");
    
  }
  display(){
    fill("purple")

    if(this.body.speed < 3)
    {
      super.display();

    }else
    {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 2
      tint(225,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,30,30)
     
      pop();

      
      

  
    }
   

 
  }
}


