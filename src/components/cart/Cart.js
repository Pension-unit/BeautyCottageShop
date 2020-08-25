import React, { Component } from "react";
import "./Cart.scss";
import unSelected from "../../assets/images/selected_shopping.png";
import selected from "../../assets/images/selected_shopping_true.png";
import arrows from "../../assets/images/x.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  addAction,
  subAction,
  getProductList,
  checkedChange,
  checkedItemChange,
  totalCheckAllClick,
} from "../../store/actioncreator";
class Cart extends Component {
  componentWillUnmount() {}
  componentDidMount() {
    // 挂载的时候派发, 请求数据
    // if (window.sessionStorage.getItem("isOnce")) {
    //   return false;
    // }
    // window.sessionStorage.setItem("isOnce", true);
    this.props.productList();
  }
  render() {
    return (
      <div className="bcCart">
        <div className="bcHeader">
          <div className="bcMobileTitle"></div>
          <div className="bcHeaderTitle">
            <span className="title">购物车</span>
          </div>
        </div>
        {/* 商品属性 */}
        <div className="bcContent">
          {this.props.userProductList.map((v, shopIndex) => {
            return (
              <div className="bcContentBox" key={v.shop_name}>
                <div className="bcContentShopBox">
                  <div className="bcContentShop">
                    <div
                      className="checked"
                      onClick={this.props.checkAll.bind(this, shopIndex)}
                    >
                      <img src={v.checkedAll ? selected : unSelected} alt="" />
                    </div>
                    <span>{v.shop_name + " >"}</span>
                  </div>
                </div>
                {v.wdata.map((v, productIndex) => {
                  return (
                    <div className="productsBox" key={v.product_id}>
                      <div className="productContent">
                        <div
                          className="checked"
                          onClick={this.props.checkItem.bind(
                            this,
                            shopIndex,
                            productIndex
                          )}
                        >
                          <img src={v.checked ? selected : unSelected} alt="" />
                        </div>
                        <div className="productImg">
                          <img src={v.product_img} alt="" />
                        </div>
                        <div className="productInfo">
                          <span>{v.product_name}</span>
                          <div className="productSpecBox">
                            <div>
                              <span>已选择：</span>
                              <span className="productSpec">
                                {v.product_spce}
                              </span>
                            </div>
                            <div className="arrowsImg">
                              <img src={arrows} alt="" />
                            </div>
                          </div>
                          <div className="productPrice">
                            <div className="left">
                              <span>¥</span>
                              <span className="price">
                                {v.product_price + ".00"}
                              </span>
                            </div>
                            <div className="right">
                              <p
                                className={
                                  v.product_count === 1
                                    ? "subCount active"
                                    : "subCount"
                                }
                                onClick={this.props.subNum.bind(
                                  this,
                                  shopIndex,
                                  productIndex
                                )}
                              >
                                -
                              </p>
                              <span>{v.product_count}</span>
                              <p
                                className="addCount"
                                onClick={this.props.addNum.bind(
                                  this,
                                  shopIndex,
                                  productIndex
                                )}
                              >
                                +
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* 结算下单 */}
        <div className="bcFooter">
          <div className="left">
            <div className="totalCheckAll" onClick={this.props.totalCheckAll}>
              <img
                className="selected"
                src={this.props.totalChecked === true ? selected : unSelected}
              ></img>
            </div>
            <div className="selectedCount">
              <span>
                {this.props.checkedNum === 0
                  ? "全选"
                  : "已选 (" + this.props.checkedNum + ")"}
              </span>
            </div>
          </div>
          <div className="right">
            <div className="totalPrice">
              <span>¥</span>
              <span>{this.props.totalPrice + ".00"}</span>
            </div>
            <div className="placeAnOrder">
              <span>下单</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.productReducer);
  return {
    // num: state.numReducer.num,
    // checked: state.productReducer.product_list.checked,
    userProductList: state.productReducer.product_list,
    totalPrice: state.productReducer.totalPrice,
    checkedNum: state.productReducer.checkedNum,
    totalChecked: state.productReducer.totalChecked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productList: () => {
      dispatch(getProductList());
    },
    addNum: (shopIndex, productIndex) => {
      dispatch(addAction(shopIndex, productIndex));
    },
    subNum: (shopIndex, productIndex) => {
      dispatch(subAction(shopIndex, productIndex));
    },
    checkAll: (shopIndex) => {
      dispatch(checkedChange(shopIndex));
    },
    checkItem: (shopIndex, productIndex) => {
      dispatch(checkedItemChange(shopIndex, productIndex));
    },
    totalCheckAll: () => {
      dispatch(totalCheckAllClick());
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
