import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';

import LoadingIndicator from './LoadingIndicator';
import Icon from './Icon';

export default ({width = '', label, value, onChange, options, error, loading, ...props}) => (
    <FormGroup>
        <Col componentClass={ControlLabel} md={width}>{label}</Col>
        {loading
            ? <div>
                <FormControl type="text"/>
                <Icon spin name="circle-o-notch" />
            </div>
            :  <FormControl
                componentClass="select"
                value={value}
                onChange={onChange}
                validationstate={error === true ? 'error' : null}
                {...props}
            >
                <option value=""></option>
                {options && options.map((elem, i) => (
                    <option key={i} value={elem.id}>{elem.text}</option>
                ))}
            </FormControl>}
    </FormGroup>
);
