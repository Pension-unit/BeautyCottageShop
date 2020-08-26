import React, { Component } from 'react'

import fetchJsonp from 'fetch-jsonp'
import axios from '../../../utils/myaxios'

import { SearchBar } from 'antd-mobile'


import { withRouter } from 'react-router-dom'

import './Seartchproduct.scss'
import { connect } from 'react-redux'

import {
	SortToSceneAction,
	SortToProAction,
	SortToShopAction,
} from '../../../store/actioncreator/ctgActionCreator'




class SearchProduct extends Component {
	state = {
		// 热门搜索数据
		hotSearchData: [],
		// 历史搜索数据
		historyData: [],
		//联想关键字数据
		lenovoData:[],
		// 联想容器是否隐藏
		lenovoboxhide:false
	}
	// 获取数据
	componentDidMount() {
		axios
			.get('/search-list.json')
			.then((res) => {
				this.setState({
					hotSearchData: res[0].hotdata,
					historyData: res[0].historydata,
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}
	// 搜索框改变事件
	onChange = (value) => {
		var url = encodeURI(value);
		fetchJsonp("https://category.vip.com/ajax/getSuggest.php?callback=searchSuggestions&keyword="+url+"&_=1593346215482")
		// 设置数据格式
		.then(function (response) {
			return response.json()
		})
		.then((res) => {this.setState({
			lenovoData:res.data
		}
		) 
		if(value){
			{this.setState({lenovoboxhide:true})}
		}else{
			{this.setState({lenovoboxhide:false})}
		}
	}).catch(err => { console.log(err); })}
	render() {
		return (
			<div>
				<div className="search-product-header">
					{/* 搜索框开始 */}
					<SearchBar
						className="searBar"
						style={{
							borderRadius: '5px',
							backgroundColor: '#eeeeee',
						}}
						placeholder="请输入关键字进行搜索"
						onSubmit={(value) => console.log(value, 'onSubmit')}
						onClear={(value) => console.log(value, 'onClear')}
						onFocus={() => console.log('onFocus')}
						onBlur={() => console.log('onBlur')}
						onCancel={() => {
							this.props.history.push('/')
						}}
						showCancelButton
						onChange={(value) => {
							this.onChange(value)
							console.log(value);
						}}
					/>
					{/* 搜索框结束 */}
					{/* 联想容器 */}
					<div className={this.state.lenovoboxhide ? "lenovobox":"leovoboxHide"}>
							<ul className="lenovoUl">
								{this.state.lenovoData.map(v=>
									<li key={v.goodsCount+Math.random()} className="lenovoLi">{v.word}</li>
									)}
							</ul>
					</div>
					{/* 联想容器结束 */}
				</div>
				{/* 内容部分 */}
				<div className="search-content">
					{/* tab栏开始 */}
					<div className="catagory-tab-wrapper">
						<div className="catagory-tab">
							{/* <div className="catagory-tab-item active" onClick={this.props.SortToScene}> */}
							<div
								className={
									this.props.ctgSort == 'scene'
										? 'catagory-tab-item active'
										: 'catagory-tab-item'
								}
								onClick={this.props.SortToScene}
							>
								<div>礼品</div>
							</div>

							<div
								className={
									this.props.ctgSort == 'shop'
										? 'catagory-tab-item active'
										: 'catagory-tab-item'
								}
								onClick={this.props.SortToShop}
							>
								<div>店铺</div>
							</div>
						</div>
					</div>
					{/* tab结束 */}
					{/* 热门搜索开始 */}
					<div className="hot-search">
						<h3 className="hot-search-title">热门搜索</h3>
						<div className="hot-search-content">
							{this.state.hotSearchData.map((v) => (
								<span className="hot-search-items" key={v.id}>
									{v.text}
								</span>
							))}
						</div>
					</div>
					{/* 热门搜索结束 */}
					{/* 历史搜索开始 */}
					<div className="history-search">
						<h3 className="history-search-title">历史搜索</h3>
						<div className="history-search-content">
							{this.state.historyData.map(v =>
								<span className="history-search-items" key={v.id}>{v.text}</span>
							)}
						</div>
					</div>
					{/* 历史搜索结束 */}
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		ctgSort: state.ctgReducer.ctgSort,
	}
}

const mapDispatchTo = (dispatch) => {
	return {
		SortToScene: function () {
			dispatch(SortToSceneAction())
		},
		SortToPro: function () {
			dispatch(SortToProAction())
		},
		SortToShop: function () {
			dispatch(SortToShopAction())
		},
	}
}

export default withRouter(
	connect(mapStateToProps, mapDispatchTo)(SearchProduct)
)
