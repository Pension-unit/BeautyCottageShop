import React, { Component } from "react";
import "./Catagory.scss";
import axios from "../../utils/myaxios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  SortToSceneAction,
  SortToProAction,
  SortToShopAction,
} from "../../store/actionCreator/ctgActionCreator";

class Catagory extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    proType: "jx",
    catatorySceneList: [],
  };

  componentDidMount() {
    axios.get("/catagory-scene.json").then((res) => {
      this.setState({
        catatorySceneList: res,
      });
      console.log("list", this.state.catatorySceneList);
    });
  }

  render() {
    return (
      <div>
        {/* 头部开始 */}
        <div className="catagory-header">
          <div className="app-catagory-search">
            <svg className="icon icon_header-search" aria-hidden="true">
              <use xlinkHref="#icon-sousuo"></use>
            </svg>
            <svg className="icon icon_header_speak" aria-hidden="true">
              <use xlinkHref="#icon-maikefeng"></use>
            </svg>
            <span className="string">|</span>
            <svg className="icon icon_header_camera" aria-hidden="true">
              <use xlinkHref="#icon-xiangji"></use>
            </svg>
            <input
              type="text"
              placeholder="输入关键字进行搜索"
              className="catagory-header-search"
            ></input>
          </div>
        </div>
        {/* 头部结束 */}

        {/* tab栏 */}
        <div className="catagory-tab-wrapper">
          <div className="catagory-tab">
            {/* <div className="catagory-tab-item active" onClick={this.props.SortToScene}> */}
            <div
              className={
                this.props.ctgSort == "scene"
                  ? "catagory-tab-item active"
                  : "catagory-tab-item"
              }
              onClick={this.props.SortToScene}
            >
              <div>场景分类</div>
            </div>
            <div
              className={
                this.props.ctgSort == "pro"
                  ? "catagory-tab-item active"
                  : "catagory-tab-item"
              }
              onClick={this.props.SortToPro}
            >
              <div>商品分类</div>
            </div>
            <div
              className={
                this.props.ctgSort == "shop"
                  ? "catagory-tab-item active"
                  : "catagory-tab-item"
              }
              onClick={this.props.SortToShop}
            >
              <div>精选店铺</div>
            </div>
          </div>
        </div>
        {/* tab栏结束 */}

        {/* 场景分类 */}
        <div
          className="catagory-scene"
          style={
            this.props.ctgSort == "scene"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          {/* 循环开始 */}
          {/* 对象 */}
          {/* <div className="catagory-type-ob">
            {this.state.catatorySceneList.map(v => (
              <div className="type-ob-header" key={v.title}>
                <div className="type-ob-line"></div>
                <div className="type-ob-title">{v.title}</div>
                <div className="type-ob-line"></div>
                {v.content.map(m => 
                  <div className="type-ob-wrap" key={m.item_title}>
                    <div className="type-ob-content">
                      <div className="type-ob-item">
                        <div className="ob-item-left">
                          <div className="item-left-title">{m.item_title}</div>
                          <div className="item-left-des">{m.item_des}</div>
                        </div>
                        <div className="ob-item-right">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref={m.item_icon}></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))} */}

            {/* 内容 */}
            {/* <div className="type-ob-wrap">
              <div className="type-ob-content">
                <div className="type-ob-item">
                  <div className="ob-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="ob-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* 循环开始 */}
          {/* 对象 */}
          <div className="catagory-type-ob">
            <div className="type-ob-header">
              <div className="type-ob-line"></div>
              <div className="type-ob-title">对象</div>
              <div className="type-ob-line"></div>
            </div>

            {/* 内容 */}
            <div className="type-ob-wrap">
              <div className="type-ob-content">
                <div className="type-ob-item">
                  <div className="ob-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="ob-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="type-ob-content">
                <div className="type-ob-item">
                  <div className="ob-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="ob-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="type-ob-content">
                <div className="type-ob-item">
                  <div className="ob-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="ob-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="catagory-type-style">
            <div className="type-style-header">
              <div className="type-style-line"></div>
              <div className="type-style-title">风格</div>
              <div className="type-style-line"></div>
            </div>

            <div className="type-style-wrap">
              {/* 循环开始 */}

              <div className="type-style-content">
                <div className="type-style-item">
                  <div className="style-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="style-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="type-style-content">
                <div className="type-style-item">
                  <div className="style-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="style-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="type-style-content">
                <div className="type-style-item">
                  <div className="style-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="style-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="type-style-content">
                <div className="type-style-item">
                  <div className="style-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="style-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="type-style-content">
                <div className="type-style-item">
                  <div className="style-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="style-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="type-style-content">
                <div className="type-style-item">
                  <div className="style-item-left">
                    <div className="item-left-title">送女友</div>
                    <div className="item-left-des">每天爱她多一点</div>
                  </div>
                  <div className="style-item-right">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-iconcopy"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="catagory-pro"
          style={
            this.props.ctgSort == "pro"
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <div className="catagory-pro-tab">
            {/* <div className="pro-tab-item active" onClick={(params) => { */}
            <div
              className={
                this.state.proType == "jx"
                  ? "pro-tab-item active"
                  : "pro-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  proType: "jx",
                });
              }}
            >
              <span>精选推荐</span>
            </div>
            <div
              className={
                this.state.proType == "sw"
                  ? "pro-tab-item active"
                  : "pro-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  proType: "sw",
                });
              }}
            >
              <span>商务文具</span>
            </div>
            <div
              className={
                this.state.proType == "jj"
                  ? "pro-tab-item active"
                  : "pro-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  proType: "jj",
                });
              }}
            >
              <span>家居生活</span>
            </div>
            <div
              className={
                this.state.proType == "sm"
                  ? "pro-tab-item active"
                  : "pro-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  proType: "sm",
                });
              }}
            >
              <span>数码家电</span>
            </div>
            <div
              className={
                this.state.proType == "gy"
                  ? "pro-tab-item active"
                  : "pro-tab-item"
              }
              onClick={(params) => {
                this.setState({
                  proType: "gy",
                });
              }}
            >
              <span>工艺收藏</span>
            </div>
          </div>
          <div className="pro-right">
            <div className="pro-right-header">
              <div className="header-line"></div>
              <div className="header-title">二级分类名称</div>
              <div className="header-line"></div>
            </div>
            <div className="pro-right-content">
              <div className="pro-content-item">
                <div className="pro-right-content-top">
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-anmo"></use>
                  </svg>
                </div>
                <div className="pro-right-content-bottom">保健按摩</div>
              </div>

              <div className="pro-content-item">
                <div className="pro-right-content-top">
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-anmo"></use>
                  </svg>
                </div>
                <div className="pro-right-content-bottom">保健按摩</div>
              </div>

              <div className="pro-content-item">
                <div className="pro-right-content-top">
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-anmo"></use>
                  </svg>
                </div>
                <div className="pro-right-content-bottom">保健按摩</div>
              </div>
            </div>
          </div>
        </div>

        {/* 精选店铺*/}
        <div
          className="catagory-shop"
          style={
            this.props.ctgSort == "shop"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <div className="catagory-shop-wrap">
            <div className="catagory-shop-item">
              <div className="shop-item-left">
                <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_08_25/40231e90-33a9-5b97-2662-dfe494d8fa34.png"></img>
              </div>
              <div className="shop-item-right">
                <div className="shop-item-title">一礼通官方旗舰店</div>
                <div className="shop-item-des">
                  礼品定制服务，以诚信，热情服务获得大家一致认可
                </div>
                <div className="shop-item-rec">推荐指数：9.8</div>
              </div>
            </div>

            <div
              className="catagory-shop-item"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              <div className="shop-item-left">
                <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_08_25/40231e90-33a9-5b97-2662-dfe494d8fa34.png"></img>
              </div>
              <div className="shop-item-right">
                <div className="shop-item-title">一礼通官方旗舰店</div>
                <div className="shop-item-des">
                  礼品定制服务，以诚信，热情服务获得大家一致认可
                </div>
                <div className="shop-item-rec">推荐指数：9.8</div>
              </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchTo)(Catagory));
