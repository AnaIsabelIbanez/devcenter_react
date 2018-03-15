import React from 'react';
import {Form, Col, Button, Row, Grid, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import 'react-dates/initialize';
import moment from 'moment/moment';
import 'react-dates/lib/css/_datepicker.css';

import FormField from '../../components/FormField';
import Select from '../../components/SelectForm';
import Tooltip from '../../components/Tooltip';
import SingleDatepickerWrapper from '../../components/SingleDatepickerWrapper';

const CustomField = ({fields, nameField, onChange, ...props}) => {
    return (
        <FormField
            value={fields[nameField] ? fields[nameField] : ''}
            onChange={({target}) => onChange({[nameField]: target.value})}
            {...props}
        />
    );
};

const CustomSelect = ({fields, nameField, onChange, ...props}) => {
    return (
        <Select
            value={fields[nameField] ? fields[nameField] : ''}
            onChange={({target}) => onChange({[nameField]: target.value})}
            {...props}
        />
    );
};

const FieldWithTooltip = () => {
    return (<span>

    </span>);
};

export default ({
    fields,
    changeField,
    launchFilter,
    clearFields,
    disabled,
    options: {subreasons, reasons, returnTypes, warehouseNames}
}) => {
    return (
        <Form inline onSubmit={(e) => {
            e.preventDefault();
            launchFilter();
        }}>
            <div>
                <Row>
                    <Col md={3}>
                        <CustomField
                            width={3}
                            label={'Número de devolución'}
                            fields={fields}
                            nameField="return_id"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />
                        <CustomField
                            width={3}
                            label={'Número de pedido'}
                            fields={fields}
                            nameField="order_id"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />
                        <CustomSelect
                            label="Tipo de devolución"
                            width={3}
                            options={returnTypes}
                            error={false}
                            fields={fields}
                            nameField="return_type"
                            onChange={changeField}
                            disabled={disabled}
                            data-for={'returnTypeFilter'}
                            data-tip
                        />
                        <Tooltip
                            id={'returnTypeFilter'}
                        >
                            <div>hola</div>
                        </Tooltip>
                        {/*nameField correcto ??????*/}
                        <CustomSelect
                            label="Motivo de la devolución"
                            width={3}
                            options={reasons}
                            error={false}
                            fields={fields}
                            nameField="member_reason"
                            onChange={changeField}
                            disabled={disabled}

                        />
                    </Col>

                    <Col md={3}>
                        <CustomSelect
                            label="Almacén destino devolución"
                            width={4}
                            options={warehouseNames}
                            error={false}
                            fields={fields}
                            nameField="warehouse_name"
                            onChange={changeField}
                            disabled={disabled}

                        />

                        <CustomField
                            width={4}
                            label={'Id Campaña'}
                            fields={fields}
                            nameField="campaign_id"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        <CustomField
                            width={4}
                            label={'Campaña'}
                            fields={fields}
                            nameField="campaign_name"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        {/*nameField correcto???*/}
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>Fecha de devolución</Col>
                            <SingleDatepickerWrapper
                                date={moment(fields.checkin_date)} // momentPropTypes.momentObj or null
                                onDateChange={(date) => changeField({checkin_date: date.toISOString()})} // PropTypes.func.isRequired
                                numberOfMonths={1}
                                displayFormat="DD/MM/YYYY"
                                disabled={disabled}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <CustomField
                            width={4}
                            label={'Nombre del socio'}
                            fields={fields}
                            nameField="member_name"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />
                        <CustomField
                            width={4}
                            label={'Mail del socio'}
                            fields={fields}
                            nameField="member_email"
                            onChange={changeField}
                            error={true}
                            disabled={disabled}
                        />
                    </Col>
                    <Col md={3}>
                        <fieldset style={{ border: '1px solid black', margin: '10px', padding: '10px'}}>
                            <legend style={{width: 'auto', fontSize: '14px'}}>Almacén</legend>
                            <Row>
                                <Col md={5}>
                                    <label>
                                        Tratada por el almacén?
                                        <input type="checkbox" checked />
                                    </label>
                                </Col>
                                <Col md={5}>
                                    <FormGroup>
                                        <Col componentClass={ControlLabel} md={4}>Fecha</Col>
                                        <SingleDatepickerWrapper
                                            date={moment(fields.warehouse_date)}
                                            onDateChange={(date) => changeField({warehouse_date: date.toISOString()})}
                                            numberOfMonths={1}
                                            displayFormat="DD/MM/YYYY"
                                            disabled={disabled}
                                        />
                                    </FormGroup>
                                </Col>
                                <CustomSelect
                                    label="Submotivo"
                                    width={4}
                                    options={subreasons}
                                    error={false}
                                    fields={fields}
                                    nameField="warehouse_name"
                                    onChange={changeField}
                                    disabled={disabled}

                                />
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} mdOffset={6}>
                        <Button type="submit">Filter</Button>
                        <Button
                            onClick={() => clearFields()}
                        >
                                Clear
                        </Button>

                    </Col>
                </Row>
            </div>
        </Form>
    );
};
