import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import {dateFormat} from '../containers/App/constants';
import {getLiteral} from '../utils/utilities';
import moment from 'moment/moment';
import SingleDatepickerWrapper from './SingleDatepickerWrapper';


const myInputField = ({className, width, inputWidth, label, value, onChange, error, errorMessage, disabled, ...props}) => (
    <div className={className}>
        <Col componentClass={ControlLabel} md={width}  className="date-label">{label}</Col>
        <Col md={inputWidth ? inputWidth : width}>
            <SingleDatepickerWrapper
                className="date-field"
                date={value ? moment(value) : null}
                onDateChange={onChange}
                numberOfMonths={1}
                displayFormat={dateFormat}
                disabled={disabled}
                {...props}
            />
        </Col>
    </div>
);

export const GenericDatePicker = styled(myInputField)`
    .date-label {
        text-align: right;
    }
    .date-field {
        text-align: left;
        width: 100%;
    }
`;

export const DatePickerForm = GenericDatePicker.extend`
    padding: 20px 0;  
`;
