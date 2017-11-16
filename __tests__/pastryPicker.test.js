// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import PastryPicker from '../pastryPicker';

test('renders correctly', () => {
  const tree = renderer.create(
    <PastryPicker />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
