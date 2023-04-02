import { Component } from 'react';

import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Filter from './Filter';
import List from './ContactList';
class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = (name, number, filter) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const newFilter = {
      filter: filter,
    };
    console.log(newContact);
    console.log(newFilter);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      filter: [...prevState.filter, newFilter],
    }));
  };

  render() {
    return (
      <div className="all-pos">
        <ul className="flexator">
          <li>
            <form action="">
              <h1>Phonebook</h1>
              <Form addContact={this.addContact} />
            </form>
          </li>
          <li>
            <h1>Contacts</h1>
            <Filter addContact={this.addContact} />
            <List addContact={this.addContact} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Phonebook;