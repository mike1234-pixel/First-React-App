import React from "react";

/* function Footer() {
    var thisYear = new Date().getFullYear();
    return (
        
        <footer>This is my footer. Copyright Michael Tandy {thisYear}</footer>
    )
} */

class Footer extends React.Component {
    render() {
        var thisYear = new Date().getFullYear();
        return (
            <footer>&copy; Michael Tandy {thisYear}</footer>
        )
    }
}

export default Footer