import React, { Component } from "react";
import axios from "../../utils/myaxios";
import "./My.scss";
import {withRouter} from 'react-router-dom';

class My extends Component {
  componentDidMount() {
    axios.get("/my.json")
      .then((res) => {
        // console.log(res);
        this.setState({
            itemImg:res  
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  state = {
      itemImg: [],
  };


  checkAllOrder  = () => {
    console.log(this)
    this.props.history.push('/register')
  }
  

  render() {
    return (
      <div>
        {/* 头部 */}
        <div className="my-header">
          <div className="header-profileImg">
            <img></img>
          </div>
          <div className="header-profileName"> 梅梅 </div>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-shezhi"></use>
          </svg>
        </div>

        {/* 我的订单 */}
        <div className="my-order">
          <div className="order-header">
            <h2>我的订单</h2>
            <div className="checkorder">
              <div onClick={this.checkAllOrder.bind(this)}>查看全部订单</div>
              <span> {">"} </span>
            </div>
          </div>
          <div className="order-process">
            <div className="order-step">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-daifukuan"></use>
              </svg>
              <h3>待付款</h3>
            </div>
            <div className="order-step">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-daifahuo"></use>
              </svg>
              <h3>待发货</h3>
            </div>
            <div className="order-step">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-daishouhuo"></use>
              </svg>
              <h3>待收货</h3>
            </div>
            <div className="order-step">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-yijianfankui"></use>
              </svg>
              <h3>已完成</h3>
            </div>
            <div className="order-step">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-tuihuanhuo"></use>
              </svg>
              <h3>退换货</h3>
            </div>
          </div>
        </div>

        {/* 商品收藏 */}
        <div className="item-collect">
          <div className="title">
            <h2>商品收藏</h2>
            <span> {">"} </span>
          </div>
          <div className="item-list">
              {this.state.itemImg.map(v=>
                <img src={v.itemImg_url} alt="" key={v.itemImg_url}/>
              )}
           </div>                              
        </div>

        <div className="pay-attention">
          {/* 文章收藏 */}
          <div className="article-collect same">
            <div className="left">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-shoucang1"></use>
              </svg>
              <h2>文章收藏</h2>
            </div>
            <span> {">"} </span>
          </div>

          {/* 店铺关注 */}
          <div className="follow-shop same">
            <div className="left">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-dianpu"></use>
              </svg>
              <h2>店铺关注</h2>
            </div>
            <span> {">"} </span>
          </div>

          {/* 优惠券 */}
          <div className="my-coupon same">
            <div className="left">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-youhuijuan"></use>
              </svg>
              <h2>我的优惠券</h2>
            </div>
            <span> {">"} </span>
          </div>
        </div>

        <div className="afterSale">
          {/* 联系客服 */}
          <div className="customer-serve same">
            <div className="left">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-tongshi"></use>
              </svg>
              <h2>联系客服</h2>
            </div>
            <span> {">"} </span>
          </div>
          {/* 意见反馈 */}
          <div className="feedback same">
            <div className="left">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-pinglun"></use>
              </svg>
              <h2>意见反馈</h2>
            </div>
            <span> {">"} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(My)