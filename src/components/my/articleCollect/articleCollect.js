import React, { Component } from 'react'

import Items from "../../publicComponents/article_list/Articles"

import "./articleCollcet.scss"

import { withRouter } from "react-router-dom"

class articleCollect extends Component {
  clickHandle = (params) => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div>
        <div className="articleCollect">
          <span className="articleCollectSymbol" onClick={this.clickHandle}>{"<"}</span>
          <span className="articleCollectTitle"><b>文章收藏</b></span>
        </div>
        <Items></Items>
        <Items></Items>
      </div>
    )
  }
}
export default withRouter(articleCollect)
