import React, { Component } from "react";
import "./Cart.scss";
import unSelected from "../../assets/images/selected_shopping.png";
import selected from "../../assets/images/selected_shopping_true.png";
import arrows from "../../assets/images/x.png";
import mz from "../../assets/images/mz_pink.png";
import Close from "../../assets/images/close.png";
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
    if (this.props.userProductList.length === 0) {
      this.props.productList();
    }
  }
  handleTouchMove = (shopIndex, productIndex, e) => {
    console.log(this.currentPre);
    if (this.currentPre) {
      this.childBox.className = "productsBox OriginP";
      this.currentPre.style.display = "none";
    }
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
      childBox.children[1].style.display = "none";
      // childBox.children[1].style.visibility = "hidden";
    } else {
      if (childBox.className.indexOf("moveStyle") !== -1) {
        return;
      }
      childBox.children[1].style.display = "block";
      // childBox.children[1].style.visibility = "inherit";
      childBox.className = "productsBox moveStyle";
    }

    // let current = childBox.children[1];
    // console.log(childBox.children[1]);
    // console.log(bcContents[shopIndex + 2])
    // console.log(shopIndex,productIndex);
  };
  handleTouchStart = (e) => {
    this.startX = e.touches[0].pageX;
    this.startY = e.touches[0].pageY;
    // console.log(this.startX, this.startY);
  };
  handleTouchEnd = (shopIndex, productIndex, e) => {
    let bcContents = document.getElementsByClassName("bcContentBox");
    // let products = document.getElementsByClassName("productsBox");
    let parent = bcContents[shopIndex + this.props.userProductList.length];
    this.childBox = parent.children[productIndex + 1];
    this.currentPre = this.childBox.children[1];
    // console.log(this.currentPre);
  };
  handleShowClick = () => {
    // 盒子
    let showBox = document.getElementsByClassName("hiddenBox");
    // 遮罩
    let shadeBox = document.getElementsByClassName("shade");
    shadeBox[1].className = "shade shadeActive";

    console.log(shadeBox[1]);
    console.log(showBox[1]);

    showBox[1].style.zIndex = 99999;
    showBox[1].className = "hiddenBox show";
  };
  handleHideClick = () => {
    let showBox = document.getElementsByClassName("hiddenBox");
    // 遮罩
    let shadeBox = document.getElementsByClassName("shade");
    shadeBox[1].className = "shade";

    showBox[1].className = "hiddenBox hide";
    setTimeout(function () {
      showBox[1].style.zIndex = 1;
    }, 500);
  };

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
                    <span
                      onClick={() => {
                        this.props.history.push("/shopInfo");
                      }}
                    >
                      {v.shop_name + " >"}
                    </span>
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
                      onTouchEnd={this.handleTouchEnd.bind(
                        this,
                        shopIndex,
                        productIndex
                      )}
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
                        <div
                          className="productImg"
                          onClick={() => {
                            this.props.history.push("/gift/shopping");
                          }}
                        >
                          <img src={v.product_img} alt="" />
                        </div>
                        <div className="productInfo">
                          <span>{v.product_name}</span>
                          <div
                            className="productSpecBox"
                            onClick={this.handleShowClick}
                          >
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
              onClick={() => {
                // console.log(this.props.checkedNum);
                if (localStorage.getItem("userinfo")) {
                  console.log(localStorage.getItem("userinfo"))
                  this.props.checkedNum === 0
                    ? console.log("请选择要结算的商品! ")
                    : this.props.history.push("/payType");
                } else {
                  this.props.history.push("/login");
                }
              }}
            >
              <span>下单</span>
            </div>
          </div>
        </div>
        {/* 商品属性弹出框开始 */}
        <div className="hiddenBox">
          <div className="hiddenBoxHeader">
            <div className="headerImg">
              <img src={mz} alt="" />
            </div>
            <div className="headerPrice">
              <div>
                价格: <span className="money">¥ 159</span>
              </div>
            </div>
            <div className="closeHiddenBox" onClick={this.handleHideClick}>
              <img src={Close} alt="" />
            </div>
          </div>
          <div className="hiddenContent">
            <div className="color">
              <p className="title">颜色</p>
              <div className="options">
                <div className="optionItem">香芋紫</div>
                <div className="optionItem">粉色</div>
                <div className="optionItem">白色</div>
              </div>
            </div>
            <div className="size">
              <p className="title">尺码</p>
              <div className="options">
                <div className="optionItem">55-65cm</div>
                <div className="optionItem">65-75cm</div>
                <div className="optionItem">75-85cm</div>
              </div>
            </div>
            <div className="num">
              <p className="title">数量</p>
              <div className="numBtn">
                <div className="sub">-</div>
                <div className="count">1</div>
                <div className="add">+</div>
              </div>
            </div>
          </div>
          <div className="hiddenFooter" onClick={this.handleHideClick}>
            <div className="footerBtn">完成</div>
          </div>
        </div>
        {/* 商品属性弹出框结束 */}
        {/* 遮罩 */}
        <div className="shade" onClick={this.handleHideClick}></div>
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
