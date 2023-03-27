import { Component } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    search: '',
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
              <div className="form">
                <h3 className="area-for-enter">Name</h3>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="form-control"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={e => {
                    this.setState({ name: e.target.value });
                  }}
                />
                <h3 className="area-for-enter">Number</h3>
                <input
                  type="tel"
                  name="number"
                  value={this.state.number}
                  className="form-control"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={e => {
                    this.setState({ number: e.target.value });
                  }}
                />
              </div>
              <Button />
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
