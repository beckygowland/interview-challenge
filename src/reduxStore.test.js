import React from 'react';
import reducer, { addFoodItem, deleteFoodItem } from './reduxStore';

it('sets initial state', () => {
  const state = reducer(undefined, { type: "" })
  expect(state.selectedItems.length).toBe(0)
});

it('append new item to selected items', () => {
  const foodItem1 = { id: 100 }
  const foodItem2 = { id: 101 }
  const foodItem3 = { id: 102 }
  let state = reducer(undefined, addFoodItem(foodItem1))
  expect(state.selectedItems.length).toBe(1)
  state = reducer(state, addFoodItem(foodItem2))
  expect(state.selectedItems.length).toBe(2)
  state = reducer(state, addFoodItem(foodItem3))
  expect(state.selectedItems.length).toBe(3)
  expect(state.selectedItems[0].id).toBe(100)
  expect(state.selectedItems[1].id).toBe(101)
  expect(state.selectedItems[2].id).toBe(102)
});


it('delete item from list', () => {
  const initalState = {
    selectedItems: [{ id: 100 }, { id: 101 }, { id: 102 }],
  }
  const state = reducer(initalState, deleteFoodItem(100, 0))
  expect(state.selectedItems.length).toBe(2)
  expect(state.selectedItems[0].id).toBe(101)
  expect(state.selectedItems[1].id).toBe(102)
});

it('delete item from list with same id', () => {
  const initalState = {
    selectedItems: [
      { id: 100 },
      { id: 101 },
      { id: 100 },
      { id: 100 },
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