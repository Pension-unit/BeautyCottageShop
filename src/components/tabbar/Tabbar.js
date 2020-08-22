//  引入 antd-mobile Tabbar 组件
import React from "react"
import { TabBar } from 'antd-mobile';
// 引入 路由跳转的函数
import { withRouter } from "react-router-dom"

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
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="Home"
                        icon={
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-yemian-copy-copy"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-yemian-copy"></use>
                            </svg>
                        }
                        selected={this.props.location.pathname === '/'}
                        onPress={() => {
                            this.props.history.push("/");
                        }}
                        data-seed="logId"
                    >
                        {this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-zengsongliquan"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-zengsongliquan-copy"></use>
                            </svg>
                        }
                        title="送礼攻略"
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
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-leimupinleifenleileibie1"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-leimupinleifenleileibie"></use>
                            </svg>
                        }
                        title="分类"
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
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-gouwuche"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-gouwuche1"></use>
                            </svg>
                        }
                        title="购物车"
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
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-wodedangxuan1"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-wodedangxuan"></use>
                            </svg>
                        }
                        title="我的"
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
