import '../style.css';
import React from 'react';
import PropTypes from 'prop-types';

  export const Button = ({ onClick }) => (
  <button  className="Button" type="button" onClick={onClick}>
    Load more
  </button>
);

            
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};