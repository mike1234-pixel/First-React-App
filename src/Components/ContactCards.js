import React from "react";
import ContactCard from "./ContactCard.js";
import ContactCardsData from "./ContactCardsData.js";

/* function ContactCards() {
    const contactCardsComponents = ContactCardsData.map((ContactCardsData) => {
        return <ContactCard name={ContactCardsData.name} phone={ContactCardsData.phone} email={ContactCardsData.email}/>
    })
    
    return (

        <div>
                {contactCardsComponents}
        </div> 
    )
} */

class ContactCards extends React.Component {
    render() {
        const contactCardsComponents = ContactCardsData.map((ContactCardsData) => {
            return <ContactCard name={ContactCardsData.name} phone={ContactCardsData.phone} email={ContactCardsData.email} key={ContactCardsData.id}/>
        })
        
        return (
    
            <div>
                    {contactCardsComponents}
            </div> 
        )
    }
}

export default ContactCards

/*        <ContactCard 
            name="Roger" 
            phone="037 3738 3838" 
            email="roger@somewhere.com"/>
        <ContactCard 
            name="Aled" 
            phone="338 3838 2728" 
            email="aled@somewhere.com"/>
        <ContactCard 
            name="Benedict" 
            phone="748 4838 2929" 
            email="benedict@somewhere.com"/> */