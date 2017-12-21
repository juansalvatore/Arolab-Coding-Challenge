import _ from 'lodash'
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

  displayProducts = () => {
    return _.map(this.props.products, product => {
      return (
        <div key={product._id} id={product._id} className="productContainer">
          <div className="imgContainer">
            <img src={product.img.url} alt={product.name} />
            <br />
          </div>
          <div className="textContainer">
            <span className="category">{product.category}</span>
            <br />
            <span className="name">{product.name}</span>
          </div>
        </div>
      )
    })
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    console.log('Products:', this.props.products)
    return (
      <div className="productsCenter">
        <div className="productsDisplayBox">{this.displayProducts()}</div>
      </div>
    )
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
