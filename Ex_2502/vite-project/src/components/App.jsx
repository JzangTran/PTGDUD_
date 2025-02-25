import React, { useState } from "react";
import ContactList from "./ContactList";
import './style.css'; // Import the CSS file

export default function App(props) {
    const [contactList, setContactList] = useState([
        {
            firstName: 'Chidi',
            lastName: 'Anagonye',
            phone: '555-366-8987',
            address: 'St. John\'s University, Sydney, Australia'
        },
        {
            firstName: 'Chidi',
            lastName: 'Anagonye',
            phone: '555-366-8987',
            address: 'St. John\'s University, Sydney, Australia'
        },
        {
            firstName: 'Chidi',
            lastName: 'Anagonye',
            phone: '555-366-8987',
            address: 'St. John\'s University, Sydney, Australia'
        },
        {
            firstName: 'Chidi',
            lastName: 'Anagonye',
            phone: '555-366-8987',
            address: 'St. John\'s University, Sydney, Australia'
        }
    ]);

    const handleDelete = (index) => {
        setContactList(prevList => prevList.filter((_, i) => i !== index));
    }

    const handleDeleteAll = () => {
        setContactList([]);
    }

    return (
        <div className="container">
            <ContactList 
                contactList={contactList}
                handleDelete={handleDelete}
            />
            <div>
                <button onClick={handleDeleteAll}>Delete All</button>
            </div>
        </div>
    );
}
