import React, { Component } from 'react'; // Component only if using class
import PropTypes from 'prop-types';

// Components concerns > Which state in the application, and how does my UI change based on that state

// using class
class ListContacts extends Component {
    constructor() {
        super(); // calling super method is required
        console.log(this);
    };
    // using lib prop-types, we can handle props config, like their type and requirement
    // This is used to throw errors in the console to warn developers that they are doing something wrong with props
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    };
    state = {
        query: '',
    };
    updateQuery = query => {
        this.setState(() => ({
            query: query.trim(),
        }));
    };
    clearQuery = () => {
        this.updateQuery('');
    };
    // render is REQUIRED
    render() {
        // destructuting
        const { query } = this.state;
        const { contacts, onDeleteContact } = this.props;

        const showingContacts = query === ''
        ? contacts
        : contacts.filter((contact) => (
            // includes checks if string exists
            contact.name.toLowerCase().includes(query.toLowerCase())
        ));

        // returning the html list
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input className='search-contacts' type='text' placeholder='Search Contacts'
                    value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
                
                {showingContacts.length !== contacts.length && (
                    // this div will only render if the condition above is true
                    // there are two ways to call functions inside html properties:
                    // 1 - without parameters = onClick={this.clearQuery}
                    // 2 - with parameters = onClick={() => this.clearQuery()}
                    // need to use () => before invoking function
                    <div className="showing-contacts">
                        <span>Now showing {showingContacts.length} of {contacts.length} contacts.</span>
                        <button onClick={() => this.clearQuery()}>Show all</button>
                    </div>
                )}
                
                <ol className='contact-list'>
                    {/* using PROPS to receive a contacts list, and mapping through the array */}
                    {showingContacts.map(contact => (
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
                            <button onClick={() => onDeleteContact(contact)} className='contact-remove'>Remove</button>
                        </li> 
                    ))}
                </ol>
            </div>
        );
    };
};

// STATELESS FUNCTION component (If your component does not keep track of internal state, only renders)
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

// Controlled components control the state of a form, instead of having their state inside of the DOM
// Benefits: Instant input validation, conditionally disable for months, enforce input formats

// components should be the default export
export default ListContacts;