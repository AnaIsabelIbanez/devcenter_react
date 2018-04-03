import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Row, Image, Col, Grid, Button} from 'react-bootstrap';

import {
    getDetail,
    getFetch
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducers';
import saga from './saga/rootSagas';
import {getInitialData, fetchDeletePhoto, uploadPhoto} from './actions';
import {changeActiveTab} from '../App/actions';
import DetailLine from './DetailLine';
//TODO poner en sitio común:
import DetailReturn from '../ReturnLines/DetailReturn';
import UploadButton from '../../components/UploadButton';
import Panel from 'react-bootstrap/es/Panel';
import {getLiteral} from '../../utils/utilities';
import {DETAIL_LINE} from '../common/resourcesConstants';
import LoadingIndicator from '../../components/LoadingIndicator';

class DetailLinePage extends Component {

    constructor(props) {
        super(props);
        this.props.changeActiveTab('return');
        this.props.getInitialData(this.props.match.params.id);
    }

    render() {
        const {
            detailLine = {},
            fetchDeletePhoto,
            fetch,
            uploadPhoto
        } = this.props;
        const {photos = []} = detailLine;
        return (
            fetch[DETAIL_LINE].fetching === true
                ? <LoadingIndicator/>
                : (<Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Panel>
                                <Panel.Heading>{getLiteral('return.detail')}</Panel.Heading>
                                <Panel.Body> <DetailReturn detail={detailLine.return}/> </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Panel>
                                <Panel.Heading>{getLiteral('line.detail')}</Panel.Heading>
                                <Panel.Body> <DetailLine detail={detailLine} /> </Panel.Body>
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
                                            {photos.map((photo, index) => {
                                                return (<Col key={index} md={3}>
                                                    <div> <Button bsStyle="link" onClick={() => fetchDeletePhoto(photo.id)}>{getLiteral('common.delete')}</Button> </div>
                                                    <div> <Image src={photo.location} thumbnail /> </div>
                                                </Col>);
                                            })}
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <UploadButton
                                                    disabled={photos.length >= 4}
                                                    label={getLiteral('common.upload')}
                                                    lg={true}
                                                    handleChange={(file) => uploadPhoto(file, detailLine.id)}
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
                </Grid>)
        );
    }
};

const mapStateToProps = createStructuredSelector({
    detailLine: getDetail(),
    fetch: getFetch()
});

const mapDispatchToProps = {
    getInitialData,
    changeActiveTab,
    fetchDeletePhoto,
    uploadPhoto
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'lineDetail', reducer});
const withSaga = injectSaga({key: 'lineDetail', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(DetailLinePage);
