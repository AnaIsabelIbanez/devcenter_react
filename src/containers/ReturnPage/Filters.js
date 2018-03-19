import React from 'react';
import {Form, Col, Button, Row, Grid, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import 'react-dates/initialize';
import moment from 'moment/moment';
import 'react-dates/lib/css/_datepicker.css';

import FormField from '../../components/FormField';
import Select from '../../components/SelectForm';
import SingleDatepickerWrapper from '../../components/SingleDatepickerWrapper';
import FieldWithTooltip from '../../components/FieldWithTooltip';
import {getLiteral} from '../../utils/utilities';
import {dateFormat} from '../App/constants';

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

export default ({
    fields,
    changeField,
    launchFilter,
    clearFields,
    disabled,
    buttonDisabled,
    fetchStatus,
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
                            label={getLiteral('return.returnNum')}
                            fields={fields}
                            nameField="order_id"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        <FieldWithTooltip
                            id="filter_return_type"
                            message={getLiteral('return.filterInfo')}
                        >
                            <CustomSelect
                                label={getLiteral('return.returnType')}
                                width={3}
                                options={returnTypes}
                                error={false}
                                fields={fields}
                                nameField="return_type"
                                onChange={changeField}
                                disabled={disabled}
                                loading={fetchStatus.returnTypes.fetching === true}
                            />
                        </FieldWithTooltip>

                        <FieldWithTooltip
                            id="filter_member_reason"
                            message={getLiteral('return.filterInfo')}
                        >
                            {/*nameField correcto ??????*/}
                            <CustomSelect
                                label={getLiteral('return.returnReason')}
                                width={3}
                                options={reasons}
                                error={false}
                                fields={fields}
                                nameField="member_reason"
                                onChange={changeField}
                                disabled={disabled}
                                loading={fetchStatus.returnReasons.fetching === true}
                            />
                        </FieldWithTooltip>
                    </Col>

                    <Col md={3}>
                        <FieldWithTooltip
                            id="filter_warehouse_name"
                            message={getLiteral('return.filterInfo')}
                        >
                            <CustomSelect
                                label={getLiteral('return.destinationWarehouse')}
                                width={4}
                                options={warehouseNames}
                                error={false}
                                fields={fields}
                                nameField="warehouse_name"
                                onChange={changeField}
                                disabled={disabled}
                                loading={fetchStatus.warehouseNames.fetching === true}
                            />
                        </FieldWithTooltip>

                        <CustomField
                            width={4}
                            label={getLiteral('common.campaingId')}
                            fields={fields}
                            nameField="campaign_id"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        <CustomField
                            width={4}
                            label={getLiteral('common.compaignName')}
                            fields={fields}
                            nameField="campaign_name"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        {/*nameField correcto???*/}
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>{getLiteral('return.returnDate')}</Col>
                            <SingleDatepickerWrapper
                                date={moment(fields.checkin_date)}
                                onDateChange={(date) => changeField({checkin_date: date.toISOString()})}
                                numberOfMonths={1}
                                displayFormat={dateFormat}
                                disabled={disabled}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <CustomField
                            width={4}
                            label={getLiteral('return.partnerName')}
                            fields={fields}
                            nameField="member_name"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />
                        <CustomField
                            width={4}
                            label={getLiteral('return.partnerEmail')}
                            fields={fields}
                            nameField="member_email"
                            onChange={changeField}
                            error={true}
                            disabled={disabled}
                        />
                    </Col>
                    <Col md={3}>
                        <fieldset style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                            <legend style={{width: 'auto', fontSize: '14px'}}>{getLiteral('return.warehouse')}</legend>
                            <Row>
                                <Col md={5}>
                                    <label>
                                        {getLiteral('return.managedWarehouse')}
                                        <input type="checkbox"/>
                                    </label>
                                </Col>
                                <Col md={5}>
                                    <FormGroup>
                                        <Col componentClass={ControlLabel} md={4}>{getLiteral('common.date')}</Col>
                                        <SingleDatepickerWrapper
                                            date={moment(fields.warehouse_date)}
                                            onDateChange={(date) => changeField({warehouse_date: date.toISOString()})}
                                            numberOfMonths={1}
                                            displayFormat={dateFormat}
                                            disabled={disabled}
                                        />
                                    </FormGroup>
                                </Col>
                                <FieldWithTooltip
                                    id="warehouse_subreason"
                                    message={getLiteral('return.filterInfo')}
                                >
                                    <CustomSelect
                                        label={getLiteral('return.subreason')}
                                        width={4}
                                        options={subreasons}
                                        error={false}
                                        fields={fields}
                                        nameField="warehouse_subreason"
                                        onChange={changeField}
                                        disabled={disabled}
                                        loading={fetchStatus.returnSubreasons.fetching === true}
                                    />
                                </FieldWithTooltip>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} mdOffset={6}>
                        <Button type="submit" disabled={buttonDisabled}>{getLiteral('common.filter')}</Button>
                        <Button
                            onClick={() => clearFields()}
                            disabled={buttonDisabled}
                        >
                            {getLiteral('common.clear')}
                        </Button>

                    </Col>
                </Row>
            </div>
        </Form>
    );
};
