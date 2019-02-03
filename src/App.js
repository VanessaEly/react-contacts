import React, { Component } from 'react';
import ListContacts from './ListContacts'
import './App.css';
import * as ContactsAPI from './utils/ContactsAPI'; 

/* Composition
    Combining simple functions together to create complex functions.
    React builds up pieces of a UI using components.

    Imperative Code
    We tell JavaScript exactly what to do and how to do it.
    Think of it as if we're giving JavaScript commands on exactly what steps it should take.

    Declarative Code
    We declare what we want done, and JavaScript will take care of doing it.
    people.map(name => name + '!') or people.filter(name => name.length > 6)

    React is declarative because we write the code that we want, and React is in charge
    of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

    Data Flow
    In React, the data flows from the parent component to a child component. If the child component needs to make
    a change to the data, then it would send the updated data to the parent component where the change will actually be made
*/

class App extends Component {
  // Props refer to attributes from parent components, props represent "read-only" data that are immutable.
  // But a component's STATE, represents mutable data that affects what is rendered on the page.
  // State is managed internally by the component itself and is meant to change over time,
  // commonly due to user input (e.g., clicking on a button on the page).
  // By having a component manage its own state, many times there are changes made to that state,
  // React will know and automatically make the necessary updates to the page.
  // This process of determining what has changed in the previous and new outputs is called Reconciliation.

  // state is a class property, doesn't go inside the constructor, which means it is a class field
  // if we pass props without using state, when we try to edit anything, react won't recognize the changes
  // Using local state, react will be able to see those changes and update the UI based on them

  // a state that is needed by multiple components should be lifted up to their closest common ancestor
  // PS: avoid initializing that state with props, the current state will not change unless the component is "refreshed."
  // and also to avoid duplication of data

  state = {
    contacts: [],
  }
  // Lifecycle events
  // Special methods each component has that allow us to run custom behavior during certain times of the component's life
  // - componentDidMount > after component is inserted into the DOM. componentDidMount() is invoked immediately
  // after a component is mounted. Initialization that requires DOM nodes should go here.
  // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  // Setting state in this method will trigger a re-rendering.
  // - componentWillUnmount > before component is removed from the DOM
  // - getDerivedStateFromProps > mounting or re-rendering component (brand new props are received)
  componentDidMount() {
    // perfect place to put http requests
    // need to set a state if we want to re-render the page and update anything
    console.log('mounted!');
    ContactsAPI.getAll().then( result => {
      this.setState(() => ({ contacts: result }));
      console.log('state = ', this.state);
    });
  }
  // The following lifecycle events will be called in order when a component is being added to the DOM:
  // constructor(), getDerivedStateFromProps(), render(), componentDidMount()

  // The following lifecycle events will be called in order when a component is re-rendered to the DOM:
  // getDerivedStateFromProps(), shouldComponentUpdate(), render(),
  // getSnapshotBeforeUpdate()(specific use cases), componentDidUpdate()

  // This lifecycle event is called when a component is being removed from the DOM:
  // componentWillUnmount()

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

    ContactsAPI.remove(contact);
  }
  
  // The render method should be free from side effects, it shouldn't do anything that is asynchronous
  // it should only receive props and return a description of the UI (JSX)
  render() {
    console.log('rendering...');
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
