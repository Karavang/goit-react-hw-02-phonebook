import { Component } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    search: '',
  };
  addContact = (name, number) => {
    const newContact = {
           id: nanoid(),
           name: name,
           number: number,
         };
 
    this.setState(prevState => ({
       contacts: [...prevState.contacts, newContact],
     }));
   };
  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
   
    
    return (
      <div className="all-pos">
        <ul className="flexator">
          <li>
            <form action="">
              <h1>Phonebook</h1>
           
<Form addContact={this.addContact } />
              
            </form>
          </li>
          <li>
            <h1>Contacts</h1>
            <input
              type="text"
              name="search"
              value={this.state.search}
              className="form-control"
              placeholder="Search by name"
              onChange={e => {
                this.setState({ search: e.target.value });
              }}
            />
            <div className="scrollable-list">
              <ul className="listContacts">
                {filteredContacts.map(e => (
                  <li key={e.id}>
                    <b>{e.name}</b> - {e.number}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
Phonebook.propTypes = {
  contacts: PropTypes.object.isRequired,
};

export default Phonebook;
