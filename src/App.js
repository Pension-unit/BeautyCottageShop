import React, { Component } from "react"
// 引入路由
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Gift from "./components/gift/Gift"
import Cart from "./components/cart/Cart"
import Catagory from './components/catagory/Catagory'
import Tabbar from './components/tabbar/Tabbar'
import My from './components/my/My'
import Particulars from './components/gift/product/Particulars'
import Discuss from './components/gift/product/Discuss'
import Shopping from './components/gift/product/Shopping'
import Register from './components/user/register/Register'
import Login from './components/user/login/Login'
import ProList from './components/catagory/ProList'
import ShopInfo from './components/catagory/ShopInfo'
import PayType from './components/pay/PayType'
import QRCode from './components/pay/QRCode'
// 引入搜索产品组件
import SearchProduct from "./components/home/Searchproduct/Seartchproduct"
import Profile from "./components/my/profile/Profile"
import Shopcollect from "./components/my/shopCollect/myShop"
import Coupon from "./components/my/coupon/Coupon"
import Feedback from "./components/my/feedback/Feedback"
import Order from "./components/my/order/Order"

import Items from "./components/publicComponents/itmes/Items"

import Articles from "./components/publicComponents/article_list/Articles"
// 文章收藏
import ArticleCollect from "./components/my/articleCollect/articleCollect"
// 商收收藏
import ItemsCollect from "./components/my/itemCollect/itemsCollect"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <Tabbar><Home></Home></Tabbar>}></Route>
          <Route exact path="/cart" render={() => <Tabbar><Cart></Cart></Tabbar>}></Route>
          <Route exact path="/catagory" render={() => <Tabbar><Catagory></Catagory></Tabbar>}></Route>
          <Route exact path="/gift" render={() => <Tabbar><Gift></Gift></Tabbar>}></Route>
          <Route exact path="/gift/particulars" render={() => <Particulars></Particulars>}></Route>
          <Route exact path="/gift/discuss" render={() => <Discuss></Discuss>}></Route>
          <Route exact path="/gift/shopping" render={() => <Shopping></Shopping>}></Route>
          <Route exact path="/payType" render={() => <PayType></PayType>}></Route>
          <Route exact path="/qrCode" render={() => <QRCode></QRCode>}></Route>
          <Route exact path="/my" render={() => <Tabbar><My></My></Tabbar>}></Route>
          <Route exact path='/register' render={()=><Register></Register>}></Route>
          <Route exact path='/login' render={()=><Login></Login>}></Route>
          <Route exact path='/seapro' render={()=><SearchProduct></SearchProduct>}></Route>
          <Route exact path='/itmes' render={()=><Items></Items>}></Route>
          <Route exact path='/article' render={()=><Articles></Articles>}></Route>
          <Route exact path='/artcol' render={()=><ArticleCollect></ArticleCollect>}></Route>
          <Route exact path='/prolist' render={()=><ProList></ProList>}></Route>
          <Route exact path='/profile' render={()=><Profile></Profile>}></Route>
          <Route exact path='/shopcollect' render={()=><Shopcollect></Shopcollect>}></Route>
          <Route exact path='/coupon' render={()=><Coupon></Coupon>}></Route>
          <Route exact path='/shopInfo' render={()=><ShopInfo></ShopInfo>}></Route>
          <Route exact path='/itemcol' render={()=><ItemsCollect></ItemsCollect>}></Route>
          <Route exact path='/feedback' render={()=><Feedback></Feedback>}></Route>
          <Route exact path='/order' render={()=><Order></Order>}></Route>
        </Router>
      </div>
    )
  }
}


