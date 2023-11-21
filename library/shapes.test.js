const { Triangle, Square, Circle } = require('./shapes.js');


describe("triangle test", () => {
    test("test for a traingle with a yellow background", () => {
        const shape = new Triangle;
        shape.setColor("yellow");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>'
        );
    });
});

describe("square test", () => {
    test("test for a square with a blue background", () => {
        const shape = new Square;
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<rect x="75" y="90" width="200" height="200" fill="blue"/>'
        );
    });
});

describe("circle test", () => {
    test("test for a square with a blue background", () => {
        const shape = new Circle;
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="100" r="80" fill="green"/>'
        );
    });
});

