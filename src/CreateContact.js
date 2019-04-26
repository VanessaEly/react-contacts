import React, { Component } from 'react';
// React Router
// React Router turns React projects into single-page applications.
// It does this by providing a number of specialized components that manage the creation of links,
// manage the app's URL, provide transitions when navigating between different URL locations, and so much more.
// React Router is a collection of navigational components that compose declaratively with your application.
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContact extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        // creating an object that represents form data using form-serialize
        const values = serializeForm(e.target, { hash: true });

        if (this.props.onCreateContact) {
            this.props.onCreateContact(values);
        };
    }
    render() {
        return(
            <div>
                <Link className='close-create-contact' to='/'>Close</Link>
                <form className='create-contact-form' onSubmit={this.handleSubmit}>
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