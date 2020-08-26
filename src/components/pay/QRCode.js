import React, { Component } from "react";
import "./QRCode.scss";
import axios from "../../utils/myaxios";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";

class ProList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
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
          <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_08_26/02603236-68e9-f25d-8383-0a7ae1f0c638.png"></img>
        </div>
      </div>
    );
  }
}

export default withRouter(ProList);
