import React from 'react';

const Input = ({id, type = "number", placeholder, value, label, setValue}) => {
    const onChange = (value) => {
        setValue(value);
    }

    return (
        <div>
            <label htmlFor={id} className="label">{label}</label>
            <input type={type} placeholder={placeholder} id={id} value={value} onChange={({target}) =>onChange(target.value)} className="input" />
        </div>
    );
};

export default Input;