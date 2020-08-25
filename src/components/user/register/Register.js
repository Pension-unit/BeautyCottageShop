import React, { Component } from 'react'
import './Register.scss'
import {withRouter} from 'react-router-dom'
import axios from "../../../utils/yfmaxios";

class Register extends Component {

  // // 下一步按钮
  // nextHandler = (params) => {
  //   this.props.history.push('/register_2')
  // }
  // 已有账号，跳到登录
  toLogin = function(){
    // console.log(this);
    this.props.history.push('/login')
  }


  //获取用户电话号码
  getMobile = (e) => {
    // console.log(e.target.value);
    this.setState({
      mobile: e.target.value
    })
  }
  //检查号码的合法性 (11位号码)
  checkMobile = (mobilephone) => {
    var phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if(mobilephone.length === 11){
      if(phone.test(mobilephone)){
        return true
      }
    }
    return false;
  }
  
  // 发送验证码
  sendCode = (params) => {
    console.log('点击了发送验证码')
    let is_valid = this.checkMobile(this.state.mobile)? true : false;
    if(is_valid){ //如果号码有效，发请求获取验证码
      axios.get('/getMobileCode?mobile='+this.state.mobile).then(res=>{
        console.log(res);
      }).catch(err=>{console.log(err);})
    }else{
      alert("输入的号码有误，请重新输入！");
    }
  }

  //保存验证码
  saveCode = (e) => {
    this.setState({
      code: e.target.value
    })
  }
  // 获取密码
  getPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  
  //注册按钮
  registHandler = () => {
    let username = this.state.mobile;
    let code = this.state.code;
    let password = this.state.password;
    if(!username||!code||!password){
      alert('用户名或者验证码或者密码不能为空')
      return
    }

    let url = "/createUser?mobile="+username+"&&username="+username+"&&code="+code+"&&password="+password;
    axios.get(url).then(res=>{
      console.log(res)
      if(res.ret===0){
        this.props.history.push('/login')
      }
      if(res.ret===2){
        alert('此号码已注册过,请登录！')
        this.props.history.push('/login')
      }
    }).catch(err=>console.log(err))
  }
  
  state = {
    mobile: '', //手机号码（用户名）
    code: '',   //验证码
    password: '',
  }

  render() {
    return (
      
        <form className='register'>
          <div className='leftNav'> {'<'} </div>
          <h2 className='title'>欢迎注册俪人小屋</h2>
          <input type='text' placeholder='请输入手机号' onChange={this.getMobile}></input>
          {/* <section className='codeTest'>
            <input type='text' placeholder='图形验证码'></input>
            <div className='verifi-code'></div>
          </section> */}
          <section className='getCode'>
            <input type='number' placeholder='短信验证码' onChange={this.saveCode}></input>
            <div className='getCodeBtn' onClick={this.sendCode}>发送验证码</div>
          </section>
          <input type='password' placeholder='请设置6-16位密码' onChange={this.getPassword}></input>
          <div className='nextBtn' onClick={this.registHandler.bind(this)}> 注册 </div>
          <div className='toLogin' onClick={this.toLogin.bind(this)}>已有账号，立即登录</div>
        
        </form> 
      
    )
  }
}

export default withRouter(Register)
