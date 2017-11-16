// @flow
import React from 'react';
import PastryButton from '../pastryButton';
import renderer from 'react-test-renderer';
/*
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})
*/

test('renders isActive', () => {
  const tree = renderer.create(
    <PastryButton onPress={(t) => { }} label={'Croissant'} isActive={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
/*
test('renders isActive = false', () => {
	const button = shallow(
		<PastryButton onPress={ (t) => {} } label="MyLabel" isActive={false} />);
	console.log(button.find('TouchableHighlight'));
});
*/
