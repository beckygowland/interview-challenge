import React from 'react';
import { ItemPickerItem } from './ItemPickerItem';
import sinon from 'sinon';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders', () => {
  const div = shallow(<ItemPickerItem id={1} name="testName"
    dietaries={['a', 'b']} addFoodItem={() => { }} />);
  expect(div).toMatchSnapshot();
  expect(div.find('h2').text()).toBe('testName');
  expect(div.find('span').length).toBe(2);
});

it('onclick calls add food item', () => {
  const onItemClick = sinon.spy();
  const div = shallow(<ItemPickerItem id={1} name="testName"
    addFoodItem={onItemClick} />);
  div.find('li').simulate('click');
  expect(onItemClick.callCount).toBe(1);
  expect(onItemClick.args[0][0].id).toBe(1);
  expect(onItemClick.args[0][0].name).toBe('testName');
  expect(onItemClick.args[0][0].dietaries.length).toBe(0);
});
