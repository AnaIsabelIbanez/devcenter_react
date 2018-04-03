import React, {Component} from 'react';
import {Button, Col, Image, Panel, Row, Thumbnail} from 'react-bootstrap';

import {getLiteral} from '../../utils/utilities';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import bwipjs from 'bwip-js';


const MyDetailProduct = ({className, attributes, smallPhotos, mainPhoto, setMainPhoto}) => {

    return (<div className={className}>
        <Row>
            <Col md={12}>
                <div className="pull-right">
                    <Icon name="angle-double-left"/>
                    <Button bsStyle="link">Volver</Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.sku')}</dt>
                    <dd className="col-md-6">{attributes.sku}</dd>
                </dl>

                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.ean')}</dt>
                    <dd className="col-md-6">{attributes.ean}</dd>
                </dl>

                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.brand')}</dt>
                    <dd className="col-md-6">{attributes.brand}</dd>
                </dl>

                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.refCom')}</dt>
                    <dd className="col-md-6">{attributes.ref_com}</dd>
                </dl>

                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.refLog')}</dt>
                    <dd className="col-md-6">{attributes.ref_logistic}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.shortDescription')}</dt>
                    <dd className="col-md-6">{attributes.short_description}</dd>
                </dl>

                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.category')}</dt>
                    <dd className="col-md-6">{attributes.category}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.size')}</dt>
                    <dd className="col-md-6">{attributes.size}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-md-6">{getLiteral('product.color')}</dt>
                    <dd className="col-md-6">{attributes.color}</dd>
                </dl>

                <dl className="row">
                    <dt className="col-md-6">{getLiteral('common.campaingId')}</dt>
                    <dd className="col-md-6">{attributes.campaign_id}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-md-6">{getLiteral('common.compaignName')}</dt>
                    <dd className="col-md-6">{attributes.campaign_name}</dd>
                </dl>
            </Col>
            <Col md={4}>
                <Panel>
                    <Panel.Heading>Descripción web</Panel.Heading>
                    <Panel.Body className="panel-body">{attributes.web_description}</Panel.Body>
                </Panel>
            </Col>
            <Col md={4}>
                <Panel>
                    <Panel.Heading>Photos of the product</Panel.Heading>
                    <Panel.Body className="panel-body">
                        {<Thumbnail className="photos" src={mainPhoto ? mainPhoto : 'https://react-bootstrap.github.io/thumbnail.png'}
                            alt="242x200">
                            <Row>
                                {smallPhotos.map((photo, index) => {
                                    return (
                                        <Col key={index} md={4}>
                                            <Image src={photo ? photo : 'https://react-bootstrap.github.io/thumbnail.png'} onClick={() => setMainPhoto(index)} thumbnail/>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Thumbnail>}
                    </Panel.Body>
                </Panel>
            </Col>
            <Row>
                <Col md={12}>
                    <div className="pull-right">
                        <canvas id="mycanvas">algo</canvas>
                        <Button>Imprimir Etiqueta</Button>
                    </div>
                </Col>
            </Row>
        </Row>
    </div>);
};

export default styled(MyDetailProduct)`
    dt {
        text-align: right;
    }

    .panel-body {
        height: 400px;
        max-height: 400px;
        overflow-y: auto;
    }
`;
