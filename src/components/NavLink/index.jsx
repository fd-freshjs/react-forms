import React from 'react';

function NavLink(props) {
  function onClick(e) {
    e.preventDefault();

    props.goTo(props.to);
  }

  return <a href={props.to} onClick={onClick}>
    {props.children}
  </a>;
}

export default NavLink;
