import React, { Component } from "react"
// 引入路由
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Gift from "./components/gift/Gift"
import Cart from "./components/cart/Cart"
import Catagory from './components/catagory/Catagory'
import Tabbar from './components/tabbar/Tabbar'
import My from './components/my/My'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <Tabbar><Home></Home></Tabbar>}></Route>
          <Route exact path="/cart" render={() => <Tabbar><Cart></Cart></Tabbar>}></Route>
          <Route exact path="/catagory" render={() => <Tabbar><Catagory></Catagory></Tabbar>}></Route>
          <Route exact path="/gift" render={() => <Tabbar><Gift></Gift></Tabbar>}></Route>
          <Route exact path="/my" render={() => <Tabbar><My></My></Tabbar>}></Route>
        </Router>
      </div>
    )
  }
}
// import React, { Component } from "react";
// import Home from "./components/home/Home";
// import Community from "./components/community/Community";
// import Cart from "./components/cart/Cart";
// import My from "./components/my/My";
// import Tabbar from "./components/tabbar/Tabbar"
// import { HashRouter as Router, Route } from "react-router-dom";

// export default class App extends Component {
//   render() {
//     return <div>
//       <Router>
//         <Route exact path="/" render={()=><Tabbar><Home></Home></Tabbar>}></Route>
//         <Route exact path="/community" render={()=><Tabbar><Community></Community></Tabbar>}></Route>
//         <Route exact path="/cart" render={()=><Tabbar><Cart></Cart></Tabbar>}></Route>
//         <Route exact path="/my" render={()=><Tabbar><My></My></Tabbar>}></Route>
//       </Router>

//     </div>;
//   }
// }

