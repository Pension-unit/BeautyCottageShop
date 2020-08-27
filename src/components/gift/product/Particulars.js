import React, { Component } from "react";
import axios from "../../../utils/myaxios";
import { NavBar, Icon } from "antd-mobile";
import "./Particulars.css";
import {withRouter} from 'react-router-dom'

class Particulars extends Component {
  constructor() {
    super();
    this.state = {
      particulars_list: [],
    };
  }
  componentDidMount() {
    axios
      .get("/particulars.json")
      .then((res) => {
        console.log(res);
        this.setState({
          particulars_list: res,
        });
        console.log(this.state.particulars_list);
      })
      .catch((err) => console.log(err));
  }
  handleTo = () => {
    this.props.history.go('/gift/shopping')
  }
  render() {
    return (
      <div className="particularsBox">
        <NavBar
          mode="light"
          icon={<Icon type="left" style={{ color: "#000000" }} />}
          onClick={() => this.props.history.go(-1)}
        >
          攻略详情
        </NavBar>
        {this.state.particulars_list.map((item, index) => {
          return (
            <div className="particulars" key={index}>
              <div className="particulars_title">{item.strategy_title}</div>
              <div className="particulars_img">
                <img src={item.strategy_img} alt="" />
              </div>
              <div className="particulars_foot">
                <div className="particulars_foot_left">
                  <p className="top">{item.strategy_head}</p>
                  <p className="bottom">{item.strategy_price}</p>
                </div>
                <div className="particulars_foot_right">
                  <button className="particulars_btn" onClick={this.handleTo} >立即购买</button>
                </div>
              </div>
              <div className="particulars_img">
                <img src={item.strategy_imga} alt="" />
              </div>
              <div className="particulars_foot">
                <div className="particulars_foot_left">
                  <p className="top">{item.strategy_heada}</p>
                  <p className="bottom">{item.strategy_pricea}</p>
                </div>
                <div className="particulars_foot_right">
                  <button className="particulars_btn" onClick={this.handleTo} >立即购买</button>
                </div>
              </div>
              <div className="particulars_content">{item.strategy_content}</div>
              <br />
              <div className="particulars_content">
                {item.strategy_content1}
              </div>
              <div className="particulars_content">
                {item.strategy_content2}
              </div>
              <br />
              <div className="particulars_content">
                {item.strategy_content3}
              </div>
              <br />
              <div className="particulars_content">
                {item.strategy_content4}
              </div>
              <div className="particulars_transpond">
                <div>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-shoucang1"></use>
                  </svg>
                  {item.strategy_praise}
                </div>
                <div>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-fenxiang"></use>
                  </svg>
                  {item.strategy_transpond}
                </div>
                <div
                  onClick={() => {
                    this.props.history.push("/gift/discuss");
                  }}
                >
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-pinglun"></use>
                  </svg>
                  {item.strategy_evaluate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default (withRouter)(Particulars)