import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddContact = () => {
    const { name } = this.state;
    if (name) {
      const newContact = {
        id: nanoid(),
        name,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
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

          <button type="button" onClick={this.handleAddContact}>
            Add contact
          </button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
