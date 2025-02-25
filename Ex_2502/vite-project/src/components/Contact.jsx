import React from 'react';

export default function Contact({ contactInfo, handleDelete }) {

    return (
        <div className='contact-card'>
            <h3>{contactInfo.firstName}</h3>
            <p>{contactInfo.lastName}</p>

            <div>
                <p>Phone: {contactInfo.phone}</p>
            </div>
            <div>
                <p>Address: {contactInfo.address}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}