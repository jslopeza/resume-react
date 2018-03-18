import React from 'react';

const Icon = ({ children, className, type }) => (
  <i className={`${type} fa-${children} ${className}`} />
);

Icon.defaultProps = {
  type: 'fas',
};

export default Icon;
