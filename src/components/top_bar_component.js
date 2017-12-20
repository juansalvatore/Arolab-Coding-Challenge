import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../actions/index'

class TopBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const user = this.props.user
    console.log('User:', this.props.user)
    return (
      <div>
        {/* Header (NAVBAR)  */}
        <div className="header">
          <img src="../../assets/icons/aerolab.svg" alt="aerolab" />
          <div className="userInfo">
            <span className="userName">{user.name}</span>
            <div className="pointAmount">
              <span>{user.points}</span>
              <img
                className="goldIconUserInfo"
                src="../../assets/icons/gold.svg"
              />
            </div>
          </div>
        </div>
        {/* IMG BANNER */}
        <div className="banner">
          <img
            className="imagenBanner"
            src="../../assets/images/banner.png"
            alt="banner"
          />
          <canvas id="canvas" />
          <div className="titleContainer">
            <h1>Electronics</h1>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ user }) {
  // .weather because thats the property name used in the combine reducer to reference the payload returned from fetchWeather action
  // weather: state.weather (ES6 syntax)
  return {
    user: user,
  }
}

export default connect(mapStateToProps, { fetchUser })(TopBar)
