import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './Profile.scss'

class Profile extends Component {
  backToPre = () => {
    this.props.history.push('/my')
  }
  
  render() {
    return (
      <div className='my-profile'>
        {/* 顶部 */}
        <div className='header'>
            <div onClick={this.backToPre}> {'<'} </div>
            <h2>设置</h2>
        </div>
        <div className='seftInfo sameCss'>
          <div>个人信息</div>
          <span> {">"} </span>
        </div>
        <div className='address sameCss'>
          <div>收货地址</div>
          <span> {">"} </span>
        </div>
        <div className='changeMM sameCss'>
          <div>修改密码</div>
          <span> {">"} </span>
          </div>
        <div className='about sameCss'>
          <div>关于一礼通</div>
          <span> {">"} </span>
        </div>

        <div className='logout'>
          退出
          <div></div>
        </div>

      </div>
    )
  }
}

export default withRouter(Profile)
