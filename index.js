const inquirer = require('inquirer');
const fs = require('fs');
const {logoContent} = require('./lib/shapes.js')
const {writeFile} = require('fs/promises')

function generateLogo(){
inquirer
        .prompt([
            {
                type:"input",
                name: "textLogo",
                message:"Please enter between 1 and 3 characters. ",
                validate: function(textLogo){
                    if(textLogo.length <=3 && textLogo.length !== 0){
                        return true;
                    } else if(textLogo.length === 0){
                        console.log(' Please enter up to 3 characters')
                        return false;
                    } else{
                        console.log(' Please enter a max of 3 characters')
                        return false;
                    }
                }
               
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