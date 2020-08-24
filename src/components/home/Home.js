import React, { Component } from 'react'
// ant-design-mobile 轮播图组件
import { Carousel } from "antd-mobile";
// 引入样式
import "./Home.scss"
// 引入axios
import axios from "../../utils/myaxios"
// 引入限购一套图片
import OnyOneImgUrl from "../../assets/images/u59.jpg"
//引入推荐商品图片
import remmendProduct from "../../assets/images/p0.png"

export default class home extends Component {
  state = {
    // 返回的轮播图数据
    swiper_list: [],
    // 限时抢购数据
    flash_sale_product_list: [],
    // 限购一套数据
    onlyOneImg: OnyOneImgUrl,
    // 栏目数据
    column_list: [],
    // 推荐商品数据
    recommend_list: [],

    imgHeight: 176,
  }
  // 获取数据
  componentDidMount() {
   
    // 请求轮播图数据
    axios.get('/swiper-list.json').then((res) => { this.setState({ swiper_list: res }) }).catch(err => console.log(err))
    // 请求限时抢购数据
    axios.get('/flash-sale-product-list.json').then((res) => { this.setState({ flash_sale_product_list: res }) }).catch(err => console.log(err))
    // 请求栏目数据
    axios.get('/column-list.json').then((res) => { this.setState({ column_list: res }) }).catch(err => console.log(err))
    // 请求推荐商品数据
    axios.get('/recommend-list.json').then((res) => {  console.log(res);this.setState({ recommend_list: res }) }).catch(err=>console.log(err))
  }
  render() {
    return (
      <div>
        {/* 头部开始 */}
        <div className="home-header">
          <div className="app-home-search">
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
            <input type="text" placeholder="输入关键字进行搜索" className="home-header-search"></input>
          </div>
        </div>
        {/* 头部结束 */}
        {/* 内容 */}
        <div className="content">
          {/* 轮播开始 */}
          <div className="app-home-swiper">
            <Carousel
              autoplay={true}
              infinite
            >
              {this.state.swiper_list.map((item) => (
                <a
                  key={item.loopimg_url}
                  href={item.loopimg_href}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight,
                  }}
                >
                  <img
                    src={item.loopimg_url}
                    alt={item.loopimg_title}
                    style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
          {/* 轮播结束 */}
          {/* 限时抢购开始 */}
          <div className="home-flash-sale">
            {/* 限时头部开始 */}
            <div className="flahs-sale-header">
              <h2 className="flash-sale-h2">限时抢购</h2>
              <span className="flash-sale-hour">02</span>:
              <span className="flash-sale-minute">59</span>:
              <span className="flash-sale-second">38</span>
            </div>
            {/* 限时头部结束    */}
            {/* 限时内容开始 */}
            <div className="flash-sale-content">
              {this.state.flash_sale_product_list.map(v =>
                <div key={v.id} className="product_item">
                  <img src={v.flash_sale_product_url} alt=""></img>
                  <span>
                    <p className="product_item_price">￥{v.flash_sale_product_price}</p>
                    <p className="product_item_residue">仅剩{v.flash_sale_product_residue}件</p>
                  </span>
                </div>)}
            </div>
            {/* 限时内容结束 */}
          </div>
          {/* 限时抢购结束 */}
          {/* 限购一套开始 */}
          <div className="only-buy-one">
            <img src={this.state.onlyOneImg} alt=""></img>
          </div>
          {/* 限购一套结束 */}
          {/* 栏目开始 */}
          <div className="home-warp">
            {this.state.column_list.map(v =>
              <div className="home-column" key={v.column_url}>
                <div className="column-header">
                  <img src={v.column_url}></img>
                </div>
                <div className="column-middle">
                  <span className="column-title">{v.column_text_title}</span>
                  <p className="column-text">{v.column_text_content}</p>
                </div>
                <div className="column-bottom">
                  <span className="column-bottom-left">{v.column_explain}</span>
                  <span className="column-bottom-right">
                    <i className="column-watch">
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-zhibo-guankanrenshu"></use>
                      </svg>
                      <b>{v.column_watch_num}</b>
                    </i>
                    <i className="column-collect">
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-shoucang1"></use>
                      </svg>
                      <b>{v.column_collect_num}</b>
                    </i>
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* 栏目结束 */}
          {/* 推荐商品开始 */}
          <div className="home-recommend-product">
            <h2>推荐商品</h2>
            <div className="recommend-product-list">
              {/* 子项目开始 */}
              {this.state.recommend_list.map(v=>
                 <div className="recommend-product-item" key={v.id}>
                 <div className="recommend-product-img">
                   <img src={v.recommend_url} alt=""></img>
                 </div>
                 <div className="product-explain-box">
                 <span className="recommend-product-explain">{v.recommend_text}</span>
                 </div>
                 <span className="recommend-product-price">
                   <b>￥ {v.recommend_price}</b>
                 </span>
               </div> 
                )}
                {/* 子项目结束 */}
            </div>
          </div>
          {/* 推荐商品结束 */}
        </div>
      </div >
    );
  }
}