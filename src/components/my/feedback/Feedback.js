import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './Feedback.scss'

class Feedback extends Component {
  backToPre = () => {
    this.props.history.go(-1)
  }
  
  render() {
    return (
      <div className='feedbackBox'>
        <div className='header'>
            <div onClick={this.backToPre}> {'<'} </div>
            <h2>意见反馈</h2>
        </div>
        <div className="feedback-content">
          <div className='description'>请写下您宝贵的意见，我们将及时的改进各项服务，更好的满足您的需求，如方便也可以留下跌系方式:</div>
          <textarea placeholder='有什么想说的，可以写下来哟~'></textarea>
          <div className='submitBtn'>提交</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Feedback)
