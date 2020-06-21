import React from "react";

/* function TimeOfDayGreeting() {
    const date = new Date();
    const hours = date.getHours();
    const styles = {
        fontSize: 30,
        boxShadow: "-1px 1px 71px -3px rgba(0,0,0,0.75)"
    }
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#031f1d"
        styles.backgroundImage = `url(${'https://images.pexels.com/photos/910411/pexels-photo-910411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`
        styles.backgroundSize = "cover"
        styles.overflow = "hidden"
    } else if (hours <= 17) {
        timeOfDay = "afternoon"
        styles.color = "#e3dac9"
        styles.backgroundImage = `url(${'https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'})`
        styles.backgroundSize = "cover"
        styles.overflow = "hidden"
    } else {
        timeOfDay = "evening"
        styles.color = "#e3dac9"
        styles.backgroundImage = `url(${'https://images.pexels.com/photos/102539/nature-milky-way-night-stars-102539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`
        styles.backgroundSize = "cover"
        styles.overflow = "hidden"
    } 



    return ( 
    <h1 className="TimeOfDayGreeting" style={styles}>Good {timeOfDay}!</h1> 
    )
} */

class TimeOfDayGreeting extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        const styles = {
            fontSize: 30,
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)", 
            borderRadius: 10,
            marginTop: 30
        }
        let timeOfDay;
    
        if (hours < 12) {
            timeOfDay = "morning"
            styles.color = "#031f1d"
            styles.backgroundImage = `url(${'https://images.pexels.com/photos/910411/pexels-photo-910411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`
            styles.backgroundSize = "cover"
            styles.overflow = "hidden"
        } else if (hours < 17) {
            timeOfDay = "afternoon"
            styles.color = "#e3dac9"
            styles.backgroundImage = `url(${'https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'})`
            styles.backgroundSize = "cover"
            styles.overflow = "hidden"
        } else {
            timeOfDay = "evening"
            styles.color = "#e3dac9"
            styles.backgroundImage = `url(${'https://images.pexels.com/photos/102539/nature-milky-way-night-stars-102539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`
            styles.backgroundSize = "cover"
            styles.overflow = "hidden"
        }

        return ( 
            <h1 className="TimeOfDayGreeting" style={styles}>Good {timeOfDay}!</h1> 
            )        
    }
}

export default TimeOfDayGreeting

// here we have the styles object declared at the top, 
// the styles object is assigned new key-value properties depending on the time of day, in the if/else statement
// in the h1 tag we have our inline style where styles points to the styles object, the contents of which change depending on the time of day.
