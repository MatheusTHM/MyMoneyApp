import React from 'react';

const MenuItem = ({ path, icon, label }) => {
  return (
    <li>
      <a href={path}>
        <i className={`fa fa-${icon}`}></i> {label}
      </a>
    </li>
  );
};

export default MenuItem;
