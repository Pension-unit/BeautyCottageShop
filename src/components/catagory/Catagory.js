import React, { Component } from "react";
import "./Catagory.scss";
import axios from "../../utils/myaxios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  SortToSceneAction,
  SortToProAction,
  SortToShopAction,
} from "../../store/actioncreator/ctgActionCreator";

class Catagory extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    proType: "jx",
    catatorySceneList: [],
    catatgoryProList: [],
    catatgoryShopList: [],
  };

  componentDidMount() {
    axios
      .get("/catagory-scene.json")
      .then((res) => {
        this.setState({
          catatorySceneList: res,
        });
      })
      .catch((err) => console.log(err));
    axios
      .get("/catagory-pro.json")
      .then((res) => {
        this.setState({
          catatgoryProList: res,
        });
      })
      .catch((err) => console.log(err));
    axios
      .get("/catagory-shop.json")
      .then((res) => {
        this.setState({
          catatgoryShopList: res,
        });
      })
      .catch((err) => console.log(err));

      this.props.SortToScene();

  }

  render() {
    return (
      <div>
        {/* 头部开始 */}
        <div className="catagory-header" style={
                this.props.ctgSort === "scene"
                  ? {}
                  : {background: "#343339"}
              }>
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
            <div
              className={
                this.props.ctgSort === "scene"
                  ? "catagory-tab-item active"
                  : "catagory-tab-item"
              }
              onClick={this.props.SortToScene}
            >
              <div>场景分类</div>
            </div>
            <div
              className={
                this.props.ctgSort === "pro"
                  ? "catagory-tab-item active"
                  : "catagory-tab-item"
              }
              onClick={this.props.SortToPro}
            >
              <div>商品分类</div>
            </div>
            <div
              className={
                this.props.ctgSort === "shop"
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
            this.props.ctgSort === "scene"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          {/* 对象 */}
          <div className="catagory-type-ob">
            {this.state.catatorySceneList.map((v) => (
              <div key={v.id}>
                <div className="type-ob-header">
                  <div className="type-ob-line"></div>
                  <div className="type-ob-title">{v.title}</div>
                  <div className="type-ob-line"></div>
                </div>
                <div className="type-ob-wrap">
                  {v.content.map((m) => (
                    <div className="type-ob-content" key={m.item_des}>
                      <div
                        className="type-ob-item"
                        onClick={(params) => {
                          this.props.history.push("/prolist");
                        }}
                      >
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 商品分类 */}
        <div
          className="catagory-pro"
          style={
            this.props.ctgSort === "pro"
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <div className="catagory-pro-tab">
            {this.state.catatgoryProList.map((v) => (
              <div
                className={
                  this.state.proType === v.tab_type
                    ? "pro-tab-item active"
                    : "pro-tab-item"
                }
                onClick={(params) => {
                  this.setState({
                    proType: v.tab_type,
                  });
                }}
                key={v.tab_title}
              >
                <span>{v.tab_title}</span>
              </div>
            ))}
          </div>

          <div className="pro-right">
            {this.state.catatgoryProList.map((v) => (
              <div
                key={v.tab_type}
                style={
                  this.state.proType === v.tab_type
                    ? { display: "flex" }
                    : { display: "none" }
                }
                className="pro-right-header"
              >
                <div className="header-line"></div>
                <div className="header-title">二级分类名称</div>
                <div className="header-line"></div>
              </div>
            ))}

            <div className="pro-right-content">
              {this.state.catatgoryProList.map((v, vIndex) =>
                v.content.map((m, mIndex) => (
                  <div
                    className="pro-content-item"
                    key={[vIndex, mIndex]}
                    style={
                      this.state.proType === v.tab_type
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                    onClick={(params) => {
                      this.props.history.push("/prolist");
                    }}
                  >
                    <div className="pro-right-content-top">
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref={m.item_icon}></use>
                      </svg>
                    </div>
                    <div className="pro-right-content-bottom">
                      {m.item_title}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* 精选店铺*/}
        <div
          className="catagory-shop"
          style={
            this.props.ctgSort === "shop"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <div className="catagory-shop-wrap">
            {this.state.catatgoryShopList.map((v, index) => (
              <div
                className="catagory-shop-item"
                key={index * v.shop_rec}
                style={index % 2 === 0 ? { backgroundColor: "#EEEEEE" } : {}}
                onClick={(params) => {
                  this.props.history.push("/shopInfo");
                }}
              >
                <div className="shop-item-left">
                  <img src={v.shop_img_url}></img>
                </div>
                <div className="shop-item-right">
                  <div className="shop-item-title">{v.shop_title}</div>
                  <div className="shop-item-des">{v.shop_des}</div>
                  <div className="shop-item-rec">推荐指数：{v.shop_rec}</div>
                </div>
              </div>
            ))}
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
