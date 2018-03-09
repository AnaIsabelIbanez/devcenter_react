import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';

export default ({width, label, value, onChange, options, error, ...props}) => (
    <FormGroup>
        <Col componentClass={ControlLabel} md={width}>{label}</Col>
        <FormControl
            componentClass="select"
            value={value}
            onChange={onChange}
            validationstate={error === true ? 'error' : null}
            {...props}
        >
            <option value=""></option>
            {options.map((elem, i) => (
                <option key={i} value={elem.id}>{elem.text}</option>
            ))}
        </FormControl>
    </FormGroup>
);
