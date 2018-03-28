import React from 'react';
import {Form, Col, Button, Row, Grid, ControlLabel, FormGroup, FormControl, Panel} from 'react-bootstrap';
import 'react-dates/initialize';
import moment from 'moment/moment';
import 'react-dates/lib/css/_datepicker.css';

import {InputForm} from '../../components/InputField';
import {SelectForm, GenericSelect} from '../../components/SelectField';
import SingleDatepickerWrapper from '../../components/SingleDatepickerWrapper';
import FieldWithTooltip from '../../components/FieldWithTooltip';
import {getLiteral} from '../../utils/utilities';
import {dateFormat} from '../App/constants';
import {DatePickerForm, GenericDatePicker} from '../../components/DatePickerField';
import SmallPanel from '../../components/SmallPanel';
import ManagedFilter from './ManagedFilter';
import FilterButtons from '../../components/FilterButtons';

const CustomField = ({fields, nameField, onChange, ...props}) => {
    return (
        <InputForm
            value={fields[nameField] ? fields[nameField] : ''}
            onChange={({target}) => onChange({[nameField]: target.value})}
            {...props}
        />
    );
};

const CustomSelect = ({fields, nameField, onChange, ...props}) => {
    return (
        <SelectForm
            value={fields[nameField] ? fields[nameField] : ''}
            onChange={({target}) => onChange({[nameField]: target.value})}
            {...props}
        />
    );
};

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
            <Grid className="extended">
                <Row>
                    <Col md={2}>
                        <CustomField
                            width={4}
                            inputWidth={8}
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
                                inputWidth={8}
                                width={4}
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
                                width={4}
                                inputWidth={8}
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
                                inputWidth={8}
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
                            inputWidth={8}
                            label={getLiteral('common.campaingId')}
                            fields={fields}
                            nameField="campaign_id"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        <CustomField
                            width={4}
                            inputWidth={8}
                            label={getLiteral('common.compaignName')}
                            fields={fields}
                            nameField="campaign_name"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />

                        {/*nameField correcto???*/}
                        <DatePickerForm
                            width={4}
                            inputWidth={8}
                            label={getLiteral('return.returnDate')}
                            value={fields.checkin_date}
                            onChange={(date) => changeField({checkin_date: date.toISOString()})}
                            disabled={disabled}
                        />
                    </Col>
                    <Col md={3}>
                        <CustomField
                            width={4}
                            inputWidth={8}
                            label={getLiteral('return.partnerName')}
                            fields={fields}
                            nameField="member_name"
                            onChange={changeField}
                            error={false}
                            disabled={disabled}
                        />
                        <CustomField
                            width={4}
                            inputWidth={8}
                            label={getLiteral('return.partnerEmail')}
                            fields={fields}
                            nameField="member_email"
                            onChange={changeField}
                            error={true}
                            disabled={disabled}
                        />
                    </Col>
                    <Col md={4}>
                        <Row>
                            <ManagedFilter
                                title={getLiteral('return.warehouse')}
                                fields={fields}
                                changeField={changeField}
                                disabled={disabled}
                                fetchStatus={fetchStatus}
                                options={subreasons}
                                nameDate="warehouse_date"
                                nameSubreason="warehouse_subreason"
                                nameManaged="managed_warehouse"
                            />
                        </Row>
                        <Row>
                            <ManagedFilter
                                title={getLiteral('return.quality')}
                                fields={fields}
                                changeField={changeField}
                                disabled={disabled}
                                fetchStatus={fetchStatus}
                                options={subreasons}
                                nameDate="quality_date"
                                nameSubreason="quality_subreason"
                                nameManaged="managed_quality"
                            />
                        </Row>
                        <Row>
                            <ManagedFilter
                                title={getLiteral('return.production')}
                                fields={fields}
                                changeField={changeField}
                                disabled={disabled}
                                fetchStatus={fetchStatus}
                                options={subreasons}
                                nameDate="production_date"
                                nameSubreason="production_subreason"
                                nameManaged="managed_production"
                            />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FilterButtons className="pull-right"/>
                    </Col>
                </Row>
            </Grid>
        </Form>
    );
};
