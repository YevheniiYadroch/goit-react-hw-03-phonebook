import React from 'react';

function ContactListElement({props}) {
    return (
        <p className="ContactList__text" >{props.name}: {props.number}</p>
    )
    
}

export default ContactListElement;