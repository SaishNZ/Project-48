class Player extends BaseClass{
    constructor(x,y){
      super(x,y,25,25);
      this.image = loadAnimation("Images/4.png", "Images/5.png", "Images/6.png", "Images/7.png", "Images/8.png", "Images/9.png", "Images/10.png", "Images/11.png", "Images/12.png");
      this.array1 = [];
      this.array2 = [];
    }
    display(){
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      //super.display();
  
      if(this.body.speed>20 && this.body.position.x>200) {
      var bodyxp = [this.body.position.x]; 
      var bodyyp = [this.body.position.y];
  
      this.array1.push(bodyxp);
      this.array2.push(bodyyp);
      }
  
      for(var start = 0; start<this.array1.length; start++) {
        push();
        fill("white");
        ellipse(this.array1[start], this.array2[start], 10);
        pop();
      }
  
    }
  }