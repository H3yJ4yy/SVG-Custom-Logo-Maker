class Shape{
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    // setColor(color){
    //     this.color = color;
    // }
    // setText(text){
    //     this.text = text;
    // }
    // setTextColor(textColor){
    //     this.textColor = textColor;
    // }
render(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">`
}
renderEnd(){
    return `</svg>`
}
}

class Circle extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shape = 'Circle';
      }
    renderShape(){
        //svg code w/${this.color}
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" /><text x="150" y="110" class="text" fill="${this.textColor}" font-size="50px" text-anchor="middle">${this.text}</text>`;
    }
}

class Triangle extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shape = 'Triangle';
      }
    renderShape(){
        //svg code w/${this.color}
        return `<polygon points="150,0 300,200 0,200" fill="${this.color}" /><text x="150" y="150" font-size="60" class="text" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
    }
}


class Square extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shape = 'Square';
      }
    renderShape(){
        //svg code w/${this.color}
        return `<rect width="100%" height="100%" fill="${this.color}" /><text x="50%" y="50%" class="text" fill="${this.textColor}" font-size="50px" text-anchor="middle">${this.text}</text>`;
    }
}


function logoContent (responses){
const {textLogo ,textColor, shapeSelect, shapeColor } = responses

if (shapeSelect === "Circle"){
    const circle = new Circle(shapeColor, textLogo, textColor);
    // circle.setColor(shapeColor);
    // circle.setTextColor(textColor);
    // circle.setText(textLogo);
    return circle.render()+circle.renderShape()+circle.renderEnd();

} else if (shapeSelect === "Triangle"){
    const triangle = new Triangle(shapeColor, textLogo, textColor);
    // triangle.setColor(shapeColor);
    // triangle.setTextColor(textColor);
    // triangle.setText(textLogo);
    return triangle.render()+triangle.renderShape()+triangle.renderEnd();
}else if(shapeSelect == "Square"){
    const square = new Square(shapeColor, textLogo, textColor);
    // square.setColor(shapeColor);
    // square.setTextColor(textColor);
    // square.setText(textLogo);
    return square.render()+square.renderShape()+square.renderEnd();
}

}

module.exports = {logoContent, Triangle, Square, Circle};