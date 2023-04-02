import { Component } from 'react';
import React from 'react';

export default class Filter extends Component {
  state = {
    filter: '',
  };
  addContact = filter => {
    const newFilter = {
      filter: filter,
    };
    console.log(this.state.filter);
    this.setState(prevState => ({
      filter: [prevState.filter, newFilter],
    }));
  };
  render() {
    return (
      <input
        type="text"
        name="search"
        value={this.state.filter}
        className="form-control"
        placeholder="Search by name"
        onChange={e => {
          this.setState({ filter: e.target.value });
          this.props.addContact(this.state.filter);
        }}
      />
    );
  }
}
