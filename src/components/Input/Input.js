import React from 'react';

const Input = ({type, className, value, onChange}) => {
 return (
     <input type={type} className={className} value={value} onChange={onChange}></input>
 )
}

export default Input;