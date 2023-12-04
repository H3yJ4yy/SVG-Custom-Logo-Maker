const { Triangle, Square, Circle} = require("../lib/shapes");
test ("can create a triangle shape.", ()=>{
    const triangle = new Triangle("blue", "AAA", "red")
    expect(triangle.render()).toBe(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">`)
    expect(triangle.renderEnd()).toBe(`</svg>`)
    expect(triangle.renderShape()).toBe(`<polygon points="150,0 300,200 0,200" fill="blue" /><text x="150" y="150" font-size="60" class="text" fill="red" text-anchor="middle">AAA</text>`)
})

test ("can create a circle shape.", ()=>{
    const circle = new Circle("blue", "AAA", "red")
    expect(circle.render()).toBe(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">`)
    expect(circle.renderEnd()).toBe(`</svg>`)
    expect(circle.renderShape()).toBe(`<circle cx="150" cy="100" r="100" fill="blue" /><text x="150" y="110" class="text" fill="red" font-size="50px" text-anchor="middle">AAA</text>`)
})

test ("can create a square shape.", ()=>{
    const square = new Square("blue", "AAA", "red")
    expect(square.render()).toBe(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">`)
    expect(square.renderEnd()).toBe(`</svg>`)
    expect(square.renderShape()).toBe(`<rect width="100%" height="100%" fill="blue" /><text x="50%" y="50%" class="text" fill="red" font-size="50px" text-anchor="middle">AAA</text>`)
})
