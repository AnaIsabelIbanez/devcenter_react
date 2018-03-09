import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';

export default ({width, label, value, onChange, error, ...props}) => (
    <FormGroup>
        <Col componentClass={ControlLabel} sm={width}>{label}</Col>
        <FormControl
            type="text"
            value={value}
            onChange={onChange}
            validationstate={error === true ? 'error' : null}
            {...props}
        />
    </FormGroup>
);
