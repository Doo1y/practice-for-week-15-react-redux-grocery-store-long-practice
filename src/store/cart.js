const ADD_ITEM = 'cart/addItem';

export const addItem = (id) => {
  return {
    type: ADD_ITEM,
    cartItem: id
  };
};

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const updatedCart = {
        ...state
      };
      updatedCart[action.cartItem] = {
        ...state[action.cartItem],
        id: action.cartItem
      };
      if (!updatedCart[action.cartItem].count)
        updatedCart[action.cartItem].count = 1;
      else updatedCart[action.cartItem].count += 1;
      return updatedCart;
    default:
      return state;
  }
};

export default cartReducer;
