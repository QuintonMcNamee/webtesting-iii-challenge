// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('gate cannot be closed if locked', () => {
  //   const { queryByText, getByTestId } = render(<Controls />);
  //
  //   fireEvent.click(getByTestId(/controlsButton2/i));
  //   fireEvent.click(getByTestId(/controlsButton1/i));
  //   fireEvent.click(getByTestId(/controlsButton2/i));
  //
  //   expect(queryByText(/Open Gate/i)).toBeFalsy();
  // });

  // it('closed toggle button should be disabled if the gate is locked', () => {
  //   const toggleLocked = jest.fn(locked => {
  //     locked = !locked;
  //   })
  //   const toggleClosed = jest.fn(closed => {
  //     closed = !closed;
  //   })
  //   let locked = false;
  //   let closed = false;
  //
  //   const { queryByText, getByTestId } = render(<Controls toggleLocked={toggleLocked} toggleClosed={toggleClosed} />);
  //
  //   fireEvent.click(getByTestId('closeButton'));
  //   fireEvent.click(getByTestId('lockButton'));
  //
  //   expect(queryByText('Open Gate')).toBeTruthy();
  // })

  it('close and lock buttons exist', () => {
    const { getByTestId } = render(<Controls />);
    expect(getByTestId('lockButton'));
    expect(getByTestId('closeButton'));
  })

  it('"buttons" text changes to reflect the state the door will be in if clicked', () => {
    const { queryByText, getByTestId } = render(<Controls />);
    expect(queryByText('Close Gate'));
    expect(queryByText('Lock Gate'));
    fireEvent.click(getByTestId('closeButton'));
    fireEvent.click(getByTestId('lockButton'));
    expect(queryByText('Open Gate'));
    expect(queryByText('Locked Gate'));
  })

  it('the closed toggle button is disabled if the gate is locked (cannot be closed or opened if locked)', () => {
    const { queryByText } = render(<Controls locked={true} closed={true} />);
    const lockButton = queryByText('Open Gate');
    expect(lockButton.disabled).toBe(true);
  });

  it('the locked toggle button is disabled if the gate is open', () => {
    const { queryByText } = render(<Controls locked={false} closed={false} />);
    const lockButton = queryByText('Lock Gate');
    expect(lockButton.disabled).toBe(true);
  });
});
