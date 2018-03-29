import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Thumbnail, Row, Image, Col, Grid, Button} from 'react-bootstrap';

import {
    getDetail,
    getFetch
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducers';
import saga from './saga/rootSagas';
import {getInitialData} from './actions';
import {changeActiveTab} from '../App/actions';
import DetailLine from './DetailLine';
//TODO poner en sitio común:
import DetailReturn from '../ReturnLines/DetailReturn';
import UploadButton from '../../components/UploadButton';
import DropZone from '../../components/DropZone';
import Icon from '../../components/Icon';
import {SelectForm} from '../../components/SelectField';
import Panel from 'react-bootstrap/es/Panel';
import {getLiteral} from '../../utils/utilities';

const ImageComponent = ({photos}) => {
    const returnComponent = photos.length > 1
        ? photos.map((photo, index) => {
            if (index !== 0) {
                return (
                    <Col key={index} md={3}>
                        <div> <Button bsStyle="link">Delete</Button> </div>
                        <div> <Image src={photo.location} thumbnail alt="242x200" /> </div>
                    </Col>
                );
            } else {
                return <span key={index}></span>;
            }
        })
        : <span></span>;
    return returnComponent;
};

class DetailLinePage extends Component {

    constructor(props) {
        super(props);
        this.props.changeActiveTab('return');
        this.props.getInitialData(this.props.match.params.id);
    }

    render() {
        const {
            detailLine = {}//,
            // changeField,
            // fetch
        } = this.props;
        const {data = {attributes: {}}} = detailLine;
        const {photos} = data.attributes;
        return (
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Panel>
                            <Panel.Heading>Return detail</Panel.Heading>
                            <Panel.Body> <DetailReturn detail={data.attributes.return}/> </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Panel>
                            <Panel.Heading>Line detail</Panel.Heading>
                            <Panel.Body> <DetailLine detail={data} /> </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Panel>
                            <Panel.Heading>
                                {getLiteral('product.photos')}
                            </Panel.Heading>
                            <Panel.Body className="panel-body">
                                <Grid fluid>
                                    <Row>
                                        <Col md={3}>
                                            <div> <Button bsStyle="link">Delete</Button> </div>
                                            <div> <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail /> </div>
                                        </Col>
                                        <Col md={3}>
                                            <div> <Button bsStyle="link">Delete</Button> </div>
                                            <div> <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail /> </div>
                                        </Col>
                                        <Col md={3}>
                                            <div> <Button bsStyle="link">Delete</Button> </div>
                                            <div> <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail /> </div>
                                        </Col>
                                        <Col md={3}>
                                            <div> <Button bsStyle="link">Delete</Button> </div>
                                            <div> <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail /> </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <UploadButton
                                                label={getLiteral('common.upload')}
                                                lg={true}
                                                handleChange={(e) => console.log('upload button handleChange', e)}
                                                validationConf={{
                                                    pdf: {
                                                        maxSize: 1800
                                                    }
                                                }}
                                                handleSizeExceeded={({ name, size, maxSize }) =>
                                                    console.log('invalid size')
                                                }
                                                handleIncorrectType={({ name, type }) =>
                                                    console.log('invalid type')
                                                }
                                            />
                                        </Col>
                                    </Row>
                                </Grid>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>


            </Grid>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    detailLine: getDetail(),
    fetch: getFetch()
});

const mapDispatchToProps = {
    getInitialData,
    changeActiveTab
    // changeField
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'lineDetail', reducer});
const withSaga = injectSaga({key: 'lineDetail', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(DetailLinePage);
