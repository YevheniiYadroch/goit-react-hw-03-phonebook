import React from 'react';
import ContactListElement from "./ContactListElement";
import './ContactList.css';

function ContactList({props, onDelete}) {
    return (
        <ul className="ContactList">
            {props.map(item => (
                <li className="ContactList__item" key={item.id}>
                    <ContactListElement props={item} />
                    <button className="ContactList__button" data-id={item.id} onClick={onDelete} type="button">Delete</button>
                </li>
            ))}
        </ul>
    )
    
}

export default ContactList;