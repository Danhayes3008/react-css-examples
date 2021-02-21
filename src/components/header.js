import React from 'react';
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "CSS Tricks and Tips",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
