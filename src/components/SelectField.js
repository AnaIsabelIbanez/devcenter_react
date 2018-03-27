import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';

import Icon from './Icon';
import styled from 'styled-components';

// Example of convert function to pass the component if needed:
// const convert = (item) => ({
//     'id': item.id,
//     'text': item.text
// });

const mySelectField = ({className, width, inputWidth, label, value, onChange, options, error, loading, convert, ...props}) => (
    <div className={className}>
        <Col componentClass={ControlLabel} md={width} className="select-label">{label}</Col>
        <Col md={inputWidth ? inputWidth : width}>
            {loading
                && <span>
                    <Icon className="loading-icon" spin name="circle-o-notch" /> Loading...
                </span>}
            <FormControl
                style={{display: loading ? 'none' : 'block'}}
                className="select-field"
                componentClass="select"
                value={value}
                onChange={onChange}
                validationstate={error === true ? 'error' : null}
                {...props}
            >
                <option value=""></option>
                {options && options.map((elem, i) => {
                    const parsedElem = convert ? convert(elem) : elem;
                    return (
                        <option key={i} value={parsedElem.id}>{parsedElem.text}</option>
                    );
                })}
            </FormControl>
        </Col>
    </div>
);

export const GenericSelect = styled(mySelectField)`
    .select-label {
        text-align: right;
    }
    .select-field {
        text-align: left;
        width: 100%;
    }
`;

export const SelectForm = GenericSelect.extend`
    padding: 20px 0;  
`;
