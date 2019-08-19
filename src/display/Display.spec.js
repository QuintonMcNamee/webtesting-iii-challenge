// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays "open" by default', () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/Open/i)).toBeTruthy();
  });

  it('displays "unlocked" by default', () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/Unlocked/i)).toBeTruthy();
  });
});
