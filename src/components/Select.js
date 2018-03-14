import React from 'react';

import LoadingIndicator from './LoadingIndicator';

export default ({value, onChange, options, loading, ...props}) => {
    return (<span>{loading
        ? <LoadingIndicator/>
        : <select
            value={value}
            onChange={({target}) => onChange(target.value)}
        >   {options && options.map((opt, index) => {
                return (<option key={index} value={opt.id}>{opt.text}</option>);
            })}</select>}</span>);
};
