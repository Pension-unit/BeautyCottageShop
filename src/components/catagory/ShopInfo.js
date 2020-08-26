import React, { Component } from "react";
import "./ShopInfo.scss";
import axios from "../../utils/myaxios";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";

class ShopInfo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    recommend_list: [],
    shopInfoTab: "zh",
  };

  componentDidMount() {
    axios
      .get("/recommend-list.json")
      .then((res) => {
        console.log(res);
        this.setState({ recommend_list: res });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="shop-info-header">
          <div className="shop-info-header-top"></div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.go(-1)}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            ]}
          >
            商品分类名称
          </NavBar>
        </div>
        <div className="shop-info-tab">
          <div className="shop-info-tab-wrapper">
            <div
              className={
                this.state.shopInfoTab === "zh"
                  ? "shop-info-tab-item active"
                  : "shop-info-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  shopInfoTab: "zh",
                });
              }}
            >
              综合
            </div>
            <div
              className={
                this.state.shopInfoTab === "xl"
                  ? "shop-info-tab-item active"
                  : "shop-info-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  shopInfoTab: "xl",
                });
              }}
            >
              销量
            </div>
            <div
              className={
                this.state.shopInfoTab === "jg"
                  ? "shop-info-tab-item active"
                  : "shop-info-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  shopInfoTab: "jg",
                });
                console.log(this);
              }}
            >
              价格
            </div>
            <div
              className={
                this.state.shopInfoTab === "xp"
                  ? "shop-info-tab-item active"
                  : "shop-info-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  shopInfoTab: "xp",
                });
              }}
            >
              新品
            </div>
          </div>
        </div>
        <div className="shop-info-recommend-product">
          <div className="recommend-product-list">
            {/* 子项目开始 */}
            {this.state.recommend_list.map((v) => (
              <div
                className="recommend-product-item"
                key={v.id + Math.random()}
              >
                <div className="recommend-product-img">
                  <img src={v.recommend_url} alt=""></img>
                </div>
                <div className="product-explain-box">
                  <span className="recommend-product-explain">
                    {v.recommend_text}
                  </span>
                </div>
                <span className="recommend-product-price">
                  <b>￥ {v.recommend_price}</b>
                </span>
              </div>
            ))}
            {/* 子项目结束 */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShopInfo);
