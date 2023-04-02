import { Component } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';

export default class List extends Component {
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
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="scrollable-list">
        <ul className="listContacts">
          {filteredContacts.map(e => (
            <li key={e.contacts.id}>
              <b>{e.contacts.name}</b> - {e.contacts.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
