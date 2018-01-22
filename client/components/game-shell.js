import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { randomData } from '../store'
import RaisedButton from 'material-ui/RaisedButton'

class GameShell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            answer: Math.floor(Math.random() * 4),
            correct: 0,
            false: 0,
            time: {},
            seconds: 10,
            started: false
        };

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    componentWillMount() {
        this.props.randomData()
        this.startTimer()
    }
    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(this.countDown, 1000);
        this.setState({ seconds: 10 });
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
            this.handleClick(-1)
            this.startTimer()
        }
    }


    handleClick(answer) {
        if (this.state.correct + this.state.false > 4) this.props.history.push('/highscore');
        if (this.state.answer === answer) this.setState({ correct: this.state.correct + 1 })
        else this.setState({ false: this.state.false + 1 })
        this.setState({ answer: Math.floor(Math.random() * 4) })
        this.props.randomData()
        this.startTimer()
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
                    <br />{this.state.seconds}
                    <div>
                        Correct: {this.state.correct}<br />
                        Wrong: {this.state.false}<br />
                        Percent Correct: {this.state.correct ? this.state.correct * 100 / (this.state.false + this.state.correct) : 0}%<br />
                    </div >

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
    children: PropTypes.object,
    seconds: PropTypes.number
}
