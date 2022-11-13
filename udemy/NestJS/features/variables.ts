let apples: number = 5;
// apples = `11`;//에러
apples = 11;
let speed: string = 'fast';
// speed = 5;//에러
let notingMuch: null = null;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1) Function that returns the 'any' type
const json = `{"x":10, "y":20}`;
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
//2) When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
// let foundWord;
// let foundWord: boolean;
let foundWord = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) valiable whose type cannot be inferred correctly
let number = [-10, 1, 12];
let numberAbobveZero: boolean | number = false;
for (let i = 0; i < number.length; i++) {
  numberAbobveZero = number[i];
}
