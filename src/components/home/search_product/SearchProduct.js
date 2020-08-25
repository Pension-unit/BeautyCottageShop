import React, { Component } from 'react'

import { SearchBar } from 'antd-mobile';

import {withRouter} from 'react-router-dom';

 class SearchProduct extends Component {
    render() {
        return (
            <div>
                {/* 搜索框开始 */}
                <SearchBar
                    placeholder="请输入关键字进行搜索"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() =>{this.props.history.push("/")}}
                    showCancelButton
                    onChange={this.onChange}
                />
                 {/* 搜索框结束 */}
            </div>
        )
    }
}
export default withRouter(SearchProduct)