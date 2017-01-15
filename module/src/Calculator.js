export default class Calculator {
  constructor(initTotal = 0) {
    this.currTotal = initTotal;
  }
  add(val = 0) {
    this.currTotal += val;
    return this;
  }
  subtract(val = 0) {
    this.currTotal -= val;
    return this;
  }
  multiply(val = 0) {
    this.currTotal *= val;
    return this;
  }
  divide(val = 0) {
    this.currTotal /= val;
    return this;
  }
  reset() {
    this.currTotal = 0;
    return this;
  }
  total() {
    return this.currTotal;
  }
}
