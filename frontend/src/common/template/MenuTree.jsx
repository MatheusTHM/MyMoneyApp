import React from 'react';

const MenuTree = ({ icon, label, children }) => {
  return (
    <li className="treeview">
      <a href>
        <i className={`fa fa-${icon}`}></i> {label}
        <i className={`fa fa-angle-left pull-right`}></i>
      </a>
      <ul className="treeview-menu">{children}</ul>
    </li>
  );
};

export default MenuTree;
