import React from "react";

class Error extends React.Component {
    render() {
        return (
            <div>
                <p className="error">Error: This path does not exist.</p>
            </div>
        )
    }
}

export default Error