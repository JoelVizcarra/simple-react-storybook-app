import React from 'react';
import PropTypes from 'prop-types';

const SIZE_MAP = {
  sm: 0.75,
  md: 1,
  lg: 1.5,
};

const Button = ({ label, backgroundColor, size, handleClick }) => {
  const scale = SIZE_MAP[size] || 1;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  };
  return (
    <button style={style} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
};

export default Button;
