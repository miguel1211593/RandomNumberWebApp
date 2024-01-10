import React from 'react';

const Input = ({placeHolder, className, type, name, value , onChange}) => {
    return (
        <input placeHolder={placeHolder} className={className} type={type} name={name} value={value} onChange={onChange}/>
      
    )
}

export default Input