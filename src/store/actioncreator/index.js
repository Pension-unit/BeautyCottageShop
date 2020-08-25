import { ADD, SUB, PROD, CCG, CIG, TCAL } from "../actionTypes";
import axios from "../../utils/myaxios";
// 购物车加减
const addAction = (shopIndex, productIndex) => {
  return function (dispatch) {
    dispatch({
      type: ADD,
      payload: {
        step: 1,
        shopIndex,
        productIndex,
      },
    });
  };
};
const subAction = (shopIndex, productIndex) => {
  return function (dispatch) {
    dispatch({
      type: SUB,
      payload: {
        step: -1,
        shopIndex,
        productIndex,
      },
    });
  };
};
// 用户购物车列表
const getProductList = () => {
  return function (dispatch) {
    axios.get("/cartProducts.json").then((res) => {
      console.log(res);
      let productList = res;
      dispatch({
        type: PROD,
        payload: {
          productList,
        },
      });
    });
  };
};
const checkedChange = (shopIndex) => ({
  type: CCG,
  payload: {
    shopIndex,
  },
});
const checkedItemChange = (shopIndex, productIndex) => ({
  type: CIG,
  payload: {
    shopIndex,
    productIndex,
  },
});
const totalCheckAllClick = () => ({
  type: TCAL,
});

export {
  addAction,
  subAction,
  getProductList,
  checkedChange,
  checkedItemChange,
  totalCheckAllClick,
};
