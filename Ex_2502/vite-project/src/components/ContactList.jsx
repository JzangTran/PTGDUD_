import React from 'react';
import Contact from './Contact';

export default function ContactList({ contactList, handleDelete }) {
    return (
        <div className='contact-list'>
            {contactList.map((contactInfo, index) => {
                return (
                    <Contact 
                        key={index}
                        contactInfo={contactInfo}
                        handleDelete={() => handleDelete(index)}
                    />
                );
            })}
        </div>
    );
}
