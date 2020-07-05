import React from 'react';
import {
  render
} from '@testing-library/react';
import App from './App';

test('renders Shopping cart heading', () => {
  const {
    getByText
  } = render( < App / > );
  const headingElement = getByText(/Shopping cart/i);
  expect(headingElement).toBeInTheDocument();
});