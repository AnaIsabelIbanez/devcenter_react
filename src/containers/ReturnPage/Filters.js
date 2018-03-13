import React, {Component} from 'react';
import {Form, Col, Button, Row, Grid, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import 'react-dates/initialize';
import moment from 'moment/moment';
import 'react-dates/lib/css/_datepicker.css';

import FormField from '../../components/FormField';
import Select from '../../components/SelectForm';
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


export default class ReturnFilters extends Component {

    render() {
        const {
            fields,
            changeField,
            launchFilter,
            clearFields,
            disabled,
            reasonsOptions,
            subreasonOptions
        } = this.props;

        return (
            <Form inline onSubmit={(e) => {
                e.preventDefault();
                launchFilter();
            }}>
                <Grid>
                    <Row>
                        <Col md={4}>
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
                                options={[{id: 1, text: 'prueba'}, {id: 2, text: 'prueba2'}]}
                                error={false}
                                fields={fields}
                                nameField="return_type"
                                onChange={changeField}
                                disabled={disabled}

                            />
                            {/*nameField correcto ??????*/}
                            <CustomSelect
                                label="Motivo de la devolución"
                                width={3}
                                options={reasonsOptions}
                                error={false}
                                fields={fields}
                                nameField="member_reason"
                                onChange={changeField}
                                disabled={disabled}

                            />
                        </Col>

                        <Col md={4}>
                            <CustomSelect
                                label="Almacén destino devolución"
                                width={4}
                                options={[{id: 1, text: 'prueba'}, {id: 2, text: 'prueba2'}]}
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
                        <Col md={4}>
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
                </Grid>
            </Form>
        );
    }
};
