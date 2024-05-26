import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
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
