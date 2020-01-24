import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from '../App';




test('rtl renders w/o crashing', () => {
  render(<App />);
});

  test('resets scoreboard to 0', () => {
    const { getByTestId, getByText } = render(<App />)
    fireEvent.click(getByText(/hit/i)) 
    expect(getByTestId('count').innerHTML).toBe('0')
    expect(getByTestId('outs').innerHTML).toBe('0')
  })

  test('When Strike is 1, a Foul changes it to 2', () => {
    const { getByTestId, getAllByText, getByText } = render(<App />)
    const foulBtn = getByText(/foul/i)
    const strikeBtn = getAllByText(/strike/i)[1]
    fireEvent.click(strikeBtn)
    fireEvent.click(foulBtn)
    expect(getByTestId('outs').innerHTML).toBe('2')
  })


