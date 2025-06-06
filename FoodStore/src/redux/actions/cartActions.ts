import { ActionType } from "./actionTypes";


export const AddToCart = (product: any) => {
  return {
    type: ActionType.ADD_TO_CART, payload: product
  }
};

export const MakeIsInCartTrue = (id: number) => {
  return {
    type: ActionType.MAKE_ISINCART_TRUE, payload: id
  }
};

export const DeleteFromCart = (id: number) => {
  return {
    type: ActionType.DELETE_FROM_CART, payload: id
  }
};

export const ClearCart = () => {
  return {
    type: ActionType.CLEAR_CART
  }
};

export const IncreaseProductCount = (id: number) => {
  return {
    type: ActionType.INCREASE_PRODUCT_COUNT, payload: id
  }
};

export const DecreaseProductCount = (id: number) => {
  return {
    type: ActionType.DECREASE_PRODUCT_COUNT, payload: id
  }
};