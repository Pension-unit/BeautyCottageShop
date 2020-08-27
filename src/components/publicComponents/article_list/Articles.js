import React, { Component } from "react";
import axios from "../../../utils/myaxios";
import "./Articles.scss";

export default class articles extends Component {
  state = {
    column_list: [],
  };
  componentDidMount() {
    axios
      .get("/column-list.json")
      .then((res) => {
        this.setState({ column_list: res });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        {/* 栏目开始 */}
        <div className="home-warp">
          {this.state.column_list.map((v) => (
            <div className="home-column" key={v.column_url}>
              <div className="column-header">
                <img src={v.column_url}></img>
              </div>
              <div className="column-middle">
                <span className="column-title">{v.column_text_title}</span>
                <p className="column-text">{v.column_text_content}</p>
              </div>
              <div className="column-bottom">
                <span className="column-bottom-left">{v.column_explain}</span>
                <span className="column-bottom-right">
                  <i className="column-watch">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-zhibo-guankanrenshu"></use>
                    </svg>
                    <b>{v.column_watch_num}</b>
                  </i>
                  <i className="column-collect">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-shoucang1"></use>
                    </svg>
                    <b>{v.column_collect_num}</b>
                  </i>
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* 栏目结束 */}
      </div>
    );
  }
}
