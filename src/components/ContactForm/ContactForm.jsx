import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormInput } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: 'aa',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <p>Number</p>
          <FormInput
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <Button type="submit" disabled={!(name && number)}>
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
