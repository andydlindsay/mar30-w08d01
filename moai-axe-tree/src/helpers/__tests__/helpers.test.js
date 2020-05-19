import { announceResult, chooseRobotItem, genFeedbackMessage } from '../helpers';

let fakeState;

beforeEach(() => {
  fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
});

describe('announceResult function', () => {
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseRobotItem function', () => {
  test('should choose the winning item if cheating is true', () => {
    fakeState.cheating = true;
    fakeState.playerSelection = 'Axe';

    const result = chooseRobotItem(fakeState.playerSelection, fakeState.cheating);
    expect(result).toBe('Moai');
  });

  test('should choose a random item if cheating is false', () => {
    fakeState.cheating = false;
    fakeState.playerSelection = 'Axe';

    const result = chooseRobotItem(fakeState.playerSelection, fakeState.cheating);
    const options = ['Moai', 'Axe', 'Tree'];
    // expect(options.includes(result)).toBeTruthy();
    expect(options).toContain(result);
  });
});

describe('genFeedbackMessage function', () => {
  test('returns correct message when given a status', () => {
    const loss = genFeedbackMessage('Lost');
    const win = genFeedbackMessage('Won');
    const tie = genFeedbackMessage('Tied');
    const waiting = genFeedbackMessage('Waiting');

    expect(loss).toEqual('You lost!');
    expect(win).toEqual('Good job!');
    expect(tie).toEqual('Tie game!');
    expect(waiting).toEqual('Waiting for your choice!');
  });
});
