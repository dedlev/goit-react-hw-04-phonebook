import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name && number) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleAddContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        ></input>
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
