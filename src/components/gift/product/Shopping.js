import React, { Component } from 'react'
import "./Shopping.css";
import {withRouter} from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import axios from '../../../utils/myaxios'
class Shopping extends Component {
    state = {
    data: ['1', '2', '3','4','5'],
    imgHeight: 176,
    shopping_list: [],
    active: 'nava',
    shopping_img:[]
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
        this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
        }, 100)
        axios.get('/particulars.json')
        .then(res => {
            console.log('获取成功')
            this.setState({
                shopping_list: res
            })
            // console.log(this.state.shopping_list)
        })
        .catch(err => console.log('获取失败'))
        axios.get('/shopping.json')
        .then(res => {
            console.log('获取成功')
            this.setState({
                shopping_img:res
            })
            console.log(this.state.shopping_img)
        })
        .catch(err => console.log("获取失败"))
    }
    
    render() {
        return (
            <div className="box">

                <div className="nav">
                    <div className="nav_back aa">
                        <svg className="icon" aria-hidden="true" >
                            <use xlinkHref="#icon-arrow-left"></use>
                        </svg>
                    </div>
                    <div className={this.state.active === "nava" ? "nav_goods aa active" : "nav_goods aa"} onClick={()=>{
                        this.setState({
                            active: "nava"
                        })
                    }} >商品</div>
                    <div className={this.state.active === "navb" ? "nav_goods aa active" : "nav_goods aa"} onClick={()=>{
                        this.setState({
                            active: "navb"
                        })
                    }} >详情</div>
                    <div className={this.state.active === "navc" ? "nav_goods aa active" : "nav_goods aa"} onClick={()=>{
                        this.setState({
                            active: "navc"
                        })
                    }} >评论</div>
                    <div className="nav_share aa" onClick={() => console.log(111)
                        // this.props.history.push('/gift/particulars')
                        }>
                        <svg className="icon" aria-hidden="true" >
                            <use xlinkHref="#icon-fenxiang"></use>
                        </svg>
                    </div>
                </div>

                <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            // onLoad={() => {
                            // // fire window resize event to change height
                            // window.dispatchEvent(new Event('resize'));
                            // this.setState({ imgHeight: 'auto' });
                            // }}
                        />
                    ))}
                </Carousel>

                {
                    this.state.shopping_list.map((item,index) => {
                        return (
                            <div className="shopMiddle" key={item.value}>
                                <div className="shopTitle">{item.strategy_head}</div>
                                <div className="shopPrice">{item.strategy_price}</div>
                            </div>     
                        )
                    })
                }

                <div className="shopSize">
                    <div className="shopSelect">规格和数量选择</div>
                    <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-bianji"></use>
                    </svg>
                </div>

                <div className="shopSize">
                    <div className="shopSelect">商品参数</div>
                    <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-bianji"></use>
                    </svg>
                </div>

                <div className="shopSize">
                    <div className="shopSelect">服务 : ·全场免邮费 ·30天无忧退换货</div>
                </div>

                <div className="shopSize">
                    <div className="shopSelect">时尚礼貌旗舰店</div>
                    <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-bianji"></use>
                    </svg>
                </div>
                
                <div className="shopSize">
                    <div className="shopSelect">商品详情</div>
                </div>

                {
                    this.state.shopping_img.map((item,index) => {
                        console.log(item.shopping_imgf)
                        return (
                            <div className="shoppingImg" key={index}>
                                <div className="shoppingImgf">
                                    <img src={item.shopping_imgf} alt="" />
                                </div>
                                <div className="shoppingImgf">
                                    <img src={item.shopping_imgg} alt="" />
                                </div>
                                <div className="shoppingImgf">
                                    <img src={item.shopping_imgh} alt="" />
                                </div>
                                <div className="shoppingImgf">
                                    <img src={item.shopping_imgi} alt="" />
                                </div>
                            </div>

                            
                            
                        )
                    })
                }

            </div>
        )
    }
}
export default withRouter(Shopping)
