import React from 'react';
import {Col, Row, Checkbox, Form} from 'react-bootstrap';

import FormField from '../../components/FormField';

export default ({detail: {data = {}}}) => {
    const {attributes = {}} = data;
    return (<Row>
        <Col md={7}>
            <dl className="d-lg-flex">
                <dt className="col-md-2">Número de devolución</dt>
                <dd className="col-md-2">{attributes.return_id}</dd>

                <dt className="col-md-2">Almacén destino devolución</dt>
                <dd className="col-md-2">{attributes.warehouse_name}</dd>
            </dl>

            <dl className="d-lg-flex">
                <dt className="col-md-2">Número de pedido</dt>
                <dd className="col-md-2">{attributes.order_id}</dd>

                <dt className="col-md-2">Id Campaña</dt>
                <dd className="col-md-2">{attributes.campaign_id}</dd>
            </dl>

            <dl className="d-lg-flex">
                <dt className="col-md-2">Nombre socio</dt>
                <dd className="col-md-2">{attributes.member_name}</dd>

                <dt className="col-md-2">Campaña</dt>
                <dd className="col-md-2">{attributes.campaign_name}</dd>
            </dl>

            <dl className="d-lg-flex">
                <dt className="col-md-2">Email socio</dt>
                <dd className="col-md-2">{attributes.member_email}</dd>
            </dl>
        </Col>
        <Col md={5}>
            <Form inline>
                <fieldset style={{ border: '1px solid black', margin: '10px', padding: '10px'}}>
                    <legend style={{width: 'auto', fontSize: '14px'}}>Almacén</legend>
                    <Row>
                        <Col md={5}>
                            <label>
                                Tratada por el almacén?
                                <input type="checkbox" disabled checked={attributes.warehouse_date} />
                            </label>
                        </Col>
                        <Col md={5}>
                            <FormField
                                width={5}
                                label="Fecha"
                                value={attributes.warehouse_date}
                                disabled
                            />
                        </Col>
                    </Row>
                </fieldset>
            </Form>
        </Col>
    </Row>);
};
