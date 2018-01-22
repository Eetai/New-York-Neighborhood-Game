import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main } from './components'
import { GameShell } from './components/game-shell'
import { highscores } from './components/highscores'
import { me } from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route exact path="/highscore" component={highscores} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    // isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    // loadInitialData() {
    //   dispatch(me())
    // }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
}
