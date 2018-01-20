import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { randomData } from '../store'
import RaisedButton from 'material-ui/RaisedButton'
import ReactCountdownClock from 'react-countdown-clock'

class GameShell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: Math.floor(Math.random() * 4), correct: 0,
            false: 0, countdown: 10
        };
    }

    componentWillMount() {
        this.props.randomData()
    }


    handleClick(answer) {
        if (this.state.answer === answer) this.setState({ correct: this.state.correct + 1 })
        else this.setState({ false: this.state.false + 1 })
        this.setState({ answer: Math.floor(Math.random() * 4) })
        this.props.randomData()
        this.setState({ countdown: 10 })
    }

    render() {
        if (this.props.addresses.length) {
            return (
                <div>
                    <h1>New York Neighborhood Game</h1>

                    <img src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${this.props.addresses[this.state.answer].LAT},${this.props.addresses[this.state.answer].LON}&fov=90&heading=235&pitch=10&key=AIzaSyAACg1VngC5Z7lZNONv_tUKnWaToYRgQ6A`} />
                    <br />
                    <RaisedButton onClick={() => this.handleClick(0)} label={this.props.addresses[0].STREET} /><br />
                    <RaisedButton onClick={() => this.handleClick(1)} label={this.props.addresses[1].STREET} /><br />
                    <RaisedButton onClick={() => this.handleClick(2)} label={this.props.addresses[2].STREET} /><br />
                    <RaisedButton onClick={() => this.handleClick(3)} label={this.props.addresses[3].STREET} />

                    <div>
                        Correct: {this.state.correct}<br />
                        Wrong: {this.state.false}<br />
                        Percent Correct: {this.state.correct ? this.state.correct * 100 / (this.state.false + this.state.correct) : 0}%<br />
                    </div >
                    <ReactCountdownClock
                        seconds={this.state.countdown}
                        color="#000"
                        alpha={0.9}
                        size={100}
                        onComplete={() => this.handleClick(-1)} />
                </div>
            )
        }
        else return (<div></div>)
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
            dispatch(randomData());

        }
    }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(GameShell))

/**
 * PROP TYPES
 */
GameShell.propTypes = {
    children: PropTypes.object
}
