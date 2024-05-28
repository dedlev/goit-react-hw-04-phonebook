import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterWrapper } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
