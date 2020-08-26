import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Login.scss';
// import axios from "../../../utils/yfmaxios";

import {connect} from 'react-redux';
//引入定义的动作
import {getName, getMM, login} from '../../../store/actioncreator/loginAction'

class Login extends Component {

  freeRegister = () => {
    this.props.history.push('/register')   // 跳转注册页面
  }

  // 原先写法
  // 获取用户名
  // getUsername = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // 获取密码
  // getPassword = (e) => {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }
  // 登录
  // loginHandler = () => {
  //   console.log(this.props)
  //   let username = this.props.username;
  //   let password = this.props.password;
  //   if(!username||!password){
  //     alert('账号或密码不能为空');
  //     return
  //   }
  //   let url = "/loginCheck?username="+username+"&&password="+password;
  //   axios.get(url).then(res=>{
  //     console.log(res);
  //     localStorage.setItem('userinfo', JSON.stringify(res.wdata))
  //     this.props.history.push('/') //登录成功跳转首页
  //   }).catch(err=>console.log(err))
  // }
  // state = {
  //   username: '',
  //   password: '',
  // }
  
  render() {
    return (
      <form className="login">
        <div className="leftNav"> {"<"} </div>
        <h2 className="title">手机账号登录</h2>
        <input id="username" type="text" placeholder="请输入手机号" onChange={this.props.getUsername}></input>
        <input id="password" type="password" placeholder="请输入密码" onChange={this.props.getPassword}></input>
        <div className="loginBtn" onClick={this.props.loginHandler}>登录</div>
        <div className='footer'> 
          <div onClick={this.freeRegister.bind(this)}>免费注册</div>
          <div>忘记密码</div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    username: state.loginReducer.username,
    password: state.loginReducer.password,
  }
}

//将行为注入到组件中
const mapDispatchToProps = (dispatch) => {
  return {
    getUsername: function(e){
      dispatch(getName(e)) //派发行为
    },

    getPassword: function(e){
      dispatch(getMM(e)) //派发行为
    },

    loginHandler: function(){
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      dispatch(login(username, password))
    }
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
