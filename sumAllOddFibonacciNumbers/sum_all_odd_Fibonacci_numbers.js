class FibNumber {
  constructor(Number) {
    this.targetNumber = Number;
    this.LesserFibs = [];
    this.oddFibs = [];
    this.currentFib = 1;
    this.previousFib = 0;
  }


  sumOddFibsLessThanTarget() {
    this.getLesserFibs();
    this.getOddFibs();
    return this.sumOddFibs();
  }

  getLesserFibs() {
    while (this.currentIsLessThanTarget()) {
      this.addCurrentFibToLesserFibs();
      this.updateFib();
    }
  }

  getOddFibs() {
    this.oddFibs = this.LesserFibs.filter(isOdd);
    return this.oddFibs;
  }

  sumOddFibs() {
    return this.oddFibs.reduce(addToSum, 0);
  }

  currentIsLessThanTarget() {
    return this.currentFib <= this.targetNumber;
  }

  addCurrentFibToLesserFibs() {
    this.LesserFibs.push(this.currentFib);
  }

  updateFib() {
    const tempFib = this.currentFib;
    this.currentFib += this.previousFib;
    this.previousFib = tempFib;
  }

}

function addToSum(sum, number) {
  const tally = sum + number;
  return tally;
}

function isOdd(number) {
  return number % 2 > 0;
}

function sumFibs(num) {
  const numExt = new FibNumber(num);
  return numExt.sumOddFibsLessThanTarget();
}

module.exports = sumFibs;
