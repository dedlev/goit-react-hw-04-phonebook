import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <p>
        {name}: {number}
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
