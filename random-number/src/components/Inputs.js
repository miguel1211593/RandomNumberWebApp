import React from 'react';

const Input = ({className, type, name, value , onChange}) => {
    return (
        <input className={className} type={type} name={name} value={value} onChange={onChange}/>
    )
}

export default Input