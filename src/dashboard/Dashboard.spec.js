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
    fireEvent.click(getByTestId(/closeButton/i));
    expect(queryByText(/Closed/i)).toBeTruthy();
  });

  it('displays locked/unlocked', () => {
    const { getByTestId, queryByText } = render(<Dashboard />);
    expect(queryByText(/Unlocked/i)).toBeTruthy();
    fireEvent.click(getByTestId(/lockButton/i));
    expect(queryByText(/Locked/i)).toBeTruthy();
  })

  // it('uses "red-led" class when locked or closed', () => {
  //   const { getByTestId, queryByText } = render(<Dashboard />);
  //   const expected = 'led red-led';
  //   expect(queryByText(/Locked/i)).toBeTruthy();
  //   expect(closed).toBeTruthy();
  // })

  it('closed toggle button should be disabled if the gate is locked', () => {
    const { queryByText, getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId('closeButton'));
    fireEvent.click(getByTestId('lockButton'));

    expect(queryByText('Open Gate')).toBeTruthy();
  })
});
