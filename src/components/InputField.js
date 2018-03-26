import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';
import styled from 'styled-components';


const myInputField = ({className, width, label, value, onChange, error, errorMessage, ...props}) => (
    <div className={className}>
        <Col componentClass={ControlLabel} md={width} className="input-label">{label}</Col>
        <Col md={width}>
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

export default styled(myInputField)`
    .input-label {
        text-align: right;
    }
    .input-field {
        text-align: left;
        width: 100%;
    }
  
    padding: 20px 0;  
`;
