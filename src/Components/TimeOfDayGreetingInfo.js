import React from "react";

class TimeOfDayGreetingInfo extends React.Component {
    render() {
        return (
            <div className="DescriptionText">
                <p>Above we have a {'<TimeOfDayGreeting/>'} component, which uses conditional rendering.</p>
                <p>The component uses a JavaScript function() which contains an if/else statement which changes the greeting and styling depending on the time of day.</p>
            </div>
        )
    }
}

export default TimeOfDayGreetingInfo