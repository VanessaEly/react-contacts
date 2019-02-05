import React, { Component } from 'react';
// React Router
// React Router turns React projects into single-page applications.
// It does this by providing a number of specialized components that manage the creation of links,
// manage the app's URL, provide transitions when navigating between different URL locations, and so much more.
// React Router is a collection of navigational components that compose declaratively with your application.
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';

class CreateContact extends Component {
    render() {
        return(
            <div>
                <Link className='close-create-contact' to='/'>Close</Link>
                <form className='create-contact-form'>
                    <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64} />
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholde='Name' />
                        <input type='text' name='handle' placeholde='Handle' />
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default CreateContact;