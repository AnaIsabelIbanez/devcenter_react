import React from 'react';

export default ({value, onChange, options,...props}) => (
    <select
        value={value}
        onChange={({target}) => onChange(target.value)}
    >   {options.map((opt, index) => {
            return (<option key={index} value={opt.id}>{opt.text}</option>);
        })}</select>
);

