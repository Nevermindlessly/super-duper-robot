const inquirer = require('inquirer');
const SVG = require('svg.js');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex code):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex code):',
    },
  ])
  .then(({ text, textColor, shape, shapeColor }) => {
    let shapeObject;
    switch (shape.toLowerCase()) {
      case 'triangle':
        shapeObject = new Triangle(shapeColor);
        break;
      case 'circle':
        shapeObject = new Circle(shapeColor);
        break;
      case 'square':
        shapeObject = new Square(shapeColor);
        break;
      default:
        console.error(`Invalid shape: ${shape}`);
        process.exit(1);
    }

    const draw = SVG('logo').size(300, 200);
    shapeObject.draw(draw);
    draw.text(text).fill(textColor).move(50, 50);

    const svgString = draw.svg();
    fs.writeFileSync('logo.svg', svgString);
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error(error);
  });
