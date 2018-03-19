import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';

import Icon from './Icon';

// Example of convert function to pass the component if needed:
// const convert = (item) => ({
//     'id': item.id,
//     'text': item.text
// });

export default ({width = '', label, value, onChange, options, error, loading, convert, ...props}) => (
    <FormGroup>
        <Col componentClass={ControlLabel} md={width}>{label}</Col>
        {loading
            ? <div>
                <FormControl type="text"/>
                <Icon style={{fontSize: '1.2em', top: '25%'}} spin name="circle-o-notch" />
            </div>
            :  <FormControl
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
            </FormControl>}
    </FormGroup>
);
