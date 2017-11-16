import React from 'react';
import renderer from 'react-test-renderer';
import IngredientBar from '../src/ingredientBar';

test('renders correctly', () => {
  const tree = renderer.create(<IngredientBar label="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
