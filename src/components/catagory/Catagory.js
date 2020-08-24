import React, { Component } from "react";
import "./Catagory.scss";
import axios from "../../utils/myaxios";


export default class Catagory extends Component {
  render() {
    return (
      <div>
        {/* 头部开始 */}
        <div className="catagory-header">
          <div className="app-catagory-search">
            <svg className="icon icon_header-search" aria-hidden="true">
              <use xlinkHref="#icon-sousuo"></use>
            </svg>
            <svg className="icon icon_header_speak" aria-hidden="true">
              <use xlinkHref="#icon-maikefeng"></use>
            </svg>
            <span className="string">|</span>
            <svg className="icon icon_header_camera" aria-hidden="true">
              <use xlinkHref="#icon-xiangji"></use>
            </svg>
            <input
              type="text"
              placeholder="输入关键字进行搜索"
              className="catagory-header-search"
            ></input>
          </div>
        </div>
        {/* 头部结束 */}

        {/* tab栏 */}
        <div className="catagory-tab-wrapper">
            <div className="catagory-tab">
                <div className="catagory-tab-item active">
                    <div>
                        场景分类
                    </div>
                </div>
                <div className="catagory-tab-item">
                    <div>
                        商品分类
                    </div>
                </div>
                <div className="catagory-tab-item">
                    <div>
                        精选店铺
                    </div>
                </div>
            </div>
        </div>
        {/* tab栏结束 */}
      </div>
    );
  }
}
