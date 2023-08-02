import { Buy_Cake } from "./cakeTypes";

export const buyCake = (number = 1) => {
  return {
    type: Buy_Cake,
    payload: number,
  };
};
