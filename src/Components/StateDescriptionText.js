import React from "react";

class StateDescriptionText extends React.Component {
    render() {
        return (
            <div className="DescriptionText">
                <p>This is a &lt;Button&gt; component.</p>
                <p>When the button is clicked the state is changed and the count is increased by one.</p>
                <p>The &lt;Button&gt; component uses the setState() method.</p>
                <p>It is initialised with a value of 0, remembers its previous state and adds one to whatever prevState is to determine the new state.</p>
                <p>This button can be mounted onto / unmounted from the DOM.</p>
                <p>Beneath the button component is a {'<TodoList />'} component which also uses state.</p>
            </div>
        )
    }
}

export default StateDescriptionText