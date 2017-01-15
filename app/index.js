import Calculator from './src/Calculator';

console.log('node app: ./index.js');

let calculator = new Calculator(5);
calculator
  .add(2)
  .add(3)
  .subtract(3)
  .multiply(3)
  .divide(2)
  .reset()
  .add(5);

console.log(`Total: ${calculator.total()}`);
