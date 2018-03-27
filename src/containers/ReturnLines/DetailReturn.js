import React from 'react';
import {Col, Row, Checkbox, Grid, ControlLabel} from 'react-bootstrap';

import {GenericInput} from '../../components/InputField';
import {formatIsoString} from '../../utils/utilities';
import {getLiteral} from '../../utils/utilities';
import {dateFormat} from '../App/constants';
import moment from 'moment/moment';
import Panel from 'react-bootstrap/es/Panel';
import SmallPanel from '../../components/SmallPanel';
import styled from 'styled-components';

const myDetailReturn = ({className, detail = {}}) => {
    return (
        <Row>
            <Col md={7}>
                <dl className="row">
                    <dt className="col-md-2">{getLiteral('return.returnNum')}</dt>
                    <dd className="col-md-2">{detail.return_id}</dd>

                    <dt className="col-md-2">{getLiteral('return.destinationWarehouse')}</dt>
                    <dd className="col-md-2">{detail.warehouse_name}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-md-2">{getLiteral('return.orderNum')}</dt>
                    <dd className="col-md-2">{detail.order_id}</dd>

                    <dt className="col-md-2">{getLiteral('common.campaingId')}</dt>
                    <dd className="col-md-2">{detail.campaign_id}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-md-2">{getLiteral('return.partnerName')}</dt>
                    <dd className="col-md-2">{detail.member_name}</dd>

                    <dt className="col-md-2">{getLiteral('common.compaignName')}</dt>
                    <dd className="col-md-2">{detail.campaign_name}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-md-2">{getLiteral('return.partnerEmail')}</dt>
                    <dd className="col-md-2">{detail.member_email}</dd>
                </dl>
            </Col>
            <Col md={3}>
                <Row>
                    <SmallPanel title={getLiteral('return.warehouse')}>
                        <Row>
                            <Col md={5}>
                                <Col componentClass={ControlLabel} md={9}>{getLiteral('return.managed')}</Col>
                                <Col md={1}>
                                    <input type="checkbox" disabled value={detail.warehouse_date} checked={detail.warehouse_date} onChange={() => console.log('checked')} />
                                </Col>
                            </Col>
                            <Col md={7}>
                                <Col componentClass={ControlLabel} md={5} className="input-label">{getLiteral('common.date')}</Col>
                                <Col md={7}>
                                    {formatIsoString(detail.warehouse_date)}
                                </Col>
                            </Col>
                        </Row>
                    </SmallPanel>
                </Row>
                <Row>
                    <SmallPanel title={getLiteral('return.quality')}>
                        <Row>
                            <Col md={5}>
                                <Col componentClass={ControlLabel} md={9}>{getLiteral('return.managed')}</Col>
                                <Col md={1}>
                                    <input type="checkbox" disabled value={detail.quality_date ? detail.quality_date : false} checked={detail.quality_date} onChange={() => console.log('checked')} />
                                </Col>
                            </Col>
                            <Col md={7}>
                                <Col componentClass={ControlLabel} md={5} className="input-label">{getLiteral('common.date')}</Col>
                                <Col md={7}>
                                    {formatIsoString(detail.quality_date)}
                                </Col>
                            </Col>
                        </Row>
                    </SmallPanel>
                </Row>
                <Row>
                    <SmallPanel title={getLiteral('return.production')}>
                        <Row>
                            <Col md={5}>
                                <Col componentClass={ControlLabel} md={9}>{getLiteral('return.managed')}</Col>
                                <Col md={1}>
                                    <input type="checkbox" disabled value={detail.production_date ? detail.production_date : false} checked={detail.production_date} />
                                </Col>
                            </Col>
                            <Col md={7}>
                                <Col componentClass={ControlLabel} md={5} className="input-label">{getLiteral('common.date')}</Col>
                                <Col md={7}>
                                    {formatIsoString(detail.production_date)}
                                </Col>
                            </Col>
                        </Row>
                    </SmallPanel>
                </Row>
            </Col>
        </Row>
    );
};

const CustomRow = ({className, children, ...props}) => (
    <Row className={className} {...props}>
        {children}
    </Row>
);

const StyledRow = styled(CustomRow)`
    display: flex;
    justify-content: center;
`;

export default styled(myDetailReturn)`
    dt {
        text-align: right;
    }

    .panel-body {
        height: 400px;
        max-height: 400px;
        overflow-y: auto;
    }
`;
