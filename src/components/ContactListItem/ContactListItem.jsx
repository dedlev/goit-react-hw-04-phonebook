import React from 'react';
import PropTypes from 'prop-types';
import { DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <p>
        {name}: {number}
        <DeleteButton type="button" onClick={handleDelete}>
          Delete
        </DeleteButton>
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  }).isRequired,
};
