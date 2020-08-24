import React, { Component } from "react";
// import { connect } from "react-redux";
export default class Cart extends Component {
  render() {
    return <div className="bcCart">
        <div className="bcHeader">
            <span>购物车</span>
        </div>
    </div>;
  }
}
// const mapStateToProps = (state) => {
//   return {
//     num: state.payload.num,
//   };
// };

// export default connect(mapStateToProps, null)(Cart);
