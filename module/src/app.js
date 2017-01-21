import msg        from 'cd-messenger';
import data       from './data.json';
import './app.css'; // uses style-loader and css-loader

import Calculator from './Calculator';

console.log(data);

console.log('umd module: ./index.js');
msg.info('Using cd-messenger here...');

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

// output to console
console.log(`Total: ${total}`);

// output to browser
const app = document.getElementById('app');
app.innerHTML = `Calculator Total: ${total}`;
