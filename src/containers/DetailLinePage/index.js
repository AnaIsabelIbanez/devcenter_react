import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Thumbnail, Row, Image, Col} from 'react-bootstrap';

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
import SelectField from '../../components/SelectField';
import Panel from 'react-bootstrap/es/Panel';
import {getLiteral} from '../../utils/utilities';

const ImageComponent = ({photos}) => {
    const returnComponent = photos.length > 1
        ? photos.map((photo, index) => {
            if (index !== 0) {
                console.log('index', index);
                return (<Col md={4} key={index}>
                    <Image key={index} src={photo.location} thumbnail alt="242x200"/>
                </Col>);
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
            <div>
                <h3>Line detail</h3>
                <DetailLine
                    detail={data}
                />
                <h3>Return detail</h3>
                <DetailReturn
                    detail={data.attributes.return}
                />

                <Row>
                    <Col md={4}>
                        <Panel>
                            <Panel.Heading>{getLiteral('product.photos')}</Panel.Heading>
                            <Panel.Body className="panel-body">
                                <Thumbnail className="photos" src="https://react-bootstrap.github.io/thumbnail.png" alt="242x200">
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
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col md={2}>
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
            </div>
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
