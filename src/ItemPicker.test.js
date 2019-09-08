import React from 'react';
import ItemPicker from './ItemPicker';
import items from './items';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders', () => {
  const div = shallow(<ItemPicker />);
  expect(div).toMatchSnapshot();
  expect(div.find('ul').children().length).toBe(items.length)
});
