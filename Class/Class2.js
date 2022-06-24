class Rectangle
{
    // set up
    constructor(_width,_height,_colour){
        console.log("the Rectangle is bening created");
        
        this.width=_width;
        this.height=_height;
        this.colour= _colour;
    }
    
    getArea (){
        return this.width*this.height;
        }
       printDescription(){
        console.log(`I am a rectangle of $(this.width) * $(this.height) and I am $(this.colour)`)
       }
       }

    




let myRectangle = new Rectangle();
let myRectangle1 =new Rectangle(10,10,'red');
let myRectangle2 = new Rectangle(5,5,'black')

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
console.log(myRectangle2.printDescription());
myRectangle2.printDescription();