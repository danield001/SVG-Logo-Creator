const inquirer = require('inquirer');
const fs = require('fs');

const { Triangle, Square, Circle } = require('./library/shapes.js');

const fileName = 'logo.svg';

function promptUser() {
    inquirer
        .prompt([
                        {
                            type: "input",
                            message:
                                "What three characters would you like to display in your logo?",
                            name: "logoText",
                        },
                        {
                            type: "input",
                            message:
                                "What color would you like your logo text? Please input hexadecimal number or color keyword!",
                            name: "logoTextColor",
                        },
                        {
                            type: "list",
                            message:
                                "What shape would you like your logo?",
                            choices: ["triange", "square", "circle"],
                            name: "logoShape",
                        },
                        {
                            type: "input",
                            message: 
                                "What color would you like your logo shape?",
                            name: "logoColor",
                        }
                    ])
        .then((answers) => {
            if (answers.logoText.length > 3) {
                console.log(`Logo text cannot exceed 3 characters! Please try again.`);
                promptUser();
            } else {
                let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
                svgString += '<g>';

                let shapeChoice;
                if (answers.logoShape === "triangle") {
                    shapeChoice = new Triangle();
                    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.logoColor}"/>`;
                } else if (answers.logoShape === "square") {
                    shapeChoice = new Square();
                    svgString += `<rect x="75" y="90" width="200" height="200" fill="${answers.logoColor}"/>`;
                } else {
                    shapeChoice = new Circle();
                    svgString += `<circle cx="150" cy="100" r="80" fill="${answers.logoColor}"/>`;
                }

                svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.logoTextColor}">${answers.logoText}</text>`;

                svgString += `</g>`;
                svgString += `</svg>`;

                fs.writeFile(fileName, svgString, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('logo.svg created!');
                    }
                });
            }
        });
}

promptUser();

