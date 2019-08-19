// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('render display', () => {
    const { getByTestId } = render(<Dashboard />);
    const displayDisplay = getByTestId('display');
  });

  it('render controls', () => {
    const { getByTestId } = render(<Dashboard />);
    const displayControls = getByTestId('controls');
  });

  it('displays open/closed', () => {
    const { getByTestId, queryByText } = render(<Dashboard />);
    expect(queryByText(/Open/i)).toBeTruthy();
    fireEvent.click(getByTestId(/controlsButton2/i));
    expect(queryByText(/Closed/i)).toBeTruthy();
  });

  it('displays locked/unlocked', () => {
    const { getByTestId, queryByText } = render(<Dashboard />);
    expect(queryByText(/Unlocked/i)).toBeTruthy();
    fireEvent.click(getByTestId(/controlsButton1/i));
    expect(queryByText(/Locked/i)).toBeTruthy();
  })
});
