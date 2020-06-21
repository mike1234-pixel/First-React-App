import React from "react";

class Button extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickDecrement = this.handleClickDecrement.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 // don't use ++ as that's directly modifying the old version of state
            }
        })
    }

    handleClickDecrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1 // don't use -- as that's directly modifying the old version of state
            }
        })
    }

    componentDidMount() {
        console.log("component did mount");
    }

    render() {
        return (
            <div>
                 <h1 className="button-counter">{this.state.count}</h1>
                 <button onClick={this.handleClick} className="button">Increment</button>
                 <button onClick={this.handleClickDecrement} className="button">Decrement</button>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component has updated");
    }

    componentWillUnmount() {
        console.log("component did unmount")
    }



}

export default Button