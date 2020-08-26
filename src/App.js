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
import ShopInfo from './components/catagory/ShopInfo'
// 引入搜索产品组件
import SearchProduct from "./components/home/Searchproduct/Seartchproduct"
import Profile from "./components/my/profile/Profile"

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
          <Route exact path="/my" render={() => <Tabbar><My></My></Tabbar>}></Route>
          <Route exact path='/register' render={()=><Register></Register>}></Route>
          <Route exact path='/login' render={()=><Login></Login>}></Route>
          <Route exact path='/seapro' render={()=><SearchProduct></SearchProduct>}></Route>
          <Route exact path='/shopInfo' render={()=><ShopInfo></ShopInfo>}></Route>
          <Route exact path='/profile' render={()=><Profile></Profile>}></Route>
        </Router>
      </div>
    )
  }
}


