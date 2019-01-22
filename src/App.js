import React, { Component } from 'react';
import ListContacts from './ListContacts'
import './App.css';

const contacts = [
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
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* prop is any input that you pass to a React component, contact is a prop which will be acessible through
        this.props.contacts inside of ListContacts */}
        <ListContacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
