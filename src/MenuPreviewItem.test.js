import React from 'react';
import { MenuPreviewItem } from './MenuPreviewItem';
import sinon from 'sinon';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders', () => {
  const div = shallow(<MenuPreviewItem id={100} name="itemTest" 
        position={0} dietaries={['z', 'y', 'x']} deleteFoodItem={() => {}}/>);
  expect(div).toMatchSnapshot();
  expect(div.find('h2').text()).toBe('itemTest');
  expect(div.find('span').length).toBe(3);
});

it('delete click calls delete prop callback', () => {
  const onDeleteClick = sinon.spy();

  const div = shallow(<MenuPreviewItem id={100} name="itemTest" 
        position={0} dietaries={['z', 'y', 'x']} deleteFoodItem={onDeleteClick}/>);
  div.find('button').simulate('click');
  expect(onDeleteClick.callCount).toBe(1);
  expect(onDeleteClick.args[0][0]).toBe(100);
  expect(onDeleteClick.args[0][1]).toBe(0);
});
