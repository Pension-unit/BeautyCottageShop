import React, { Component } from 'react'

import Items from "../../publicComponents/article_list/Articles"

import "./articleCollcet.scss"

export default class articleCollect extends Component {
  render() {
    return (
      <div>
        <div className="articleCollect">
          <span className="articleCollectSymbol">{"<"}</span>
          <span className="articleCollectTitle"><b>文章收藏</b></span>
        </div>
        <Items></Items>
        <Items></Items>
      </div>
    )
  }
}
