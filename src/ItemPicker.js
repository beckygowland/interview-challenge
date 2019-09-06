import React from 'react';
import items from './items';
import Item from './ItemPickerItem';

const listItems = items.map((foodItem) =>
    <Item key={foodItem.id} {...foodItem}/>
);

export default () => (
    <div className="col-4">
        <ul className="item-picker">
            {listItems}
        </ul>
    </div>
);