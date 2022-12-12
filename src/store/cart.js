const ADD_ITEM = 'cart/addItem';
const REMOVE_ITEM = 'cart/removeItem';
const INCREMENT_ITEM_COUNT = 'cart/incrementItemCount';
const DECREMENT_ITEM_COUNT = 'cart/decrementItemCount';
const SET_ITEM_COUNT = 'cart/setItemCount';
const EMPTY_CART = 'cart/emptyCart';

export function emptyCart() {
  return {
    type: EMPTY_CART
  };
}

export function setItemCount(count, id) {
  return {
    type: SET_ITEM_COUNT,
    id,
    count
  };
}

export function decrementItemCount(id) {
  return {
    type: DECREMENT_ITEM_COUNT,
    id
  };
}

export function incrementItemCount(id) {
  return {
    type: INCREMENT_ITEM_COUNT,
    id
  };
}

export function addItem(id) {
  return {
    type: ADD_ITEM,
    id
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id
  };
}

export default function cartReducer(state = {}, action) {
  let stateObj = { ...state };
  switch (action.type) {
    case EMPTY_CART: {
      return {};
    }
    case ADD_ITEM:
      stateObj[action.id] = { ...state[action.id], id: action.id };
      if (stateObj[action.id].count) stateObj[action.id].count += 1;
      else stateObj[action.id].count = 1;
      return stateObj;
    case REMOVE_ITEM:
      delete stateObj[action.id];
      return stateObj;
    case INCREMENT_ITEM_COUNT:
      stateObj[action.id] = {
        ...state[action.id]
      };
      stateObj[action.id].count++;
      return stateObj;
    case DECREMENT_ITEM_COUNT:
      stateObj[action.id] = {
        ...state[action.id]
      };
      stateObj[action.id].count--;
      return stateObj;
    case SET_ITEM_COUNT:
      stateObj[action.id] = {
        ...state[action.id]
      };
      stateObj[action.id].count = action.count;
      return stateObj;
    default:
      return state;
  }
}

export const getCart = (state) => state.cart;
