class Box
{
constructor(x,y,w,h)
{
    var box_features = {
        isStatic : false,
       restitution : 1 
      }
  
  
      box = Bodies.rectangle(x,y,w,h,box_features)
      
World.add(myWorld,box)

this.w=w
this.h=h
this.box=box

}
display() {
    rectMode(CENTER)
  rect (this.box.position.x,this.box.position.y,this.w,this.h) 
  
}
}