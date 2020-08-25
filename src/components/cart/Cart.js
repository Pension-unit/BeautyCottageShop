import React, { Component } from "react";
import "./Cart.scss";
import unSelected from "../../assets/images/selected_shopping.png";
import selected from "../../assets/images/selected_shopping_true.png";
import arrows from "../../assets/images/x.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Toast } from "antd-mobile";

import {
  addAction,
  subAction,
  getProductList,
  checkedChange,
  checkedItemChange,
  totalCheckAllClick,
  delAction,
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
  handleTouchMove = (shopIndex, productIndex, e) => {
    let bcContents = document.getElementsByClassName("bcContentBox");
    // let products = document.getElementsByClassName("productsBox");
    let parent = bcContents[shopIndex + this.props.userProductList.length];
    let childBox = parent.children[productIndex + 1];

    // console.log((this.moveX = e.touches[0].pageX - this.startX));
    console.log(childBox.className);
    this.moveX = e.touches[0].pageX - this.startX;
    this.moveY = e.touches[0].pageY - this.startY;
    // 纵向移动时return
    if (Math.abs(this.moveY) > Math.abs(this.moveX)) {
      return;
    }
    // 滑动超过一定距离时，才触发
    if (Math.abs(this.moveX) < 10) {
      return;
    }
    // 判断向左还是向右
    if (this.moveX >= 0) {
      childBox.className = "productsBox OriginP";
      setTimeout(function () {
        childBox.children[1].style.display = "none";
        // childBox.children[1].style.visibility = "hidden";
      }, 200);
    } else {
      if (childBox.className.indexOf("moveStyle") !== -1) {
        return;
      }
      childBox.children[1].style.display = "block";
      // childBox.children[1].style.visibility = "inherit";
      childBox.className = "productsBox moveStyle";
    }

    // console.log(childBox.children[1]);
    // console.log(bcContents[shopIndex + 2])
    // console.log(shopIndex,productIndex);
  };
  handleTouchStart = (e) => {
    this.startX = e.touches[0].pageX;
    this.startY = e.touches[0].pageY;
    // console.log(this.startX, this.startY);
  };
  handleTouchEnd = (e) => {};

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
            return v.wdata.length >= 1 ? (
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
                    <div
                      className="productsBox"
                      key={v.product_id}
                      onTouchStart={this.handleTouchStart}
                      onTouchMove={this.handleTouchMove.bind(
                        this,
                        shopIndex,
                        productIndex
                      )}
                      onTouchEnd={this.handleTouchEnd}
                    >
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
                      <div className="scrollBtn">
                        <div
                          className="addToCollect"
                          onClick={this.props.successToast.bind(
                            this,
                            shopIndex,
                            productIndex
                          )}
                        >
                          <span>移至</span>
                          <span>收藏夹</span>
                        </div>

                        <div
                          className="delProduct"
                          onClick={this.props.handleDelClick.bind(
                            this,
                            shopIndex,
                            productIndex
                          )}
                        >
                          删除
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
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
            <div
              className={
                this.props.checkedNum === 0
                  ? "placeAnOrder"
                  : "placeAnOrder active"
              }
            >
              <span>下单</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state.productReducer);
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
    handleDelClick: (shopIndex, productIndex) => {
      dispatch(delAction(shopIndex, productIndex));
    },
    successToast: (shopIndex, productIndex) => {
      dispatch(delAction(shopIndex, productIndex));
      Toast.success("收藏成功", 1);
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
