import { Buy_IceCream } from "./iceCreamTypes";

const initialState = {
  numOfIceCream: 20,
};
export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_IceCream:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};
