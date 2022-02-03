export default class HaikuCreator {

  constructor() {
    this.haiku = [];
  }

  addLine(line) {
    this.haiku.push(line);
  }

  isAHaiku() {
    console.log(this.haiku[0].count);
    if (this.haiku[0].count === 5 && this.haiku[1].count === 7 && this.haiku[2].count === 5) {
      return true;
    }
    return false;
  }
}