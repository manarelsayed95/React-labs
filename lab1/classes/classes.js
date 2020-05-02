
class Shape{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        if (this.constructor == Shape) {
            throw new Error("Abstract classes can't be instantiated.");
        }
      }
    getCircumference(){}
    getArea(){}
}

class Rectangle extends Shape {
    // Class constructor
    constructor(x,y,Width,Height) {
        super(x, y);
        this.Width = Width;
        this.Height = Height;
    }
  
    // Class method
    getCircumference() {
      return (this.Width + this.Height ) * 2;
    }
    getArea(){
        return this.Width * this.Height;
    }

    log(){
      return "rectangle";
    }
  }
  
  // Square class inherits from the Rectangle class
  class Square extends Rectangle {
    // Child class constructor
    constructor(x,y,length) {
      // Call parent's constructor
      super(x,y,length, length);
      this.Length = length;
    }
  
    // Child class method
    getCircumference() {
      return (this.Length + this.Length) * 2;
    }
    getArea(){
        return this.Length * this.Length;
    }

    log(){
      return "square";
    }
  }

  class Oval extends Shape {
    // Class constructor
    constructor(x,y,A,B) {
        super(x, y);
        this.A = A;
        this.B = B;
    }
  
    // Class method
    getCircumference() {
      return (this.A + this.B ) * Math.PI;
    }
    getArea(){
        return this.A * this.B * Math.PI;
    }

    log(){
      return "oval";
    }
  }

  class Circle extends Oval {
    // Class constructor
    constructor(x,y,R) {
        super(x,y,R,R);
        this.R = R;
    }
  
    // Class method
    getCircumference() {
      return (this.R + this.R ) * Math.PI;
    }
    getArea(){
        return this.R * this.R * Math.PI;
    }

    log(){
      return "circle";
    }
  }

  let rectangle =new Rectangle(0,0,10,5);
  let square =new Square(0,0,5);
  let oval =new Oval(0,0,10,5);
  let circle = new Circle(0,0,5);

  console.log(rectangle);
  console.log(square);
  console.log(oval);
  console.log(circle);

  document.getElementById("rectangle").innerHTML = "Circumference: "+rectangle.getCircumference()+" , "+"Area: "+rectangle.getArea()+" , " +"Type: "+rectangle.log();
  document.getElementById("square").innerHTML =  "Circumference: "+square.getCircumference()+" , "+"Area: "+square.getArea()+" , " +"Type: "+square.log();
  document.getElementById("oval").innerHTML = "Circumference: "+oval.getCircumference()+" , "+"Area: "+oval.getArea()+" , " +"Type: "+oval.log();
  document.getElementById("circle").innerHTML =  "Circumference: "+circle.getCircumference()+" , "+"Area: "+circle.getArea()+" , " +"Type: "+circle.log();

  var xmlDoc;
  xmlDoc.load("note.xml"); 
  xmlDoc.save("Circumference: "+rectangle.getCircumference()+" , "+"Area: "+rectangle.getArea()+" , " +"Type: "+rectangle.log()); 