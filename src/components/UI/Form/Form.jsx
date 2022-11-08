import React, { useRef, useImperativeHandle } from 'react';
import classes from './Form.module.css'

const Form = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const highlight = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(ref, () => {
    return {
      focus: highlight
    };
  });

  return (
    <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      ref={inputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
  );
})

export default Form;
