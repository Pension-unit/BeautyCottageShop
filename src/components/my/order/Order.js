import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Order.scss";
import axios from "../../../utils/myaxios";

class Order extends Component {
  backToPre = () => {
    this.props.history.go(-1)
  }
  
  state = {
    orderNavs: [
      "全部",
      "待付款",
      "待发货",
      "待收货",
      "待评价",
      "已评价",
      "已取消",
    ],
    orderLists: [],
    active: 0,
  };
  tagChange = (index) => {
    this.setState({
      active: index,
    });
  };

  componentDidMount() {
    axios
      .get("/order.json")
      .then((res) => {
        console.log(res);
        this.setState({
          orderLists: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="myorder">
        <div className="header">
          <div onClick={this.backToPre}> {"<"} </div>
          <h2>我的订单</h2>
        </div>
        
        {/* 导航 */}
        <div className="navs">
          {this.state.orderNavs.map((v, index) => (
            <li
              className={this.state.active === index ? "active" : ""}
              onClick={this.tagChange.bind(this, index)}
              key={v}
            >
              {v}
            </li>
          ))}
        </div>

        {/* 订单详情 */}
        <div className="order-lists">
          {this.state.orderLists.map((v, index) => (
            <div className="orderDetails" key={v.order_id}>
              <div className="top">
                <div className="storeName">{v.store}</div>
                <div className="orderStatus">{v.order_status}</div>
              </div>
              <div className="middle">
                <div className="itemDetail">
                  <img src={v.item_img_url} alt="" />
                  <div className="itemSpec">
                    <div className="itemTitle">{v.item_title}</div>
                    <div className="itemDesc">{v.item_desc}</div>
                  </div>
                </div>
                <div className="itemPrice">
                  <div className='price'>共{v.quantity}件商品  价格：{v.item_price}元</div>
                </div>
              </div>
              <div className="bottom">
                <div className='btn'> {v.action} </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default withRouter(Order);
