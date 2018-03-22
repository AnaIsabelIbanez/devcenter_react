import React from 'react';
import {Col, Row, Checkbox, Form} from 'react-bootstrap';

import FormField from '../../components/FormField';
import {formatIsoString} from '../../utils/utilities';
import {getLiteral} from '../../utils/utilities';

export default ({detail: {data = {}}}) => {
    const {attributes = {}} = data;
    return (<Row>
        <Col md={7}>
            <dl className="row">
                <dt className="col-md-2">{getLiteral('return.returnNum')}</dt>
                <dd className="col-md-2">{attributes.return_id}</dd>

                <dt className="col-md-2">{getLiteral('return.destinationWarehouse')}</dt>
                <dd className="col-md-2">{attributes.warehouse_name}</dd>

                <dt className="col-md-2">{getLiteral('return.orderNum')}</dt>
                <dd className="col-md-2">{attributes.order_id}</dd>

                <dt className="col-md-2">{getLiteral('common.campaingId')}</dt>
                <dd className="col-md-2">{attributes.campaign_id}</dd>

                <dt className="col-md-2">{getLiteral('return.partnerName')}</dt>
                <dd className="col-md-2">{attributes.member_name}</dd>

                <dt className="col-md-2">{getLiteral('common.compaignName')}</dt>
                <dd className="col-md-2">{attributes.campaign_name}</dd>

                <dt className="col-md-2">{getLiteral('return.partnerEmail')}</dt>
                <dd className="col-md-2">{attributes.member_email}</dd>
            </dl>
        </Col>
        <Col md={5}>
            <Form inline>
                <fieldset style={{ border: '1px solid black', margin: '10px', padding: '10px'}}>
                    <legend style={{width: 'auto', fontSize: '14px'}}>{getLiteral('return.warehouse')}</legend>
                    <Row>
                        <Col md={5}>
                            <label>
                                {getLiteral('return.managedWarehouse')}
                                <input type="checkbox" disabled />
                                {/*<input type="checkbox" disabled checked={attributes.warehouse_date} />*/}
                            </label>
                        </Col>
                        <Col md={5}>
                            <FormField
                                width={5}
                                label={getLiteral('common.date')}
                                value={formatIsoString(attributes.warehouse_date)}
                                disabled
                            />
                        </Col>
                    </Row>
                </fieldset>
            </Form>
        </Col>
    </Row>);
};
