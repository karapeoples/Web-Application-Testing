import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import Display from './Display';


  
  test('rtl renders w/o crashing', () => {
      render(<App />);
    });
  


  test('balls and strikes label included', () => {
    const { getByText } = render(<Display />);
    getByText(/balls/i);
    getByText(/strikes/i);
  })
