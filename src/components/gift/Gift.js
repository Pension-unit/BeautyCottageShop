import React, { Component } from 'react'
// import { Spin } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';

import axios from "../../utils/myaxios"
import './Gift.css'
import iconU81 from '../../assets/images/u81.png'
import iconU83 from '../../assets/images/u83.png'
import {withRouter} from 'react-router-dom'


// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
// ReactDOM.render(<Spin indicator={antIcon} />, mountNode);
class Gift extends Component {
    constructor() {
        super()
        this.state = {
            list:  [
                {id: 1, name:'送女友'},
                {id: 2, name:'送男友'},
                {id: 3, name:'送女神'},
                {id: 4, name:'送男神'}
            ],
            product_list: []
        }
    }
    
    componentDidMount() {
        axios.get('/gift.json')
        .then(res => {
            console.log(res)
            this.setState({
                product_list: res
            })
            console.log(this.state.product_list)
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            // <Spin indicator={antIcon} />,
            <div className="gift">
                <div className="giftNav">
                    {this.state.list.map(item => {
                        return <div className="navList" key={item.id}>{item.name}
                        </div>
                    })}
                </div>

                <div>
                    {this.state.product_list.map((item,index) => {
                       return( 
                       <div className="gift_product" key={index} onClick={() => {
                           this.props.history.push('/gift/particulars')
                       }}>
                            <div className="product_img">
                                <img src={item.product_img} alt="" />
                            </div>
                            <div className="product_content" >
                                <span>{item.product_title}</span>
                                <p>{item.product_content}</p>
                            </div>
                            <div className="product_column">
                                <span className="product_column_left">{item.product_column}</span>
                                <div className="product_column_right">
                                    <span>
                                    <img className="iconU81" src={iconU81} alt=""/>
                                        {item.product_look}
                                    </span>
                                    <img className="iconU83" src={iconU83} alt=""/>
                                    <span>{item.product_collect}
                                    </span>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(Gift)