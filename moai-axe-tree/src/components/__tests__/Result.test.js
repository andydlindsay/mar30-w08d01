import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';
import axios from 'axios';

jest.mock('axios');

const data = {
  resultCount: 3,
  results: [
    { id: 1, name: 'Alice', score: 15 },
    { id: 2, name: 'Bob', score: 10 },
    { id: 3, name: 'Carol', score: 5 }
  ]
};

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('axios get test', async () => {
  const { getByTestId, findByText, container } = render(<Result status="Waiting" />);

  // fake the axios get request
  axios.get.mockResolvedValueOnce({ data });

  const button = getByTestId('high-score-button');
  fireEvent.click(button);

  // return a promise and make jest wait for it
  // return findByText('Bob');

  // test for a resolves to value
  // expect(findByText('Bob')).resolves.toBeTruthy();

  // using async/await
  await findByText('Bob');
  console.log(prettyDOM(container));
});
