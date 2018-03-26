import React from 'react';
import {Form, Col, Button, Row, Grid, ControlLabel, FormGroup, FormControl, Panel} from 'react-bootstrap';
import 'react-dates/initialize';
import moment from 'moment/moment';
import 'react-dates/lib/css/_datepicker.css';

import FormField from '../../components/InputField';
import Select from '../../components/SelectField';
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
                            width={6}
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
                                width={6}
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
                                width={6}
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
                                width={6}
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
                            width={6}
                            label={getLiteral('common.campaingId')}
                            fields={fields}
                            nameField="campaign_id"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        <CustomField
                            width={6}
                            label={getLiteral('common.compaignName')}
                            fields={fields}
                            nameField="campaign_name"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        {/*nameField correcto???*/}
                        <FormGroup>
                            <Col componentClass={ControlLabel} md={6}>{getLiteral('return.returnDate')}</Col>
                            <Col md={6}>
                                <SingleDatepickerWrapper
                                    small={true}
                                    date={fields.checkin_date ? moment(fields.checkin_date) : null}
                                    onDateChange={(date) => changeField({checkin_date: date.toISOString()})}
                                    numberOfMonths={1}
                                    displayFormat={dateFormat}
                                    disabled={disabled}
                                />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <CustomField
                            width={6}
                            label={getLiteral('return.partnerName')}
                            fields={fields}
                            nameField="member_name"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />
                        <CustomField
                            width={6}
                            label={getLiteral('return.partnerEmail')}
                            fields={fields}
                            nameField="member_email"
                            onChange={changeField}
                            error={true}
                            disabled={disabled}
                        />
                    </Col>
                    <Col md={4}>
                        <Panel>
                            <Panel.Heading>{getLiteral('return.warehouse')}</Panel.Heading>
                            <Panel.Body>
                                <Row>
                                    <Col md={3}>
                                        <Col componentClass={ControlLabel} md={8}>{getLiteral('return.managedWarehouse')}</Col>
                                        <Col md={4}>
                                            <input type="checkbox"/>
                                        </Col>
                                    </Col>
                                    <Col md={4}>
                                        <Col componentClass={ControlLabel} md={6}>{getLiteral('common.date')}</Col>
                                        <Col md={6}>
                                            <SingleDatepickerWrapper
                                                small={true}
                                                date={fields.warehouse_date ? moment(fields.warehouse_date) : null}
                                                onDateChange={(date) => changeField({warehouse_date: date.toISOString()})}
                                                numberOfMonths={1}
                                                displayFormat={dateFormat}
                                                disabled={disabled}
                                            />
                                        </Col>
                                    </Col>
                                    <Col md={5}>
                                        <CustomSelect
                                            label={getLiteral('return.subreason')}
                                            width={6}
                                            options={subreasons}
                                            error={false}
                                            fields={fields}
                                            nameField="warehouse_subreason"
                                            onChange={changeField}
                                            disabled={disabled}
                                            loading={fetchStatus.returnSubreasons.fetching === true}
                                        />
                                    </Col>
                                </Row>
                            </Panel.Body>
                        </Panel>
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
