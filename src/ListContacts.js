import React, { Component } from 'react';

class ListContacts extends Component {
    // render is REQUIRED
    render() {
        // returning the html list
        return (
            <ol className='contact-list'>
                {/* using PROPS to receive a contacts list, and mapping through the array */}
                {this.props.contacts.map(contact => (
                    // listing each line
                    <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar'
                        style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}
                        ></div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove'>Remove</button>
                    </li> 
                ))}
            </ol>
        );
    }
}

// components should be the default export
export default ListContacts;