import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {formatIsoString, getLiteral} from '../../utils/utilities';
import SmallPanel from '../../components/SmallPanel';
import styled from 'styled-components';

const myDetailReturn = ({className, detail = {}}) => {
    return (
        <Grid className={className}>
            <Row>
                <Col md={4}>
                    <dl className="row">
                        <dt className="col-md-6">{getLiteral('return.returnNum')}</dt>
                        <dd className="col-md-6">{detail.return_id}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-md-6">{getLiteral('return.orderNum')}</dt>
                        <dd className="col-md-6">{detail.order_id}</dd>


                    </dl>
                    <dl className="row">
                        <dt className="col-md-6">{getLiteral('return.partnerName')}</dt>
                        <dd className="col-md-6">{detail.member_name}</dd>


                    </dl>
                    <dl className="row">
                        <dt className="col-md-6">{getLiteral('return.partnerEmail')}</dt>
                        <dd className="col-md-6">{detail.member_email}</dd>
                    </dl>
                </Col>
                <Col md={4}>
                    <dl className="row">
                        <dt className="col-md-6">{getLiteral('return.destinationWarehouse')}</dt>
                        <dd className="col-md-6">{detail.warehouse_name}</dd>
                    </dl>

                    <dl className="row">
                        <dt className="col-md-6">{getLiteral('common.campaingId')}</dt>
                        <dd className="col-md-6">{detail.campaign_id}</dd>
                    </dl>

                    <dl className="row">
                        <dt className="col-md-6">{getLiteral('common.compaignName')}</dt>
                        <dd className="col-md-6">{detail.campaign_name}</dd>
                    </dl>
                </Col>
                <Col md={4}>
                    <Row>
                        <SmallPanel title={getLiteral('return.warehouse')}>
                            <dl className="row">
                                <dt className="col-md-3">{getLiteral('return.managed')}</dt>
                                <dd className="col-md-3"> <input type="checkbox" disabled value={detail.warehouse_date} checked={detail.warehouse_date} /></dd>

                                <dt className="col-md-3">{getLiteral('common.date')}</dt>
                                <dd className="col-md-3">{formatIsoString(detail.warehouse_date)}</dd>
                            </dl>
                        </SmallPanel>
                    </Row>
                    <Row>
                        <SmallPanel title={getLiteral('return.quality')}>
                            <dl className="row">
                                <dt className="col-md-3">{getLiteral('return.managed')}</dt>
                                <dd className="col-md-3"> <input type="checkbox" disabled value={detail.quality_date} checked={detail.quality_date}  /></dd>

                                <dt className="col-md-3">{getLiteral('common.date')}</dt>
                                <dd className="col-md-3">{formatIsoString(detail.quality_date)}</dd>
                            </dl>
                        </SmallPanel>
                    </Row>
                    <Row>
                        <SmallPanel title={getLiteral('return.production')}>
                            <dl className="row">
                                <dt className="col-md-3">{getLiteral('return.managed')}</dt>
                                <dd className="col-md-3"> <input type="checkbox" disabled value={detail.production_date} checked={detail.production_date} /> </dd>

                                <dt className="col-md-3">{getLiteral('common.date')}</dt>
                                <dd className="col-md-3">{formatIsoString(detail.production_date)}</dd>
                            </dl>
                        </SmallPanel>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
};


export default styled(myDetailReturn)`
    dt {
        text-align: right;
    }
`;
