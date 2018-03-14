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
            options: {brands, categories, sizes, colors}
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
                                label={'Ean'}
                                fields={fields}
                                nameField="ean"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomField
                                width={3}
                                label={'Referencia comercial'}
                                fields={fields}
                                nameField="ref_com"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomField
                                width={3}
                                label={'Referencia física'}
                                fields={fields}
                                nameField="ref_physic"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomField
                                width={3}
                                label={'Referencia logística'}
                                fields={fields}
                                nameField="ref_logistic"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomField
                                width={3}
                                label={'Id campaña'}
                                fields={fields}
                                nameField="campaign_id"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                        </Col>

                        <Col md={4}>
                            <CustomField
                                width={3}
                                label={'Text'}
                                fields={fields}
                                nameField="text"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomSelect
                                label="Brand"
                                width={4}
                                options={brands}
                                error={false}
                                fields={fields}
                                nameField="brand"
                                onChange={changeField}
                                disabled={disabled}

                            />
                            <CustomSelect
                                label="Category"
                                width={4}
                                options={categories}
                                error={false}
                                fields={fields}
                                nameField="category"
                                onChange={changeField}
                                disabled={disabled}

                            />
                            <CustomSelect
                                label="Size"
                                width={4}
                                options={sizes}
                                error={false}
                                fields={fields}
                                nameField="size"
                                onChange={changeField}
                                disabled={disabled}

                            />
                            <CustomSelect
                                label="Color"
                                width={4}
                                options={colors}
                                error={false}
                                fields={fields}
                                nameField="color"
                                onChange={changeField}
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
