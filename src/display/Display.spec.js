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

  it('testing for red led when locked or closed', () => {
    const { container } = render(<Display locked={true} closed={true} />);
    expect(container.querySelector('.led.red-led'));
  })

  it('testing for green led when unlocked or open', () => {
    const { container } = render(<Display locked={false} closed={false} />);
    expect(container.querySelector('.led.green-led'));
  })

  it('should be "Closed" if closed prop is true', () => {
    const { queryByText } = render(<Display closed={true} />);
    expect(queryByText('Closed'));
  })

  it('"Open" if otherwise', () => {
    const { queryByText } = render(<Display closed={false} />);
    expect(queryByText('Open'));
  })
});
