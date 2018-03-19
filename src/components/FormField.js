import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

export default ({width, label, value, onChange, error, errorMessage, ...props}) => (
    <FormGroup>
        <Col componentClass={ControlLabel} sm={width}>{label}</Col>
        <FormControl
            type="text"
            value={value}
            onChange={onChange}
            validationstate={error === true ? 'error' : null}
            {...props}
        />
        {error && <div>{errorMessage}</div>}
    </FormGroup>
);
