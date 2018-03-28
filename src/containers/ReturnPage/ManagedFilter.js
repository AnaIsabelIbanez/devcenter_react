import React from 'react';
import {Form, Col, Button, Row, Grid, ControlLabel, FormGroup, FormControl, Panel} from 'react-bootstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {getLiteral} from '../../utils/utilities';
import {GenericDatePicker} from '../../components/DatePickerField';
import SmallPanel from '../../components/SmallPanel';
import {GenericSelect} from '../../components/SelectField';

const SelectInPanel = ({fields, nameField, onChange, ...props}) => {
    return (
        <GenericSelect
            value={fields[nameField] ? fields[nameField] : ''}
            onChange={({target}) => onChange({[nameField]: target.value})}
            {...props}
        />
    );
};

export default ({
    title,
    fields,
    changeField,
    disabled,
    fetchStatus,
    options,
    nameDate,
    nameSubreason,
    nameManaged
}) => {
    return (
        <SmallPanel title={title}>
            <Row>
                <Col md={3}>
                    <Col componentClass={ControlLabel} md={8}>{getLiteral('return.managed')}</Col>
                    <Col md={4}>
                        <input type="checkbox" value={fields[nameManaged] === true} checked={fields[nameManaged] === true} onChange={({target}) => changeField({[nameManaged]: target.checked})}/>
                    </Col>
                </Col>
                <Col md={5}>
                    <GenericDatePicker
                        width={4}
                        inputWidth={8}
                        label={getLiteral('common.date')}
                        value={fields[nameDate]}
                        onChange={(date) => changeField({[nameDate]: date.toISOString()})}
                        disabled={disabled}
                    />
                </Col>
                <Col md={4}>
                    <SelectInPanel
                        label={getLiteral('return.subreason')}
                        width={6}
                        options={options}
                        error={false}
                        fields={fields}
                        nameField={nameSubreason}
                        onChange={changeField}
                        disabled={disabled}
                        loading={fetchStatus.returnSubreasons.fetching === true}
                    />
                </Col>
            </Row>
        </SmallPanel>
    );
};
