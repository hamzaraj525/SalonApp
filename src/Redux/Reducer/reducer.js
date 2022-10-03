const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
      };
  }
  return state;
};
export default cartReducer;
