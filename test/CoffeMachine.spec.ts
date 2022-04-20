import exp = require('constants');
import { CoffeMachine } from '../src/CoffeMachine';

let drinkMaker: any;
let coffeMachine: any;

beforeEach(() => {
  drinkMaker = jest.fn();
  coffeMachine = new CoffeMachine(drinkMaker);
});

afterEach(() => {
  expect(drinkMaker).toHaveBeenCalledTimes(1);
});

describe('Coffe Machine', () => {
  it('should', () => {
    coffeMachine.selectChocolate();
    coffeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('H::');
  });
  it('should', () => {
    coffeMachine.selectCoffe();
    coffeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('C::');
  });
  it('should', () => {
    coffeMachine.selectTea();
    coffeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('T::');
  });
  it('should', () => {
    coffeMachine.selectCoffe();
    coffeMachine.selectTea();
    coffeMachine.addSugar();
    coffeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('T:1:0');
  });
});
