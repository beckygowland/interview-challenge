// As this file got bigger, it should be split into an action 
// and reducer file. If the reducer switch case started to get
// too complicated/nested, it could also be broken down into
// smaller functions. Reducers could also be split apart and 
// later combined while creating the store (combineReducers)

const FOOD_SELECTED = 'FOOD_SELECTED';
const FOOD_DELETED = 'FOOD_DELETED';

export function addFoodItem(item) {
    return { type: FOOD_SELECTED, item }
}

export function deleteFoodItem(id, position) {
    return { type: FOOD_DELETED, id, position }
}

//////////////////////////////////////////////////

const initialState = {
    selectedItems: [],
    summary: {},
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FOOD_SELECTED:
            const selectedItems = [...state.selectedItems, { ...action.item }]
            return {
                selectedItems,
                summary: getDietarySummary(selectedItems),
            }
        case FOOD_DELETED:
            // There may be multiple items with the same id in the list.
            // Find the index of the item with the id and order position.
            const itemsWithId = state.selectedItems
                .map(({ id }, index) => ({ id, index }))
                .filter(({ id }) => id === action.id)
            const itemIndex = itemsWithId[action.position].index;
            const selectedItem = state.selectedItems
                .filter((item, index) => itemIndex !== index);
            return {
                selectedItems: selectedItem,
                summary: getDietarySummary(selectedItem),
            }
        default:
            return state
    }
}

function getDietarySummary(foodItems) {
    let breakdown = {};
    for (let item of foodItems) {
        for (let dietaryItem of item.dietaries) {
            breakdown[dietaryItem] = breakdown[dietaryItem] !== undefined ?
                breakdown[dietaryItem] + 1 : 1;
        }
    }
    return breakdown;
}
