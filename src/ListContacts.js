import React, { Component } from 'react'; // Component only if using class
import PropTypes from 'prop-types';

// Components concerns > Which state in the application, and how does my UI change based on that state

// using class
class ListContacts extends Component {

    constructor() {
        super(); // calling super method is required
        console.log(this);
    }

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
                        <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>Remove</button>
                    </li> 
                ))}
            </ol>
        );
    }
}

// stateless function component (If your component does not keep track of internal state, only renders)
// if you only need the render() propery (only render something), it's acttually better to use a function instead of a class
// functions can also return JSX components, but they need to receive the props as parameters
// and stop using the this keyword (before it was this.props, now only props)

// const ListContacts = props => ( // same as declaring a function, but doesn't need to type return
// // function ListContacts (props) {
//     // return (
//     <ol className='contact-list'>
//         {/* using PROPS to receive a contacts list, and mapping through the array */}
//         {props.contacts.map(contact => (
//             // listing each line
//             <li key={contact.id} className='contact-list-item'>
//                 <div className='contact-avatar'
//                 style={{
//                     backgroundImage: `url(${contact.avatarURL})`
//                 }}
//                 ></div>
//                 <div className='contact-details'>
//                     <p>{contact.name}</p>
//                     <p>{contact.handle}</p>
//                 </div>
//                 <button className='contact-remove'>Remove</button>
//             </li> 
//         ))}
//     </ol>
// );

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

// components should be the default export
export default ListContacts;