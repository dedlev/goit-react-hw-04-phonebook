
import {  useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormInput } from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
 const handleSubmit = event => {
   event.preventDefault();
   
   onAddContact({ name, number });
   setName('');
   setNumber('');
  }
 
    const handleChange = event => {
      const { name, value } = event.target;
      
      switch (name) {
        case 'name':
          setName(value);
          break;
        
        case 'number':
          setNumber(value);
          break;
        
        default:
          throw new Error(`Тип поля  -  ${name} не обробляється`)
      }
    };
  
  return (  
      <Form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>Number</p>
          <FormInput
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <Button type="submit" disabled={!(name && number)}>
          Add contact
        </Button>
      </Form>
    );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
