import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './myShop.scss'
import axios from '../../../utils/myaxios'

class MyShop extends Component {

  backToPre = () => {
    this.props.history.push('/my')
  }

  componentDidMount(){
    axios.get('/catagory-shop.json').then(res=>{
      console.log(res);
      this.setState({
        shopList: res,
      })
    }).catch(err=>{console.log(err);})
  }

  state = {
    shopList: [],
  }
  
  render() {
    return (
      <div className='shopCollect'>
        <div className='header'>
          <span onClick={this.backToPre}> {'<'} </span>
          <h2>店铺收藏</h2>
        </div>

        <div className="shopList">
          {this.state.shopList.map(v=>
            <img src={v.shop_img_url} alt='' key={v.shop_img_url} className='shop'/>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(MyShop)
