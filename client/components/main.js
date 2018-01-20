import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { randomData } from '../store'
import GameShell from './game-shell'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.randomData()
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <GameShell />
        </div>
      </MuiThemeProvider>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    addresses: state.addresses
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
