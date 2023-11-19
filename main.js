const number = Math.abs(-7.13);
console.log(number);

const arr = [10, 40, -33, 19];
const num = Math.min(...arr);
console.log(num);

const str = '1.45';
const floatNumber = parseFloat(str);
console.log(floatNumber + 1);
const intNumber = parseInt(str);
console.log(intNumber + 1);
const isInt = Number.isInteger(intNumber);
console.log(isInt);

function square(number) {
  if (isNaN(number)) return 'Invalid input';
  return number * number;
}
console.log(square(3));

const randomNumber = Math.random();
console.log(randomNumber);

let int = 12;
console.log(int.toString(2));

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function mul(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function operation(firstNumber, secondNumber, opCallback) {
  return `[${opCallback(firstNumber, secondNumber)}]`;
}
console.log(operation(8, 2, sum));
console.log(operation(8, 2, sub));
console.log(operation(8, 2, mul));

const primaryC = ['red', 'yellow', 'blue'];
const SecondaryC = ['green', 'orange', 'violet'];

const colors = [...primaryC, ...SecondaryC, 'black', 'white'];
console.log(colors);

const numbers = [11, 13, 26, 15, 12];
const el = numbers.find((element) => element % 3 === 0);
console.log(el);

const colorsArray = ['black', 'red', 'green', 'blue', 'white'];

const rgbColors = colorsArray.slice(1, 4);
console.log(rgbColors);

const numbersArr = [3, 7, 9];

const squaredNumbers = numbersArr.map((currentValue) => currentValue * currentValue);
console.log(squaredNumbers);

const totalSum = numbersArr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(totalSum);

const car1 = {
  name: 'camry',
  color: 'white',
  currentSpeed: 0,
  move(speed) {
    this.currentSpeed = speed;
    return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`;
  },
  stop() {
    this.currentSpeed = 0;
    console.log(`The ${this.name} stopped`);
  },
};

const car2 = {
  name: 'Corolla',
  color: 'Black',
  currentSpeed: 0,
  move(speed) {
    this.currentSpeed = speed;
    return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`;
  },
  stop() {
    this.currentSpeed = 0;
    console.log(`The ${this.name} stopped`);
  },
};

class Car {
  static numberOfCars = 0;
  #currentSpeed;

  constructor(name, color, currentSpeed) {
    this.name = name;
    this.color = color;
    this.#currentSpeed = currentSpeed;
    Car.incrementNumberOfCars();
  }

  move(speed) {
    this.#currentSpeed = speed;
    return `The ${this.name} is moving at speed of ${this.#currentSpeed}km per hour`;
  }

  stop() {
    this.#currentSpeed = 0;
    return `The ${this.name} stopped`;
  }

  static incrementNumberOfCars() {
    Car.numberOfCars++;
  }
}

const carOne = new Car('camry', 'white', 0);
const carTwo = new Car('corolla', 'black', 0);
console.log(carOne.move(100));
console.log(carOne);

let user1 = {
  firstName: 'Salman',
  lastName: 'Mohammed',
};

let printFullName = function (age) {
  console.log(`Hello, ${this.firstName} ${this.lastName}. Your age is: ${age}`);
};

printFullName.call(user1, '28');
