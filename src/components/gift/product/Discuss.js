import React, { Component } from 'react'
// import axios from "../../../../utils/myaxios"
import {NavBar,Icon} from 'antd-mobile'
import './Discuss.css'
import LY from '../../../assets/images/ly.jpg'
import LDH from '../../../assets/images/ldh.jpg'
import ZJH from '../../../assets/images/zjh.jpg'
import TLY from '../../../assets/images/tly.jpg'
import {withRouter} from 'react-router-dom'

class Discuss extends Component {
    constructor() {
        super()
        this.state = {
            particulars_list: []
        }
    }
    // componentDidMount() {
    //     axios.get('/particulars.json')
    //     .then(res => {
    //         console.log(res)
    //         this.setState({
    //             particulars_list: res
    //         })
    //         console.log(this.state.particulars_list)
    //     })
    //     .catch(err => console.log(err))
    // }
    render() {
        return (
            <div className="discuss">
                <NavBar className="navBar"
                    mode="light"
                    icon={<Icon type="left" style={{color:"#000000"}} />}
                    onClick={() => this.props.history.go(-1)}
                    >评论</NavBar>

                <div className="discuss_one">
                    <div className="discuss_boxO">
                        <img src={LY} alt="" />
                        <div className="discuss_name">
                            <span className="discuss_left">柳岩</span>
                            <div className="discuss_right">
                                <span className="discuss_num">5</span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-zan1-copy"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="discuss_time">08月25日 00:00</p>
                    <p className="discuss_text">这个礼品不错呀，我男朋友董哲海给我送的，我特别喜欢。下次再让他给我送其他的...</p>
                </div>

                <div className="discuss_one">
                    <div className="discuss_boxO">
                        <img src={LY} alt="" />
                        <div className="discuss_name">
                            <span className="discuss_left">柳岩</span>
                            <div className="discuss_right">
                                <span className="discuss_num">5</span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-zan1-copy"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="discuss_time">08月25日 00:00</p>
                    <p className="discuss_text">这个礼品不错呀，我老公彭艺权给我送的，我特别喜欢。下次再让他给我送其他的...</p>
                </div>

                <div className="discuss_one">
                    <div className="discuss_boxO">
                        <img src={LY} alt="" />
                        <div className="discuss_name">
                            <span className="discuss_left">柳岩</span>
                            <div className="discuss_right">
                                <span className="discuss_num">5</span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-zan1-copy"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="discuss_time">08月25日 00:00</p>
                    <p className="discuss_text">这个礼品不错呀，我男朋友董哲海给我送的，我特别喜欢。下次再让他给我送其他的...</p>
                </div>

                <div className="discuss_one">
                    <div className="discuss_boxO">
                        <img src={LDH} alt="" />
                        <div className="discuss_name">
                            <span className="discuss_left">刘德华</span>
                            <div className="discuss_right">
                                <span className="discuss_num">8</span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-zan1-copy"></use>
                                </svg>
                            </div>    
                        </div>
                    </div>
                    <p className="discuss_time">08月25日 00:01</p>
                    <p className="discuss_text">看起来不错，给我女朋友也买个。</p>
                </div>

                <div className="discuss_one">
                    <div className="discuss_boxO">
                        <img src={ZJH} alt="" />
                        <div className="discuss_name">
                            <span className="discuss_left">张家辉</span>
                            <div className="discuss_right">
                                <span className="discuss_num">6</span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-zan1-copy"></use>
                                </svg>
                            </div>
                        </div>   
                    </div>
                    <p className="discuss_time">08月25日 00:02</p>
                    <p className="discuss_text">前两天给女朋友买了一个，不错，这个帽子Nice</p>
                </div>

                <div className="discuss_one">
                    <div className="discuss_boxO">
                        <img src={TLY} alt="" />
                        <div className="discuss_name">
                            <span className="discuss_left">佟丽娅</span>
                            <div className="discuss_right">
                                <span className="discuss_num">6</span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-zan1-copy"></use>
                                </svg>
                            </div>
                        </div>   
                    </div>
                    <p className="discuss_time">08月25日 00:02</p>
                    <p className="discuss_text">不错,非常好看,彭艺权推荐给我的,我特别喜欢</p>
                </div>

                <div className="discuss_one">
                    <div className="discuss_boxO">
                        <img src={TLY} alt="" />
                        <div className="discuss_name">
                            <span className="discuss_left">佟丽娅</span>
                            <div className="discuss_right">
                                <span className="discuss_num">10</span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-zan1-copy"></use>
                                </svg>
                            </div>
                        </div>   
                    </div>
                    <p className="discuss_time">08月25日 00:02</p>
                    <p className="discuss_text">不错,非常好看,喜欢</p>
                </div>

                <div className="discuss_one">
                    <div className="discuss_boxO">
                        <img src={TLY} alt="" />
                        <div className="discuss_name">
                            <span className="discuss_left">佟丽娅</span>
                            <div className="discuss_right">
                                <span className="discuss_num">6</span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-zan1-copy"></use>
                                </svg>
                            </div>
                        </div>   
                    </div>
                    <p className="discuss_time">08月25日 00:02</p>
                    <p className="discuss_text">不错,非常好看,喜欢</p>
                </div>

                <div className="discuss_foot">
                    <div className="discuss_content">
                        <input type="text" placeholder="我也说几句..." />
                        <span>发送</span>
                    </div>
                </div>

            </div>
        )
    }
}
export default withRouter(Discuss)