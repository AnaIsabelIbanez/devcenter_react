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
import {DETAIL_LINE, UPLOAD_PHOTO} from '../common/resourcesConstants';
import LoadingIndicator from '../../components/LoadingIndicator';

class DetailLinePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invalidUploadPhoto: null
        };
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
        console.log('fetch[UPLOAD_PHOTO]', fetch[UPLOAD_PHOTO]);
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
                                            {photos.map((photo) => {
                                                return (<Col className={`${photo.id}`} key={photo.id} md={3}>
                                                    <div> <Button bsStyle="link" onClick={() => fetchDeletePhoto(photo.id)}>{getLiteral('common.delete')}</Button> </div>
                                                    <div> <Image src={photo.location} thumbnail /> </div>
                                                </Col>);
                                            })}
                                        </Row>
                                        <Row style={{  marginTop: '10px' }}>
                                            <Col md={2}>
                                                <UploadButton
                                                    disabled={photos.length >= 4}
                                                    label={getLiteral('common.upload')}
                                                    lg={true}
                                                    uploading={true }//fetch[UPLOAD_PHOTO].fetching === true}
                                                    handleChange={
                                                        (file) => {
                                                            this.setState({ invalidUploadPhoto: null });
                                                            uploadPhoto(file, detailLine.id);
                                                        }
                                                    }
                                                    validationConf={{
                                                        png: {
                                                            maxSize: 1800
                                                        }
                                                    }}
                                                    handleSizeExceeded={({ name, size, maxSize }) =>
                                                        this.setState({invalidUploadPhoto: { name, invalidSize: { size, maxSize } }})
                                                    }
                                                    handleIncorrectType={({ name, type }) =>
                                                        this.setState({invalidUploadPhoto: { name, invalidType: {type}}})
                                                    }
                                                />
                                            </Col>
                                            {/*{this.state.invalidUploadPhoto && <Col md={6} style={{ border: '1px solid #8c1c1cbd', color: '#8c1c1cbd', backgroundColor: '#ffc4c4e8', padding: '5px 35px 5px 35px', borderRadius: '3%', width: 'auto' }}>*/}
                                            {/*<Row><Col>{`invalid file: ${this.state.invalidUploadPhoto.name}`}</Col></Row>*/}
                                            {/*{this.state.invalidUploadPhoto.invalidType && <Row><Col>{`extension ${this.state.invalidUploadPhoto.invalidType.type} not allowed`}</Col></Row>}*/}
                                            {/*{this.state.invalidUploadPhoto.invalidSize && <Row><Col>{`size file is ${this.state.invalidUploadPhoto.invalidSize.size}. Exceed the max size allowed (${this.state.invalidUploadPhoto.invalidSize.maxSize}`}</Col></Row>}*/}
                                            {/*</Col>}*/}
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
