export class CoffeMachine {
  constructor(private drinkMaker: (instruction: string) => void) {}

  instruction: string;
  sugar: number = 0;

  selectChocolate() {
    this.instruction = 'H';
  }
  selectCoffe() {
    this.instruction = 'C';
  }
  selectTea() {
    this.instruction = 'T';
  }
  addSugar() {
    this.sugar += 1;
  }
  makeDrink() {
    this.calculateSugar();
    this.drinkMaker(this.instruction);

  }

  private calculateSugar() {
    if (this.sugar == 0) {
      this.instruction = this.instruction + '::';
    } else {
      this.instruction = this.instruction + ':' + this.sugar + ':0';
    }
  }
}
