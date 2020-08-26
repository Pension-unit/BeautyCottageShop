import React, { Component } from 'react'

import {withRouter} from "react-router-dom"

import "./itemsCollect.scss"

import Items from "../../publicComponents/itmes/Items"

 class itemsCollect extends Component {
   clickhandle= (params) => {
     this.props.history.go(-1)
   }
   
  render() {
    return (
      <div>
        <div className="articleCollect">
          <span className="articleCollectSymbol" onClick={this.clickhandle}>{"<"}</span>
          <span className="articleCollectTitle"><b>商品收藏</b></span>
        </div>
        <Items></Items>
        <Items></Items>
      </div>
    )
  }
}
export default withRouter(itemsCollect)
