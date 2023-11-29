class Shape{
    constructor(color, text, textColor){
        this.color = "";
        this.text = "";
        this.textColor = "";
    }
    setColor(color){
        this.color = color;
    }
    setText(text){
        this.text = text;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }

}

class Circle extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shape = 'Circle';
      }
    render(){
        //svg code w/${this.color}
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><circle cx="150" cy="100" r="100" fill="${this.color}" /><text x="150" y="100" class="text" fill="${this.textColor}" font-size="30px" text-anchor="middle">${this.text}</text></svg>`;

    }
}

class Triangle extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shape = 'Triangle';
      }
    render(){
        //svg code w/${this.color}
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><polygon points="150,0 300,200 0,200" fill="${this.color}" /><style>
        .text{font-size: 30px;}</style><text x="150" y="125" class="text" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
    }
}


class Square extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shape = 'Square';
      }
    render(){
        //svg code w/${this.color}
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px"><rect width="100%" height="100%" fill="${this.color}" /><text x="50%" y="50%" class="text" fill="${this.textColor}" font-size="30px" text-anchor="middle">${this.text}</text></svg>`;
    }
}


function logoContent (responses){
const {textLogo ,textColor, shapeSelect, shapeColor } = responses

if (shapeSelect === "Circle"){
    const circle = new Circle();
    circle.setColor(shapeColor);
    circle.setTextColor(textColor);
    circle.setText(textLogo);
    return circle.render();

} else if (shapeSelect === "Triangle"){
    const triangle = new Triangle();
    triangle.setColor(shapeColor);
    triangle.setTextColor(textColor);
    triangle.setText(textLogo);
    return triangle.render();
}else if(shapeSelect == "Square"){
    const square = new Square();
    square.setColor(shapeColor);
    square.setTextColor(textColor);
    square.setText(textLogo);
    return square.render();
}

}

module.exports = logoContent;