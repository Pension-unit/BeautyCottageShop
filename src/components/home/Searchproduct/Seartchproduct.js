import React, { Component } from 'react'

import { SearchBar } from 'antd-mobile';

import { withRouter } from 'react-router-dom';

class SearchProduct extends Component {
    render() {
        return (
            <div>
                <div className="search-product-header">
                    {/* 搜索框开始 */}
                    <SearchBar
                        placeholder="请输入关键字进行搜索"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => { this.props.history.push("/") }}
                        showCancelButton
                        onChange={this.onChange}
                    />
                    {/* 搜索框结束 */}
                </div>
                {/* 内容部分 */}
                <div className="search-content">
                    {/* tab栏开始 */}
                    <div className="catagory-tab-wrapper">
                        <div className="catagory-tab">
                            {/* <div className="catagory-tab-item active" onClick={this.props.SortToScene}> */}
                            <div
                                className={
                                    this.props.ctgSort == "scene"
                                        ? "catagory-tab-item active"
                                        : "catagory-tab-item"
                                }
                                onClick={this.props.SortToScene}
                            >
                                <div>场景分类</div>
                            </div>
                            <div
                                className={
                                    this.props.ctgSort == "pro"
                                        ? "catagory-tab-item active"
                                        : "catagory-tab-item"
                                }
                                onClick={this.props.SortToPro}
                            >
                                <div>商品分类</div>
                            </div>
                            <div
                                className={
                                    this.props.ctgSort == "shop"
                                        ? "catagory-tab-item active"
                                        : "catagory-tab-item"
                                }
                                onClick={this.props.SortToShop}
                            >
                                <div>精选店铺</div>
                            </div>
                        </div>
                    </div>
                    {/* tab结束 */}
                </div>
            </div>
        )
    }
}
export default withRouter(SearchProduct)