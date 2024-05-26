import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddContact = () => {
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

  render() {
    const contacts = this.state.contacts;
    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <label htmlFor="nameInput">Name </label>
          <input
            id="nameInput"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="numberInput">Number </label>
          <input
            id="numberInput"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />

          <button type="button" onClick={this.handleAddContact}>
            Add contact
          </button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
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
