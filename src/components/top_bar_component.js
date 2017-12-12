import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../actions/index'


class TopBar extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        
        console.log(this.props.fetchUser())
    }

    render(){
        return (
            <div>
                {/* Header (NAVBAR)  */}
                <div className="header">
                    <img src="../../assets/icons/aerolab.svg" alt="aerolab" />
                    <div className="userInfo">
                        <span className="userName">{/* {{ $user['name'] }} */}Juan Salvatore</span>
                        <div className="pointAmount">
                            <span>{/*{{ $user['points'] }} */}2000</span><img className="goldIconUserInfo" src="../../assets/icons/gold.svg" />
                        </div>
                    </div>
                </div>
                {/* IMG BANNER */}
                <div className="banner">
                    <img className="imagenBanner" src="../../assets/images/banner.png" alt="banner" />
                    <canvas id='canvas'></canvas>
                    <div className="titleContainer">
                        <h1>Electronics</h1>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(TopBar)