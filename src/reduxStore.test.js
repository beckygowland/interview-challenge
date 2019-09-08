import React from 'react';
import reducer, { addFoodItem, deleteFoodItem } from './reduxStore';

it('sets initial state', () => {
  const state = reducer(undefined, { type: "" })
  expect(state.selectedItems.length).toBe(0);
  expect(Object.keys(state.summary).length).toBe(0);
});

it('append new item to selected items', () => {
  const foodItem1 = { id: 100, dietaries: ['a', 'b', 'c'] };
  const foodItem2 = { id: 101, dietaries: ['b', 'c'] };
  const foodItem3 = { id: 102, dietaries: ['c', 'd'] };

  let state = reducer(undefined, addFoodItem(foodItem1));
  expect(state.selectedItems.length).toBe(1);

  state = reducer(state, addFoodItem(foodItem2));
  expect(state.selectedItems.length).toBe(2);

  state = reducer(state, addFoodItem(foodItem3));

  expect(state.selectedItems.length).toBe(3);
  expect(state.selectedItems[0].id).toBe(100);
  expect(state.selectedItems[1].id).toBe(101);
  expect(state.selectedItems[2].id).toBe(102);

  expect(state.summary.a).toBe(1);
  expect(state.summary.b).toBe(2);
  expect(state.summary.c).toBe(3);
  expect(state.summary.d).toBe(1);
});


it('delete item from list', () => {
  const initalState = {
    selectedItems: [
      { id: 100, dietaries: ['a', 'b', 'c'] },
      { id: 101, dietaries: ['b', 'c'] },
      { id: 102, dietaries: ['c', 'd'] },
    ],
    summary: {a: 1, b: 2, c: 3, d: 1},
  }
  const state = reducer(initalState, deleteFoodItem(100, 0))
  expect(state.selectedItems.length).toBe(2)
  expect(state.selectedItems[0].id).toBe(101)
  expect(state.selectedItems[1].id).toBe(102)

  expect(state.summary.a).toBe(undefined);
  expect(state.summary.b).toBe(1);
  expect(state.summary.c).toBe(2);
  expect(state.summary.d).toBe(1);
});

it('delete item from list with same id', () => {
  const initalState = {
    selectedItems: [
      { id: 100, dietaries: [] },
      { id: 101, dietaries: [] },
      { id: 100, dietaries: [] },
      { id: 100, dietaries: [] },
    ],
  }
  let state = reducer(initalState, deleteFoodItem(100, 0))
  expect(state.selectedItems.length).toBe(3)
  expect(state.selectedItems[0].id).toBe(101)
  expect(state.selectedItems[1].id).toBe(100)
  expect(state.selectedItems[2].id).toBe(100)

  state = reducer(initalState, deleteFoodItem(100, 1))
  expect(state.selectedItems.length).toBe(3)
  expect(state.selectedItems[0].id).toBe(100)
  expect(state.selectedItems[1].id).toBe(101)
  expect(state.selectedItems[2].id).toBe(100)

  state = reducer(initalState, deleteFoodItem(100, 2))
  expect(state.selectedItems.length).toBe(3)
  expect(state.selectedItems[0].id).toBe(100)
  expect(state.selectedItems[1].id).toBe(101)
  expect(state.selectedItems[2].id).toBe(100)
});