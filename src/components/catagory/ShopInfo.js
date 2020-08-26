import React, { Component } from "react";
import "./ShopInfo.scss";
import axios from "../../utils/myaxios";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { Toast, Button, WhiteSpace, WingBlank } from "antd-mobile";
import { connect } from "react-redux";
import {
  SortToSceneAction,
  SortToProAction,
  SortToShopAction,
} from "../../store/actioncreator/ctgActionCreator";

class ShopInfo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    recommend_list: [],
    shopInfoTab: "zh",
    sub: false,
  };

  subShop = () => {
    Toast.success("关注成功", 0.5);
    this.setState({
      sub: !this.state.sub,
    });
  };

  unsubShop = () => {
    Toast.success("取消关注成功", 0.5);
    this.setState({
      sub: !this.state.sub,
    });
  };

  componentDidMount() {
    axios
      .get("/recommend-list.json")
      .then((res) => {
        console.log(res);
        this.setState({ recommend_list: res });
      })
      .catch((err) => console.log(err));

      this.props.SortToScene();
  }

  render() {
    return (
      <div className="shop-info">
        <div className="shop-info-header">
          <div className="shop-info-header-top"></div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.go(-1)}
          >
            <div className="shop-header-middle">
              <div className="header-left">
                <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_08_25/0c615ddf-6d13-82ad-e256-1cc6db26e21a.png"></img>
              </div>
              <div className="header-right">
                <div className="header-shop-title">时尚礼帽旗舰店</div>
                <div className="shop-subscribe-num">
                  {this.state.sub ? "关注的人 125,03人" : "关注的人 125,02人"}
                </div>
                <div className="shop-subscribe">
                  <Button
                    onClick={this.state.sub ? this.unsubShop : this.subShop}
                  >
                    {this.state.sub ? "已关注" : "关注"}
                  </Button>
                </div>
              </div>
            </div>
          </NavBar>
        </div>

        {/* tab栏 */}
        <div className="catagory-tab-wrapper">
          <div className="catagory-tab">
            <div
              className={
                this.props.ctgSort === "scene"
                  ? "catagory-tab-item active"
                  : "catagory-tab-item"
              }
              onClick={this.props.SortToScene}
            >
              <div>商品列表</div>
            </div>
            <div
              className={
                this.props.ctgSort === "pro"
                  ? "catagory-tab-item active"
                  : "catagory-tab-item"
              }
              onClick={this.props.SortToPro}
            >
              <div>店铺简介</div>
            </div>
          </div>
        </div>
        {/* tab栏结束 */}

        {/* 商品列表 */}
        <div
          className="shop-info-recommend-product"
          style={
            this.props.ctgSort === "scene"
              ? { display: "block" }
              : { display: "none" }
          }
        >
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

        {/* 店铺简介 */}
        <div className="shop-info-wrap"
        style={
          this.props.ctgSort === "pro"
            ? { display: "block" }
            : { display: "none" }
        }>
          <div className="shop-info-list">
            <div className="shop-info-left">
              <div className="shop-info-title top">个人信息</div>
              <div className="shop-info-title">联系人</div>
              <div className="shop-info-title">联系电话</div>
              <div className="shop-info-title">手机号</div>
              <div className="shop-info-title">开店时间</div>
              <div className="shop-info-title">所在地区</div>
            </div>
            <div className="shop-info-right">
              <div className="shop-info-content top">时尚礼帽旗舰店</div>
              <div className="shop-info-content">张先生</div>
              <div className="shop-info-content">0595-28680909</div>
              <div className="shop-info-content">18862362686</div>
              <div className="shop-info-content">2017-09-02</div>
              <div className="shop-info-content">
                深圳市龙岗区泉山路环山新村72号
              </div>
            </div>
          </div>

          <div className="shop-info-des">
            <div className="shop-des-title">店铺简介：</div>
            <div className="shop-des-content">
              本店是家实体店，已经经营多年，经营出售、收购综合类图书，书店自2010年8月5日上孔夫子旧书网开店以来，以诚信，热情服务赢得各位书友好评。
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctgSort: state.ctgReducer.ctgSort,
  };
};

const mapDispatchTo = (dispatch) => {
  return {
    SortToScene: function () {
      dispatch(SortToSceneAction());
    },
    SortToPro: function () {
      dispatch(SortToProAction());
    },
    SortToShop: function () {
      dispatch(SortToShopAction());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchTo)(ShopInfo));
