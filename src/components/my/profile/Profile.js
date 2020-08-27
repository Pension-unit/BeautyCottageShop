import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Profile.scss';
import axios from '../../../utils/yfmaxios'

class Profile extends Component {
  backToPre = () => {
    this.props.history.push('/my')
  }

  handleLogout = () => {
    this.setState({
      showbox: !this.state.showbox
    })
  }

  //取消退出
  cancleLogout = () => {
    this.setState({
      showbox: false
    })
  }
 
  //确认退出
  confirmLogout = () => {
    let userinfo = JSON.parse(localStorage.getItem('userinfo'));
    let oauth_token = userinfo.oauth_token
    console.log(oauth_token);
    axios.get('/logout?oauth_token='+oauth_token).then(res=>{
      console.log(res);
      if(res.ret===0){
        this.props.history.push('/login')
        window.localStorage.clear();
      }
    }).catch(err=>console.log(err))
  }

  state = {
    showbox: false,
  }
  
  
  render() {
    return (
      <div className='setBox'>
        <div className={this.state.showbox ? 'my-profile blurbc':'my-profile'}>
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

        <div className='logout' onClick={this.handleLogout}>
          退出
        </div>
      </div>

        <div className={this.state.showbox ? 'logoutBox viewLogout':'logoutBox'}>
        <div className='confirm'>确定要退出登录？</div>
        <div className='confirmLogout' onClick={this.confirmLogout}>退出登录</div>
        <div className='cancel' onClick={this.cancleLogout}>取消</div>
      </div>
      </div>
    )
  }
}

export default withRouter(Profile)
