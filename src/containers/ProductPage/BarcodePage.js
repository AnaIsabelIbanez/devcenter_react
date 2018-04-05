import React, {Component} from 'react';
import {Grid, Col, Row, Button, Panel} from 'react-bootstrap';
import Barcode from 'react-barcode';
import {getLiteral} from '../../utils/utilities';
import styled from 'styled-components';


class MyBarcodePage extends Component {

    render() {
        const eanCode = this.props.match.params.id;
        return (
            <span className={this.props.className}>
                <div className="section-to-print">
                    <Barcode value={eanCode}/>
                </div>
                <Grid className="no-print">
                    <Row>
                        <Panel>
                            <Panel.Heading>Etiqueta del producto</Panel.Heading>
                            <Panel.Body className="panel-body">
                                <Col md={12}>
                                    <Barcode value={eanCode}/>
                                </Col>
                            </Panel.Body>
                        </Panel>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="pull-right">
                                <Button onClick={() => window.print()}>{getLiteral('product.print')}</Button>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </span>
        );
    }
}

export default styled(MyBarcodePage)`
    .section-to-print {
        visibility: hidden;
    }
    @media print {
        .no-print * {
            visibility: hidden;
        }
        .section-to-print, #section-to-print * {
                visibility: visible;
        }
        .section-to-print {
                position: absolute;
                left: 0;
                top: 0;
        }
    }
`;
