export const addToCart = (payload) => {
  // console.log('payload', payload);
  return {
    type: "ADD_TO_CART",
    payload: payload,
  };
};
