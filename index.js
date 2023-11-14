const inquirer = require('inquirer');
const fs = require('fs');
const logoContent = require('./lib/shapes.js')
const {writeFile} = require('fs/promises')

function generateLogo(){
inquirer
        .prompt([
            {
                type:"input",
                name: "textLogo",
                message:"Please enter between 1 and 3 characters. "
            },
            {
                type:"input",
                name:"textColor",
                message:"Please enter your preferred text color (if you know the hexadecimal number, type it as follows : #FFFFFF ) "
            },
            {
                type: "list",
                name: "shapeSelect",
                message: "please select one of the following shapes: ",
                choices: ["Circle", "Triangle", "Square"]
            },
            {
                type: "input",
                name:"shapeColor",
                message:"Please enter your preferred background color (if you know the hexadecimal number, type it as follows : #FFFFFF ) "
            }
        ])
        .then(responses => {
            fs.writeFile("logo.svg", logoContent(responses), (err) =>{
                err ? console.error(err) : console.log("Congratulations! You've created your own logo! ")
            })
        })
}
generateLogo();