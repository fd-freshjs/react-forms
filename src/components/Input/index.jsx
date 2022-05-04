import React from 'react';

function Input(props) {
  function onChange(event) {
    const value = event.target.value;
    const key = event.target.name;

    props.getValue({ [key]: value });
  }

  return (
    <input
      className={props.className}
      type={props.type || 'text'}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange} // var1
      // onChange={onChange} // var2
    />
  );
}

export default Input;
