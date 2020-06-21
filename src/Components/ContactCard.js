import React from "react";

/* function ContactCard(props) {
    return (
        <div>
        <h3>{props.name}</h3>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        </div>
    )
} */

class ContactCard extends React.Component {
    render() {
        return (
            <div className="ContactCard">
            <h3>{this.props.name}</h3>
            <p>Phone: {this.props.phone}</p>
            <p>Email: {this.props.email}</p>
            </div>
        )
    }
}

export default ContactCard

// props is an object. 
// the content of the h3 will be props.name, 
// the value of which is defined on the ContactCards component as Roger for the first instance, 
// Aled for the second instance, and Benedict for the third instance
// The same happens with email and phone. 
// We are passing props from the ContactCards component back to the ContactCard component, where it then renders.