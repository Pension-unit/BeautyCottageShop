import React, { Component } from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
class Cart extends Component {
  render() {
    return (
      <div className="bcCart">
        <div className="bcMobileTitle"></div>
        <div className="bcHeader">
          <span>{this.props.num}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    num: state.numReducer.num,
  };
};


export default withRouter(connect(mapStateToProps, null)(Cart));
