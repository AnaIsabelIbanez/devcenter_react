import React from 'react';
import {ControlLabel, Col, FormControl} from 'react-bootstrap';
import styled from 'styled-components';


const myInputField = ({className, width, inputWidth, label, value, onChange, error, errorMessage, ...props}) => (
    <div className={className}>
        <Col componentClass={ControlLabel} md={width} className="input-label">{label}</Col>
        <Col md={inputWidth ? inputWidth : width}>
            <FormControl
                className="input-field"
                type="text"
                value={value}
                onChange={onChange}
                validationstate={error === true ? 'error' : null}
                {...props}
            />
        </Col>
        {error && <div>{errorMessage}</div>}
    </div>
);

export const GenericInput = styled(myInputField)`
    .input-label {
        text-align: right;
    }
    .input-field {
        text-align: left;
        width: 100%;
    }
`;

export const InputForm = GenericInput.extend`
    padding: 20px 0;  
`;
