import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { randomData } from '../store'

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.randomData()
  }

  render() {
    return (
      <div>
        <h1>New York Neighborhood Game</h1>
        <img src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.7278802,-73.9862891&fov=90&heading=235&pitch=10&key=AIzaSyAACg1VngC5Z7lZNONv_tUKnWaToYRgQ6A" />
      </div>
    )
  }
}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    randomData: () => {
      dispatch(randomData())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object
}
