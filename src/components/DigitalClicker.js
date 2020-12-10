// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }
    buttonHandler = () => {
        let clickerUpper = this.state.timesClicked + 1
        this.setState({
            timesClicked: clickerUpper
        })
    }
    render() {
        return (
            <button onClick = {this.buttonHandler}>{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker