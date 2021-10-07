import { ActionTypes } from "../constants/Action-type";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removwSelectedProducts = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const filterProductsByCategory = (categoryid) => {
  return {
    type: ActionTypes.FILTER_BY_CATEGORY,
    payload: categoryid,
  };
};
