import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDelete: PropTypes.func.isRequired,
    })
  ).isRequired,
};
