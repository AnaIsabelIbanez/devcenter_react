import React, {Component} from 'react';
import {Form,Col, Button, Row, Grid} from 'react-bootstrap';
// import DatePicker from 'react-bootstrap-date-picker';
// import { SingleDatePicker } from 'react-dates';

import FormField from '../../components/FormField';
import Select from '../../components/Select';

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
            clearFields
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
                            />
                            <CustomField
                                width={3}
                                label={'Número de pedido'}
                                fields={fields}
                                nameField="order_id"
                                onChange={changeField}
                                error={false}
                            />
                            <CustomSelect
                                label="Tipo de devolución"
                                width={3}
                                options={[{id: 1, text: 'prueba'}, {id: 2, text: 'prueba2'}]}
                                error={false}
                                fields={fields}
                                nameField="return_type"
                                onChange={changeField}

                            />
                            {/*nameField correcto ??????*/}
                            <CustomSelect
                                label="Motivo de la devolución"
                                width={3}
                                options={[{id: 1, text: 'prueba'}, {id: 2, text: 'prueba2'}]}
                                error={false}
                                fields={fields}
                                nameField="member_reason"
                                onChange={changeField}

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

                            />

                            <CustomField
                                width={4}
                                label={'Id Campaña'}
                                fields={fields}
                                nameField="campaign_id"
                                onChange={changeField}
                                error={false}
                            />

                            <CustomField
                                width={4}
                                label={'Campaña'}
                                fields={fields}
                                nameField="campaign_name"
                                onChange={changeField}
                                error={false}
                            />

                            {/*nameField correcto???*/}
                            <CustomField
                                width={4}
                                label={'Fecha de devolución'}
                                fields={fields}
                                nameField="checkin_date"
                                onChange={changeField}
                                error={false}
                            />
                            <SingleDatePicker
                                value={fields.checkin_date ? fields.checkin_date : ''}
                                onChange={({target}) => changeField({checkin_date: target.value})}
                                dateFormat="MM/DD/YYYY"
                            />
                        </Col>
                        <Col md={4}>
                            <CustomField
                                width={4}
                                label={'Nombre del socio'}
                                fields={fields}
                                nameField="member_name"
                                onChange={changeField}
                                error={false}
                            />
                            <CustomField
                                width={4}
                                label={'Mail del socio'}
                                fields={fields}
                                nameField="member_email"
                                onChange={changeField}
                                error={true}
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
