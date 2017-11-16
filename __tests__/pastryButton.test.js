// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PastryButton from '../src/pastryButton';

Enzyme.configure({ adapter: new Adapter() });

test('renders isActive', () => {
  const tree = renderer.create(<PastryButton
    onPress={() => { }}
    label="Croissant"
    isActive
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('isActive = false, background #5A8282', () => {
  const button = shallow(<PastryButton
    onPress={() => {}}
    label="MyLabel"
    isActive={false}
  />);
  expect(button.find('TouchableHighlight').props().style[0].backgroundColor)
    .toEqual('#5A8282');
});
