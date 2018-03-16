import React from 'react';
import Tooltip from './Tooltip';

export default ({id, message, children, ...props}) => {
    return (<span>
        {React.cloneElement(children, {['data-tip']: true, ['data-for']: id})}
        <Tooltip
            id={id}
        >
            <div>{message}</div>
        </Tooltip>
    </span>);
};
