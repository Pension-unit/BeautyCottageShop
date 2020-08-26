import React, { Component } from 'react'

import axios from "../../../utils/myaxios"

import "./items.scss"

export default class product_items extends Component {
    state = {
        recommend_list: []
    }
    componentDidMount(){
        axios.get('/recommend-list.json')
        .then((res) => {  this.setState({ recommend_list: res }) })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {/* 推荐商品开始 */}
                <div className="home-recommend-product">
                    <div className="recommend-product-list">
                        {/* 子项目开始 */}
                        {this.state.recommend_list.map(v =>
                            <div className="recommend-product-item" key={v.id + Math.random() * 10000000000000000000000000}>
                                <div className="recommend-product-img">
                                    <img src={v.recommend_url} alt=""></img>
                                </div>
                                <div className="product-explain-box">
                                    <span className="recommend-product-explain">{v.recommend_text}</span>
                                </div>
                                <span className="recommend-product-price">
                                    <b>￥ {v.recommend_price}</b>
                                </span>
                            </div>
                        )}
                        {/* 子项目结束 */}
                    </div>
                </div>
                {/* 推荐商品结束 */}
            </div>
        )
    }
}
