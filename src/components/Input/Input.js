import React from 'react';

const Input = ({type, className, value, onChange,onKeyPress}) => {
 return (
     <input type={type} className={className} value={value} onChange={onChange} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }}></input>
 )
}

export default Input;