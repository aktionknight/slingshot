class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    
  }


  display() {
   // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    this.radius = 3;
    super.display();
    ellipseMode(CENTER);
    ellipse(0,0,this.radius);
    if(keyCode === 32)
    {
      fill("red")
    }
 
  }
}

    
  

