import React, { Component } from 'react';
import ListContacts from './ListContacts'
import './App.css';

class App extends Component {
  // Props refer to attributes from parent components, props represent "read-only" data that are immutable.
  // But a component's STATE, represents mutable data thataffects what is rendered on the page.
  // State is managed internally by the component itself and is meant to change over time,
  // commonly due to user input (e.g., clicking on a button on the page).
  // By having a component manage its own state,bany time there are changes made to that state,
  // React will know and automatically make the necessary updates to the page.
  // This process of determining what has changed in the previous and new outputs is called Reconciliation.

  // state is a class property, doesn't go inside the constructor, which means it is a class field
  // if we pass props without using state, when we try to edit anything, react won't recognize the changes
  // Using local state, react will be able to see those changes and update the UI based on them

  // a state that is needed by multiple components should be lifted up to their closest common ancestor
  // PS: avoid initializing that state with props, the current state will not change unless the component is "refreshed."
  // and also to avoid duplication of data

  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ],
  }
  // if we want to create components that modify data, we have to do it in the component where the data lives
  removeContact = (contact) => {
    // We can't simply change the state, because react won't know that the state was changed.
    // To update it, we have to use this.setState(), which can receive a function that receives the previous state
    // and returns an object that will be merged with the current state of the component.
    // Instead of that, you can also pass an object, which will be merged with the current state.
    // Your UI is just a function of your state
    // passing object instead of function
    // this.setState({
    //   key: 'tyler';
    // });

    // if you are updating the state based in the previous state, you will need to use this function callback,
    // because the current state can be passed as a function parameter
    // BUT you can always use the function
    // THIS FUNCTION NEEDS TO RETURN AN OBJECT
    // Whenever setState() is called, the component also calls render() with the new state
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id), // single line filter doesn't need return keyword
    }));

    // Though the initial state of this component contains two properties (subject and message), they can be updated independently
    // state = {
    //   subject: '',
    //   message: ''
    // }
    // this.setState({
    //   subject: 'Hello! This is a new subject'
    //  })
  }
  render() {
    return (
      <div className="App">
        {/* prop is any input that you pass to a React component, contact is a prop which will be acessible through
        this.props.contacts inside of ListContacts */}
        <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
      </div>
    );
  }
}

export default App;
