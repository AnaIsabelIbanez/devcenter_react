import React from 'react';
import ReactTooltip from 'react-tooltip';

export default ({
    children,
    delayShow = 300,
    effect = 'solid',
    under,
    place = under ? 'bottom' : 'right',
    type = 'dark',
    ...props
}) => (
    <ReactTooltip delayShow={delayShow} effect={effect} place={place} type={type} {...props}>
        {children}
    </ReactTooltip>
);
