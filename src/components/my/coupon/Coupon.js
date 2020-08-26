import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Coupon.scss';
import axios from '../../../utils/myaxios'

class Coupon extends Component {
  backToPre = () => {
    this.props.history.go(-1)
  }
  
  state = {
    useStatus: ['未使用', '已使用', '已过期'],
    myCoupon: [],
    tagShow: 0,
    couponShow: 0,
    used: '已使用',
    expired: '已过期'

  }

  componentDidMount(){
    axios.get('/my-coupon.json').then(res=>{
      console.log(res);
      this.setState({
        myCoupon: res
      })
    }).catch(err=>console.log(err))
  }

  handleTab = (index) => {
    this.setState({
      tagShow: index,
      couponShow: index
    })
  }

  toUseCoupon = () => {
    this.props.history.push('/shopinfo')
  }
  
  
  render() {
    return (
      <div className='mycoupon'>
        <div className='header'>
          <span onClick={this.backToPre}> {'<'} </span>
          <h2>我的优惠券</h2>
        </div>

        <div className='couponList'>
          <ul className='couponTag'>
            {this.state.useStatus.map((v,index)=><li key={v} onClick={this.handleTab.bind(this,index)} className={this.state.tagShow === index? "active" : ''}> {v} </li>)}
          </ul>

          <div className='couponContent'>
            {this.state.myCoupon.map((v, index)=>(
            <div className={this.state.used==v.status||this.state.expired==v.status? 'couponDetail used':'couponDetail'}  key={v.id} style={this.state.couponShow === index ? {display:'block'}: {display: 'none'}}>
                <div className='coupon-top'>
                  <div className='couponVal'>{v.coupon_value} </div>
                  <div className='timeLimit'>
                    <h3> {v.coupon_title} </h3>
                    <span> {v.coupon_time} </span>
                  </div>
                  <div className='useBtn' style={this.state.used==v.status||this.state.expired==v.status?{visibility:'hidden'}:{visibility:'visible'}} onClick={this.toUseCoupon}>{v.status} </div>
                </div>
                <div className='coupon-bottom'>
                  {v.store}
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(Coupon)
