import React from "react";

class ContactCardsInfo extends React.Component {
    render() {
        return (
            <div className="DescriptionText">
                <p>Below we have a {'<ContactCards />'} component.</p>
                <p>The component pulls data from an array of objects called ContactCardsData.</p>
                <p>{'<ContactCards />'} then passes data from these objects as props to its child component {'<ContactCard />'} before being rendered.</p>
                <p>If more objects are added to the array they are automatically displayed in the browser as contact cards.</p>
            </div>
        )
    }
}

export default ContactCardsInfo