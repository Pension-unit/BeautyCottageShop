import React, { Component } from "react";
import "./QRCode.scss";
import axios from "../../utils/myaxios";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import payImg from"../../assets/images/pay.png"

class ProList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    payImg:payImg,
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
        <div className="pro-list-header">
          <div className="pro-list-header-top"></div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.go(-1)}
          >
            请支付
          </NavBar>
        </div>
        <div className="qrCode">
          <img src={this.state.payImg} className="payImg"></img>
        </div>
      </div>
    );
  }
}

export default withRouter(ProList);
