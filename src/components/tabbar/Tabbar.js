//  引入 antd-mobile Tabbar 组件
import React from "react"
import { TabBar } from 'antd-mobile';
// 引入 路由跳转的函数
import { withRouter } from "react-router-dom"
import  "./Tabbar.scss"

class MyTabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: true,
        };
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0} : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title={
                            <span style={this.props.location.pathname==='/'? {color: "#FF0036"} : {color: "#BFBFBF"}}>首页</span>
                        }
                        key="Home"
                        icon={
                            <svg className="icon icon_home" aria-hidden="true">
                                <use xlinkHref="#icon-yemian-copy-copy"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon icon_home_s" aria-hidden="true">
                                <use xlinkHref="#icon-yemian-copy"></use>
                            </svg>
                        }
                        // 选中条件
                        selected={this.props.location.pathname === '/'}
                        // 点击事件
                        onPress={() => {
                            this.props.history.push("/");
                        }}
                        data-seed="logId"
                    >
                        {this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <svg className="icon icon_gift" aria-hidden="true">
                                <use xlinkHref="#icon-zengsongliquan"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon icon_gift_s" aria-hidden="true">
                                <use xlinkHref="#icon-zengsongliquan-copy"></use>
                            </svg>
                        }
                        title={
                            <span style={this.props.location.pathname==='/gift'? {color: "#FF0036"} : {color: "#BFBFBF"}}>送礼攻略</span>
                        }
                        key="Gift"
                        selected={this.props.location.pathname === '/gift'}
                        onPress={() => {
                            this.props.history.push("/gift");
                        }}
                        data-seed="logId1"
                    >
                        {this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <svg className="icon icon_catagory" aria-hidden="true">
                                <use xlinkHref="#icon-leimupinleifenleileibie1"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon icon_catagory_s" aria-hidden="true">
                                <use xlinkHref="#icon-leimupinleifenleileibie"></use>
                            </svg>
                        }
                        title={
                            <span style={this.props.location.pathname==='/catagory'? {color: "#FF0036"} : {color: "#BFBFBF"}}>分类</span>
                        }
                        key="Catagory"
                        selected={this.props.location.pathname === '/catagory'}
                        onPress={() => {
                            this.props.history.push("/catagory");
                        }}
                    >
                        {this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <svg className="icon icon_cart" aria-hidden="true">
                                <use xlinkHref="#icon-gouwuche"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon icon_cart_s" aria-hidden="true">
                                <use xlinkHref="#icon-gouwuche1"></use>
                            </svg>
                        }
                        title={
                            <span style={this.props.location.pathname==='/cart'? {color: "#FF0036"} : {color: "#BFBFBF"}}>购物车</span>
                        }
                        key="Cart"
                        selected={this.props.location.pathname === '/cart'}
                        onPress={() => {
                            this.props.history.push("/cart");
                        }}
                    >
                        {this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <svg className="icon icon_my" aria-hidden="true">
                                <use xlinkHref="#icon-wodedangxuan1"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon icon_my_s" aria-hidden="true">
                                <use xlinkHref="#icon-wodedangxuan"></use>
                            </svg>
                        }
                        title={
                            <span style={this.props.location.pathname==='/my'? {color: "#FF0036"} : {color: "#BFBFBF"}}>我的</span>
                        }
                        key="My"
                        selected={this.props.location.pathname === '/my'}
                        onPress={() => {
                            this.props.history.push("/my");
                        }}
                    >
                        {this.props.children}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default withRouter(MyTabbar)
