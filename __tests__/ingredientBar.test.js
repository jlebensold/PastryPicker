import React from 'react';
import IngredientBar from '../ingredientBar';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <IngredientBar label={'test'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
