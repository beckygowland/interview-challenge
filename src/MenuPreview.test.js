import React from 'react';
import { MenuPreview, mapStateToProps } from './MenuPreview';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders', () => {
  const div = shallow(<MenuPreview selectedItems={[]} />);
  expect(div).toMatchSnapshot();
  expect(div.find('ul').children().length).toBe(0);
});

it('renders list items', () => {
  const selectedItems = [{ id: 1, position: 0 }, { id: 2, position: 0 }];
  const div = shallow(<MenuPreview selectedItems={selectedItems} />);
  expect(div.find('ul').children().length ).toBe(2);
});

it('mapStateToProps', () => {
  const selectedItems = [
    { id: 1 },
    { id: 2 },
    { id: 1 },
  ]
  const props = mapStateToProps({ selectedItems })
  expect(props.selectedItems.length).toBe(3);
  expect(props.selectedItems[0].position).toBe(0);
  expect(props.selectedItems[1].position).toBe(0);
  expect(props.selectedItems[2].position).toBe(1);
});
