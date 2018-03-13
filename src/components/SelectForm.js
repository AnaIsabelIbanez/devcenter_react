import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';

import LoadingIndicator from './LoadingIndicator';

export default ({width = '', label, value, onChange, options, error, loading, ...props}) => (
    <FormGroup>
        <Col componentClass={ControlLabel} md={width}>{label}</Col>
        {loading
            ? <LoadingIndicator/>
            :  <FormControl
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
            </FormControl>}
    </FormGroup>
);
