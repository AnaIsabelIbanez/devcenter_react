import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';

import {getLiteral} from '../../utils/utilities';
import styled from 'styled-components';

const myDetailLine = ({className, detail}) => {
    return (
        <Grid fluid className={className}>
            <Row>
                <Col md={12}>
                    <dl className="row">
                        <dt className="col-md-2">{getLiteral('product.sku')}</dt>
                        <dd className="col-md-2">{detail.sku}</dd>

                        <dt className="col-md-2">{getLiteral('product.refCom')}</dt>
                        <dd className="col-md-2">{detail.ref_com}</dd>

                        <dt className="col-md-2">{getLiteral('product.ean')}</dt>
                        <dd className="col-md-2">{detail.ean}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-md-2">{getLiteral('product.reallyReceived')}</dt>
                        <dd className="col-md-2">{detail.sku_real_product}</dd>

                        <dt className="col-md-2">{getLiteral('return.warehouseReason')}</dt>
                        <dd className="col-md-2">{detail.warehouse_reason}</dd>

                        <dt className="col-md-2">{getLiteral('return.returnReason')}</dt>
                        <dd className="col-md-2">{detail.member_reason}</dd>


                    </dl>
                    <dl className="row">

                        <dt className="col-md-2">{getLiteral('product.memberObservations')}</dt>
                        <dd className="col-md-2">{detail.member_observations}</dd>

                        <dt className="col-md-2">{getLiteral('return.warehouseSubreason')}</dt>
                        <dd className="col-md-2">{detail.warehouse_subreason}</dd>


                    </dl>
                    <dl className="row">
                        <dt className="col-md-2">{getLiteral('return.productionSubreason')}</dt>
                        <dd className="col-md-2">{detail.production_subreason}</dd>

                        <dt className="col-md-2">{getLiteral('return.qualitySubreason')}</dt>
                        <dd className="col-md-2">{detail.quality_subreason}</dd>
                    </dl>
                </Col>
            </Row>
        </Grid>);
};


export default styled(myDetailLine)`
    dt {
        text-align: right;
    }
`;
