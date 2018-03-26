import React, {Component} from 'react';
import {Form, Col, Button, Row, Grid, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {getLiteral} from '../../utils/utilities';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
import FilterButtons from '../../components/FilterButtons';

const CustomField = ({fields, nameField, onChange, ...props}) => {
    return (
        <InputField
            value={fields[nameField] ? fields[nameField] : ''}
            onChange={({target}) => onChange({[nameField]: target.value})}
            {...props}
        />
    );
};

const CustomSelect = ({fields, nameField, onChange, ...props}) => {
    return (
        <SelectField
            value={fields[nameField] ? fields[nameField] : ''}
            onChange={({target}) => onChange({[nameField]: target.value})}
            {...props}
        />
    );
};

export default class ProductFilters extends Component {

    render() {
        const {
            fields,
            changeField,
            launchFilter,
            clearFields,
            disabled,
            options: {brands, categories, sizes, colors},
            fetch
        } = this.props;

        return (
            <Form inline onSubmit={(e) => {
                e.preventDefault();
                launchFilter();
            }}>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <CustomField
                                width={6}
                                label={getLiteral('product.ean')}
                                fields={fields}
                                nameField="ean"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomField
                                width={6}
                                label={getLiteral('product.refCom')}
                                fields={fields}
                                nameField="ref_com"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomField
                                width={6}
                                label={getLiteral('product.refPhis')}
                                fields={fields}
                                nameField="ref_physic"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomField
                                width={6}
                                label={getLiteral('product.refLog')}
                                fields={fields}
                                nameField="ref_logistic"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomField
                                width={6}
                                label={getLiteral('common.campaingId')}
                                fields={fields}
                                nameField="campaign_id"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                        </Col>

                        <Col md={6}>
                            <CustomField
                                width={6}
                                label={getLiteral('product.text')}
                                fields={fields}
                                nameField="text"
                                onChange={changeField}
                                error={false}
                                disabled={disabled}
                            />
                            <CustomSelect
                                label={getLiteral('product.brand')}
                                width={6}
                                options={brands}
                                error={false}
                                fields={fields}
                                nameField="brand"
                                onChange={changeField}
                                disabled={disabled}
                                loading={fetch.brands.fetching === true}
                            />
                            <CustomSelect
                                label={getLiteral('product.category')}
                                width={6}
                                options={categories}
                                error={false}
                                fields={fields}
                                nameField="category"
                                onChange={changeField}
                                disabled={disabled}
                                loading={fetch.categories.fetching === true}
                            />
                            <CustomSelect
                                label={getLiteral('product.size')}
                                width={6}
                                options={sizes}
                                error={false}
                                fields={fields}
                                nameField="size"
                                onChange={changeField}
                                disabled={disabled}
                                loading={fetch.sizes.fetching === true}
                            />
                            <CustomSelect
                                label={getLiteral('product.color')}
                                width={6}
                                options={colors}
                                error={false}
                                fields={fields}
                                nameField="color"
                                onChange={changeField}
                                disabled={disabled}
                                loading={fetch.colors.fetching === true}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <FilterButtons onClearFields={clearFields}/>
                    </Row>
                </Grid>
            </Form>
        );
    }
};
