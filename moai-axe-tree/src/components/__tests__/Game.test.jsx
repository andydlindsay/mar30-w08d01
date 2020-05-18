import React from 'react';
import Game from '../Game';
import { render, prettyDOM, fireEvent } from '@testing-library/react';

describe('Game Component Tests', () => {

  test('toggles the cheating state by clicking on robot head icon', () => {
    const { container, getByTestId, debug } = render(<Game/>);

    // console.log(prettyDOM(container));
    // debug();

    // grab the robot icon
    const robotIcon = getByTestId('robot-icon');

    // click it
    fireEvent.click(robotIcon);

    // check if it has a cheating class
    expect(robotIcon).toHaveClass('cheating');

    // click it again
    fireEvent.click(robotIcon);

    // check that it does not have a cheating class
    expect(robotIcon).not.toHaveClass('cheating');
  });

});
