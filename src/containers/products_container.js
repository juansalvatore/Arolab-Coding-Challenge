import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/index'

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: {},
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    console.log('Products:', this.props.products)
    return <div>asdfsdf</div>
  }
}

function mapStateToProps({ user, products }) {
  // .weather because thats the property name used in the combine reducer to reference the payload returned from fetchWeather action
  // weather: state.weather (ES6 syntax)

  return {
    products: products,
    user: user,
  }
}

export default connect(mapStateToProps, { fetchProducts })(Products)
