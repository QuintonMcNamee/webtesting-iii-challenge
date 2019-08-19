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
  //   expect(queryByText(/Open Gate/i)).toBeTruthy();
  // });
});
