import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MyMenu from '../components/MyMenu/MyMenu'

export default class Layout extends Component {
  render() {
    return (
      <div>
        {/* 顶部导航 */}
        <div>
            <MyMenu />
        </div>
        {/* 路由出口 */}
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
}
