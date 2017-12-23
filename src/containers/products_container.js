import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchUser } from '../actions/index'
import { fetchProducts, redeemNow, addPoints } from '../actions/index'

import BlueIcon from '../../assets/icons/BlueIcon.js'

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      products: {},
      // 0 if most recent is clicked
      // 1 if lowest price is clicked
      // 2 if highest price is clicked
      buttonState: 0,
      // hamburguer button state
      open: false,
      hover: false,
    }
  }

  onHoverIn = id => {
    console.log(id)
    this.setState({ hover: id })
  }

  onHoverOut = id => {
    console.log(id)
    this.setState({ hover: false })
  }

  displayProducts = () => {
    const user = this.props.user
    console.log('products', this.state.products)
    return _.map(this.state.products, product => {
      return (
        <div key={product._id}>
          <div
            id={product._id}
            className="productContainer"
            onMouseEnter={() => this.onHoverIn(product._id)}
            onMouseLeave={() => this.onHoverOut(product._id)}
          >
            {!(user.points < product.cost) ? (
              <div>
                <div
                  className={
                    this.state.hover == product._id
                      ? 'blueCircle whiteCircle'
                      : 'blueCircle'
                  }
                >
                  <BlueIcon
                    fill={this.state.hover == product._id ? '#0AD4FA' : 'white'}
                  />
                </div>
                <div className="blueSection">
                  <div className="textAndIconContainer">
                    <span className="price">{product.cost}</span>
                    <img
                      className="goldIcon"
                      src="../../assets/icons/gold.svg"
                    />
                  </div>
                  <a
                    href="#!"
                    onClick={() => {
                      const app = this
                      this.props.fetchProducts()
                      this.props.fetchUser()
                      this.props.redeemNow(product._id)
                    }}
                  >
                    <div className="redeemButton">
                      <span>Redeem now</span>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              <div className="missingToPrice">
                <span>You need {product.cost - user.points}</span>
                <img
                  className="goldIconMissingPrice"
                  src="../../assets/icons/gold.svg"
                />
              </div>
            )}
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
        </div>
      )
    })
  }

  mostRecent = () => {
    this.props.fetchProducts()
    this.setState({
      buttonState: 0,
    })
  }

  lowestToHighest = () => {
    this.setState({
      products: _.sortByOrder(this.state.products, 'cost', 'asc'),

      buttonState: 1,
    })
  }

  highestToLowest = () => {
    this.setState({
      products: _.sortByOrder(this.state.products, 'cost', 'desc'),
      buttonState: 2,
    })
  }

  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchProducts()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products })
    this.state.buttonState == 0 ? '' : ''
    this.state.buttonState == 1 ? this.lowestToHighest() : ''
    this.state.buttonState == 2 ? this.highestToLowest() : ''
  }

  toggleClass = () => {
    const currentState = this.state.open
    this.setState({ open: !currentState })
  }

  render() {
    return (
      <div>
        {/* dropdown menu */}
        <div className={this.state.open ? 'dropdownMenu open' : 'dropdownMenu'}>
          <div className="dropdownContainer">
            <ul>
              <li>
                <a href="#!" onClick={this.mostRecent}>
                  Most recent
                </a>
              </li>
              <li>
                <a href="#!" onClick={this.lowestToHighest}>
                  Lowest price
                </a>
              </li>
              <li>
                <a href="#!" onClick={this.highestToLowest}>
                  Highest price
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttonsContainer">
          <div className="buttonsExtension">
            <div
              className={
                this.state.open
                  ? 'menu-open hamburguerButton'
                  : 'hamburguerButton'
              }
            >
              <button
                className="bt-menu"
                title="Menu"
                onClick={this.toggleClass}
              >
                <span className="hamburguer">
                  <span className="bar bar-1" />
                  <span className="bar bar-2" />
                  <span className="bar bar-3" />
                </span>
              </button>
            </div>
            <div className="divisorBar" />

            <span className="sortBy">Sort by:</span>
            <a
              id="mostRecent"
              className={
                this.state.buttonState == 0
                  ? 'mostRecent activeButton'
                  : 'mostRecent'
              }
              href="#!"
              onClick={this.mostRecent}
            >
              <span>Most recent</span>
            </a>
            <a
              id="lowestPrice"
              className={
                this.state.buttonState == 1
                  ? 'lowestPrice activeButton'
                  : 'lowestPrice'
              }
              href="#!"
              onClick={this.lowestToHighest}
            >
              <span>Lowest price</span>
            </a>
            <a
              id="highestPrice"
              className={
                this.state.buttonState == 2
                  ? 'highestPrice activeButton'
                  : 'highestPrice'
              }
              href="#!"
              onClick={this.highestToLowest}
            >
              <span>Highest price</span>
            </a>
            <a
              href="#!"
              className="addPoints"
              onClick={() => {
                const app = this
                setTimeout(function() {
                  app.props.fetchProducts()
                  app.props.fetchUser()
                }, 500)
                this.props.addPoints()
              }}
            >
              ADD POINTS
            </a>

            {/* @if(isset($_GET['page']))
            @if($_GET['page'] > 1)
              <a class="leftArrow" href="/?page={{
                $_GET['page'] - 1
              }}"><img src="arrow-left.svg" alt="arrow left"></a>
            @endif
            <a class="rightArrow" href="/?page={{
              $_GET['page'] + 1
            }}"><img src="arrow-right.svg" alt="arrow right"></a>
          @else
            <a class="rightArrow" href="/?page=2"><img src="arrow-right.svg" alt="arrow right"></a>
          @endif */}
            <div className="buttonBottonDivisior" />
          </div>
        </div>

        <div className="productsCenter">
          <div className="productsDisplayBox">{this.displayProducts()}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ user, products }) {
  return {
    products: products,
    user: user,
  }
}

export default connect(mapStateToProps, {
  fetchProducts,
  fetchUser,
  redeemNow,
  addPoints,
})(Products)
