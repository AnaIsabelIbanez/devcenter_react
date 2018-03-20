import React from 'react';
import {Col, Row, Thumbnail, Image} from 'react-bootstrap';

import {getLiteral} from '../../utils/utilities';

export default ({attributes}) => {
    return (<Row>
        <Col md={4}>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.sku')}</dt>
                <dd className="col-md-2">{attributes.sku}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.ean')}</dt>
                <dd className="col-md-2">{attributes.ean}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.brand')}</dt>
                <dd className="col-md-2">{attributes.brand}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.refCom')}</dt>
                <dd className="col-md-2">{attributes.ref_com}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.refLog')}</dt>
                <dd className="col-md-2">{attributes.ref_logistic}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.shortDescription')}</dt>
                <dd className="col-md-2">{attributes.short_description}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.category')}</dt>
                <dd className="col-md-2">{attributes.category}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.size')}</dt>
                <dd className="col-md-2">{attributes.size}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('product.color')}</dt>
                <dd className="col-md-2">{attributes.color}</dd>
            </dl>

            <dl class="row">
                <dt className="col-md-2">{getLiteral('common.campaingId')}</dt>
                <dd className="col-md-2">{attributes.campaign_id}</dd>
            </dl>
            <dl class="row">
                <dt className="col-md-2">{getLiteral('common.compaignName')}</dt>
                <dd className="col-md-2">{attributes.campaign_name}</dd>
            </dl>
        </Col>
        <Col md={4}>
            <label>Descripción web</label>
            <textarea rows="4" cols="50">
                {attributes.web_description}
            </textarea>
        </Col>
        <Col md={4}>
            <Thumbnail src="https://react-bootstrap.github.io/thumbnail.png" alt="242x200">
                <Row>
                    <Col md={4}>
                        <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail />
                    </Col>
                    <Col md={4}>
                        <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail />
                    </Col>
                    <Col md={4}>
                        <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail />
                    </Col>
                </Row>
            </Thumbnail>
        </Col>
    </Row>);
};
