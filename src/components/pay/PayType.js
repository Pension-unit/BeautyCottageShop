import React, { Component } from "react";
import "./PayType.scss";
import axios from "../../utils/myaxios";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { Toast, Button } from "antd-mobile";

class PayType extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    payType: "zfb",
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
        <div className="pay-type-wrap">
          <div className="pro-list-header">
            <div className="pro-list-header-top"></div>
            <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => this.props.history.go(-1)}
            >
              选择支付方式
            </NavBar>
          </div>
          <div className="pay-type-button">
            <Button
              onClick={(params) => {
                this.setState({
                  payType: "zfb",
                });
              }}
            >
              <div className="pay-type-item">
                <div className="pay-type-left">
                  <div className="pay-type-icon">
                    <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_08_26/93a35de5-aadb-8194-b6b5-138908193b75.png"></img>
                  </div>
                  <div className="pay-type-content">
                    <div className="pay-type-title">支付宝支付</div>
                    <div className="pay-type-des">优先使用支付宝支付</div>
                  </div>
                </div>
                <div
                  className="pay-type-right"
                  style={
                    this.state.payType === "zfb"
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_08_26/9ec0271e-0699-d20b-cae2-be912b1892d6.png"></img>
                </div>
              </div>
            </Button>
            <Button
              onClick={(params) => {
                this.setState({
                  payType: "wx",
                });
              }}
            >
              <div className="pay-type-item">
                <div className="pay-type-left">
                  <div className="pay-type-icon">
                    <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_08_26/d73afa59-001d-44cf-96be-1f41d503d0a9.png"></img>
                  </div>
                  <div className="pay-type-content">
                    <div className="pay-type-title">微信支付</div>
                    <div className="pay-type-des">推荐微信用户使用</div>
                  </div>
                </div>
                <div
                  className="pay-type-right"
                  style={
                    this.state.payType === "wx"
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_08_26/9ec0271e-0699-d20b-cae2-be912b1892d6.png"></img>
                </div>
              </div>
            </Button>
          </div>
          <div className="pay-button">
            <Button onClick={(params) => {
              this.props.history.push("/qrCode")
            }
            }>确定</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PayType);
