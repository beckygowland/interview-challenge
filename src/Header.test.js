import React from 'react';
import { Header , mapStateToProps } from './Header';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders', () => {
  const div = shallow(<Header count={0} summary={{}} />);
  expect(div).toMatchSnapshot();
  expect(div.find('#count').text()).toBe('0 items');
  expect(div.find('.dietary').length).toBe(0);
});

it('set proper count and dietary breakdown', () => {
  const summary = {a: 3, b: 2};
  const div = shallow(<Header count={3} summary={summary} />);
  
  expect(div.find('#count').text()).toBe('3 items');
  const summaryItems = div.find('.menu-summary-right'); 
  expect(summaryItems.children().length).toBe(2);
  summaryItems.children().forEach((node, i) => {
    const key = Object.keys(summary)[i];
    const count = summary[key] + 'x';
    expect(node.text()).toBe(count + key);
  })
});

it('mapStateToProps', () => {
  const selectedItems = [
    { id: 1, dietaries: ['a', 'b', 'c'] },
    { id: 2, dietaries: ['b', 'c'] },
    { id: 1, dietaries: ['c', 'd'] },
  ]
  const props = mapStateToProps({selectedItems})
  expect(props.count).toBe(3);
  expect(props.summary.a).toBe(1);
  expect(props.summary.b).toBe(2);
  expect(props.summary.c).toBe(3);
  expect(props.summary.d).toBe(1);
});
