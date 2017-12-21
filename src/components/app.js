import React, { Component } from 'react'
import TopBar from './top_bar_component'
import Buttons from './buttons_component'
import Products from '../containers/products_container'

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Products />
      </div>
    )
  }
}
