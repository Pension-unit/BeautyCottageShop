import React, { Component } from 'react'
import "./Shopping.css";
import {withRouter} from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import axios from '../../../utils/myaxios'
import LY from '../../../assets/images/ly.jpg'
import TLY from '../../../assets/images/tly.jpg'
import ZJH from '../../../assets/images/zjh.jpg'
import U261 from '../../../assets/images/u261.png'
import U262 from '../../../assets/images/u262.png'
import U263 from '../../../assets/images/u263.png'
import U264 from '../../../assets/images/u264.png'
import U265 from '../../../assets/images/u265.png'

class Shopping extends Component {
    state = {
    data: ['1', '2', '3','4','5'],
    imgHeight: 176,
    shopping_list: [],
    active: 'nava',
    shopping_img:[],
    shopping_lobo:[]
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

        axios.get('/shopping_lobo.json')
        .then(res => {
            console.log('获取成功')
            this.setState({
                shopping_lobo:res
            })
            console.log(this.state.shopping_lobo)
        })
        .catch(err => console.log("获取失败"))
    }
    render() {
        return (
            <div className="box">

                <div className="nav">
                    <div className="nav_back aa">
                        <svg 
                        onClick={() => this.props.history.go(-1)}
                        className="icon" 
                        aria-hidden="true"  >
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
                    className="shop_swiper"
                    autoplay
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.shopping_lobo.map((item) => (
                        <a
                        key={item.shopping_imglobo}
                        href={item.shopping_href}
                        style={{
                            display: "inline-block",
                            width: "100%",
                            height: this.state.imgHeight,
                        }}
                        >
                        <img 
                            src={item.shopping_imglobo}
                            alt=''
                            style={{ width: "100%", verticalAlign: "top" }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event("resize"));
                            this.setState({ imgHeight: "auto" });
                            }}
                        />
                        </a>
                    ))}    
                </Carousel>

                {
                    this.state.shopping_list.map((item,index) => {
                        return (
                            <div className="shopMiddle" key={index}>
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
                                <img className="shoppingImgf" src={item.shopping_imgf} alt="" />
                                <img className="shoppingImgg" src={item.shopping_imgg} alt="" />
                                <img className="shoppingImgh" src={item.shopping_imgh} alt="" />
                                <img className="shoppingImgi" src={item.shopping_imgi} alt="" />
                            </div>
                        )
                    })
                }

                <div className="shop_discuss">
                    <div className="shop_pl">用户评论</div>
                </div>

                <div className="shopping_one">
                    <div className="shopping_boxO">
                        <img src={LY} alt="" />
                        <div className="shopping_name">
                            <span className="shopping_left">陈***E</span>
                        </div>
                    </div>
                    <p className="shopping_time">2020.08.26 10.20</p>
                    <p className="shopping_text">真是太赞了，实物颜色较暗，衣服更加好搭配了，完胜200+的帽子，而且还是100%羊毛，的确超值。</p>
                    <div className="shopDis_img">
                        <img src={U261} alt="" />
                        <img src={U262} alt="" />
                    </div>
                </div>

                <div className="shopping_one">
                    <div className="shopping_boxO">
                        <img src={ZJH} alt="" />
                        <div className="shopping_name">
                            <span className="shopping_left">董***海</span>
                        </div>
                    </div>
                    <p className="shopping_time">2020.08.26 10.20</p>
                    <p className="shopping_text">真是太赞了!女朋友非常喜欢,简直爱死我了</p>
                </div>

                <div className="shopping_one">
                    <div className="shopping_boxO">
                        <img src={TLY} alt="" />
                        <div className="shopping_name">
                            <span className="shopping_left">ga***yuan</span>
                        </div>   
                    </div>
                    <p className="shopping_time">2020.08.26 10.21</p>
                    <p className="shopping_text">很漂亮，紫粉色，质感和做工都很好。不过，真心大，我是大头都带着很大</p>
                    <div className="shopDis_img">
                        <img src={U263} alt="" />
                        <img src={U264} alt="" />
                        <img src={U265} alt="" />
                    </div>
                </div>

                <div className="shopping_foot">
                    <div className="shopping_cart shopx">
                        <svg 
                        className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-gouwuche"></use>
                        </svg>
                    </div>
                    <div className="shopping_collect shopx">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-shoucang-copy"></use>
                        </svg>
                    </div>
                    <div className="shopping_join shopxx">加入购物车</div>
                    <div className="shopping_buy shopxx"
                    onClick={(params) => {
                        this.props.history.push("/payType")
                    }
                    }
                    >立即购买</div>
                </div>

            </div>
        )
    }
}
export default withRouter(Shopping)
