import React from "react"; 
import Header from "./Header.js";  
import Footer from "./Footer.js"; 
import ContactCards from "./ContactCards.js";
import Button from "./Button.js";
import StateDescriptionText from "./StateDescriptionText.js";
import TodoList from "./TodoList.js";
import TimeOfDayGreeting from "./TimeOfDayGreeting.js";
import TimeOfDayGreetingInfo from "./TimeOfDayGreetingInfo.js"
import ContactCardsInfo from "./ContactCardsInfo.js"
import { Spring } from "react-spring/renderprops";


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mount: true
        }
        this.mountButton = () => this.setState({ mount: true })
        this.unmountButton = () => this.setState({ mount: false })
    }

    render() {
        return (
            <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
            >    
        {props => (
              <div style={props}>
            <Header />
            <TimeOfDayGreeting />
            <h1 className="heading">Welcome to Mike's React App</h1>
            <TimeOfDayGreetingInfo/>
            <ContactCardsInfo/>
            <ContactCards />
            <StateDescriptionText />
            { this.state.mount ? <Button /> : <p className="unmounted-message">{'<Button />'} unmounted</p>}
            <button onClick={this.mountButton} disabled={this.state.mount} className="button">Mount</button>
            <button onClick={this.unmountButton} disabled={!this.state.mount} className="button">Unmount</button>
            <TodoList />
            <Footer />
        </div>
        )}
          </Spring>
    )
    }
}

export default Home
