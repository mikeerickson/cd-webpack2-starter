import Calculator from './Calculator';

console.log('umd module: ./index.js');

let calculator = new Calculator(5);
calculator
  .add(2)
  .add(3)
  .subtract(3)
  .multiply(3)
  .divide(2)
  .reset()
  .add(51);

let total = calculator.total();

console.log(`Total: ${total}`);

const app = document.getElementById('app');
app.innerHTML = `Calculator Total: ${total}`;
