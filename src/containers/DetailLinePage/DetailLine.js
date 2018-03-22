import React from 'react';
import {Col, Row, Thumbnail, Image} from 'react-bootstrap';

import {getLiteral} from '../../utils/utilities';

export default ({attributes}) => {
    return (<Row>
        <Col md={5}>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.sku')}</dt>
                <dd className="col-md-2">{attributes.ean}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.ean')}</dt>
                <dd className="col-md-2">{attributes.member_observations}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.brand')}</dt>
                <dd className="col-md-2">{attributes.member_reason}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.refCom')}</dt>
                <dd className="col-md-2">{attributes.production_subreason}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.refLog')}</dt>
                <dd className="col-md-2">{attributes.quality_subreason}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.shortDescription')}</dt>
                <dd className="col-md-2">{attributes.ref_com}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.category')}</dt>
                <dd className="col-md-2">{attributes.sku}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.size')}</dt>
                <dd className="col-md-2">{attributes.sku_real_product}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.color')}</dt>
                <dd className="col-md-2">{attributes.warehouse_reason}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('common.campaingId')}</dt>
                <dd className="col-md-2">{attributes.warehouse_subreason}</dd>
            </dl>
        </Col>
        <Col md={5}>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.sku')}</dt>
                <dd className="col-md-2">{attributes.ean}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.ean')}</dt>
                <dd className="col-md-2">{attributes.member_observations}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.brand')}</dt>
                <dd className="col-md-2">{attributes.member_reason}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.refCom')}</dt>
                <dd className="col-md-2">{attributes.production_subreason}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.refLog')}</dt>
                <dd className="col-md-2">{attributes.quality_subreason}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.shortDescription')}</dt>
                <dd className="col-md-2">{attributes.ref_com}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.category')}</dt>
                <dd className="col-md-2">{attributes.sku}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.size')}</dt>
                <dd className="col-md-2">{attributes.sku_real_product}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.color')}</dt>
                <dd className="col-md-2">{attributes.warehouse_reason}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('common.campaingId')}</dt>
                <dd className="col-md-2">{attributes.warehouse_subreason}</dd>
            </dl>
        </Col>
    </Row>);
};
