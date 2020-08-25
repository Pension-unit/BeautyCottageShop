import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Login.scss'
import axios from "../../../utils/yfmaxios";


class Login extends Component {

  // 跳转注册页面
  freeRegister = (params) => {
    this.props.history.push('/register')
  }

  // 获取用户名
  getUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  // 获取密码
  getPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  // 登录
  loginHandler = (params) => {
    let username = this.state.username;
    let password = this.state.password;
    if(!username||!password){
      alert('账号或密码不能为空');
      return
    }
    let url = "/loginCheck?username="+username+"&&password="+password;
    axios.get(url).then(res=>{
      console.log(res);
      localStorage.setItem('userinfo', JSON.stringify(res.wdata))
      this.props.history.push('/') //登录成功跳转首页
    }).catch(err=>console.log(err))
  }
  
  state = {
    username: '',
    password: '',
  }
  
  render() {
    return (
      <form className="login">
        <div className="leftNav"> {"<"} </div>
        <h2 className="title">手机账号登录</h2>
        <input type="text" placeholder="请输入手机号" onChange={this.getUsername}></input>
        <input type="password" placeholder="请输入密码" onChange={this.getPassword}></input>

        <div className="loginBtn" onClick={this.loginHandler.bind(this)}> 
          登录
        </div>

        <div className='footer'> 
          <div onClick={this.freeRegister.bind(this)}>免费注册</div>
          <div>忘记密码</div>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
