import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../actions/index'
import { fetchProducts } from '../actions/index'

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      products: {},
    }
  }

  displayProducts = () => {
    const user = this.props.user
    console.log('products', this.state.products)
    return _.map(this.state.products, product => {
      return (
        <div key={product._id}>
          <div id={product._id} className="productContainer">
            {!(user.points < product.cost) ? (
              // <div className="blueCircle"><?php echo file_get_contents("BlueIcon.svg"); ?></div>
              <div className="blueSection">
                <div className="textAndIconContainer">
                  <span className="price">{product.cost}</span>
                  <img className="goldIcon" src="../../assets/icons/gold.svg" />
                </div>
                <a href="#">
                  <div className="redeemButton">
                    <span>Redeem now</span>
                  </div>
                </a>
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

  lowestToHighest = () => {
    this.setState({
      products: {},
    })
  }

  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchProducts()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products })
  }

  render() {
    return (
      <div>
        <div className="buttonsContainer">
          <div className="buttonsExtension">
            <div className="divisorBar" />
            <span className="sortBy">Sort by:</span>
            <a
              id="mostRecent"
              className="mostRecent activeButton"
              href="#"
              onClick={this.props.fetchProducts}
            >
              <span>Most recent</span>
            </a>
            <a
              id="lowestPrice"
              className="lowestPrice"
              href="#"
              onClick={this.lowestToHighest}
            >
              <span>Lowest price</span>
            </a>
            <a id="highestPrice" className="highestPrice" href="#">
              <span>Highest price</span>
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
})(Products)
