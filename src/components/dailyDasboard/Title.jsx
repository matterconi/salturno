// src/components/Title.js
import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <div className="bg-blue-600 text-white py-2 px-4 rounded-t-md">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
