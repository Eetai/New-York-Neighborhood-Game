import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class highscores extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.randomData()
  }

  render() {
    return (

      <div>Highscores
      </div>

    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    scores: state.scores
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
export default withRouter(connect(mapState, mapDispatch)(highscores))

/**
 * PROP TYPES
 */
highscores.propTypes = {
  scores: PropTypes.object
}
