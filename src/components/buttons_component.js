import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts, lowestToHighest } from '../actions/index'

class Buttons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: {},
    }
  }

  render() {
    console.log('INSIDE BUTTONS', this.props.products)
    return (
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
            onClick={() => this.props.lowestToHighest(this.props.products)}
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
    )
  }
}
function mapStateToProps({ products }) {
  return {
    products: products,
  }
}

export default connect(mapStateToProps, { fetchProducts, lowestToHighest })(
  Buttons
)
