import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../index';

test('Check for Getting Started Text', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Hello World')).toBeInTheDocument();
});
