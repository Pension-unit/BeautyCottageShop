import React, { Component } from 'react'

import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class home extends Component {
    state = {
        value: '美食',
      };
      componentDidMount() {
       
      }
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      render() {
        return (<div>
          <WhiteSpace />
          <SearchBar
            // value={this.state.value}
            placeholder="请输入关键字进行搜索"
            onSubmit={value => console.log(value, 'onSubmit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onChange={this.onChange}
          />
        </div>);
      }
}
