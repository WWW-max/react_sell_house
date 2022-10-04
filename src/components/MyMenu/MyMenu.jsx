import React, { Component } from 'react'
import logo from '../../assets/imgs/logo.jpg';
import './MyMenu.less';
import { NavLink } from 'react-router-dom';
export default class MyMenu extends Component {
    render() {
        return (
            <div>
                <div className="menu">
                    <div className="container">
                        {/* 左侧 */}
                        <div className="left">
                            <img src={logo} width={180} height={'72px'} alt="" />
                            {/* 城市切换 */}
                            <span>北京</span>
                        </div>
                        {/* 右侧 */}
                        <div className="right">
                            <NavLink exact to={'/'}>首页</NavLink>
                            <NavLink to={'/house'}>法拍房源</NavLink>
                            <NavLink to={'/news'}>法拍资讯</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
