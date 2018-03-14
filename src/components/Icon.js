import React from 'react';
import PropTypes from 'prop-types';

/* |Prop        |Type       |Default  |Description                                |
 * |------------|-----------|---------|-------------------------------------------|
 * |name        |string     |undefined|Required: Name of the Font Awesome Icon    |
 * |[className] |string     |undefined|Set a CSS class for extra styles           |
 * |[size]      |string     |undefined|Increase size: 'lg', '2x', '3x', '4x', '5x'|
 * |[rotate]    |string     |undefined|Rotate by deg:'90', '180', '270'           |
 * |[flip]      |string     |undefined|Flips Icon: 'horizontal', 'vertical'       |
 * |[fixedWidth]|boolean    |false    |Set Icon to a fixed width                  |
 * |[spin]      |boolean    |false    |Rotate Icon                                |
 * |[pulse]     |boolean    |false    |Rotate Icon in 8 steps                     |
 * |[stack]     |string     |undefined|Stack Icons: '1x', '2x'. [More Info][]     |
 * |[inverse]   |boolean    |false    |Inverse the Icon color                     |
 * |[Component] |string/func|span     |Alternate DOM element                      | */

// TODO: Add options "fa-pull-left" & "fa-pull-right"

const Icon = ({
    Component,
    name,
    size,
    rotate,
    flip,
    spin,
    fixedWidth,
    stack,
    inverse,
    pulse,
    className,
    ...props
}) => {
    let classNames = `fa fa-${name}`;
    classNames += size ? ` fa-${size}` : '';
    classNames += rotate ? ` fa-rotate-${rotate}` : '';
    classNames += flip ? ` fa-flip-${flip}` : '';
    classNames += fixedWidth ? ' fa-fw' : '';
    classNames += spin ? ' fa-spin' : '';
    classNames += pulse ? ' fa-pulse' : '';
    classNames += stack ? ` fa-stack-${stack}` : '';
    classNames += inverse ? ' fa-inverse' : '';
    classNames += className ? ` ${className}` : '';
    return <Component {...props} className={classNames} />;
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.oneOf(['45', '90', '135', '180', '225', '270', '315']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    fixedWidth: PropTypes.bool,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    stack: PropTypes.oneOf(['1x', '2x']),
    inverse: PropTypes.bool,
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Icon.defaultProps = {
    Component: 'span'
};

export default Icon;
