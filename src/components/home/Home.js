import React, { Component } from 'react'
// ant-design-mobile 轮播图组件
import { Carousel } from "antd-mobile";
// 引入样式
import "./Home.scss"
// 引入axios
import axios from "axios"
// 引入轮播图片
import LoopImg1 from "../../assets/images/p13.jpg"
import LoopImg2 from "../../assets/images/p14.jpg"
import LoopImg3 from "../../assets/images/p15.jpg"
// 引入限时抢购图片
import productImg1 from "../../assets/images/p16.png"
import productImg2 from "../../assets/images/p17.png"
import productImg3 from "../../assets/images/p18.png"
import productImg4 from "../../assets/images/p19.png"
// 引入限购一套图片
import OnyOneImgUrl from "../../assets/images/u59.jpg"
// 引入栏目图片
import columnImg1 from "../../assets/images/pyq66.jpg"
export default class home extends Component {
  state = {
    data: ['1', '2', '3'],
    // 返回的轮播图数据
    swiper_list: [
      {
        loopimg_url: LoopImg1,
        loopimg_href: "#",
        loopimg_title: "",
      },
      {
        loopimg_url: LoopImg2,
        loopimg_href: "#",
        loopimg_title: "",
      },
      {
        loopimg_url: LoopImg3,
        loopimg_href: "#",
        loopimg_title: "",
      }
    ],
    // 限时抢购数据
    flash_sale_product_list: [
      {
        id: 1,
        flash_sale_product_url: productImg1,
        flash_sale_product_price: 69,
        flash_sale_product_residue: 35
      },
      {
        id: 2,
        flash_sale_product_url: productImg2,
        flash_sale_product_price: 70,
        flash_sale_product_residue: 68
      },
      {
        id: 3,
        flash_sale_product_url: productImg3,
        flash_sale_product_price: 74,
        flash_sale_product_residue: 41
      },
      {
        id: 4,
        flash_sale_product_url: productImg4,
        flash_sale_product_price: 73,
        flash_sale_product_residue: 106
      },
    ],
    // 栏目数据
    columnImg1: columnImg1,
    // 限购一套数据
    onlyOneImg: OnyOneImgUrl,

    imgHeight: 176,
  }
  // 获取数据
  componentDidMount(){
    console.log(LoopImg1);
    axios.get('/data/swiper-list.json').then((res)=>{
      console.log(res.data);
      this.setState({
        swiper_list:res.data
      })
    }).catch((err)=>{
      console.log(err);
    })
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
          <div className="home-column">
            <div className="column-header">
              <img src={this.state.columnImg1}></img>
            </div>
            <div className="column-middle">
              <span className="column-title">致女友,想把天上的星星,摘下送给你</span>
              <p className="column-text">如果你爱上了一朵长在星星上的花，那么夜间，你看着天空就感到甜蜜愉快，所有的星星都好像开着花</p>
            </div>
            <div className="column-bottom">
              <span className="column-bottom-left">栏目送女友</span>
              <span className="column-bottom-right">
                <i className="column-watch">
                  <svg class="icon" aria-hidden="true">
                    <use xlinkHref="#icon-zhibo-guankanrenshu"></use>
                  </svg>
                  <b>1921</b>
                </i>
                <i className="column-collect">
                  <svg class="icon" aria-hidden="true">
                    <use xlinkHref="#icon-shoucang1"></use>
                  </svg>
                  <b>173</b>
                </i>
              </span>
            </div>
          </div>
          {/* 栏目结束 */}
        </div>
      </div >
    );
  }
}
