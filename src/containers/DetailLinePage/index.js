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
import DetailLine from './DetailLine';
//TODO poner en sitio común:
import DetailReturn from '../ReturnLines/DetailReturn';
import UploadButton from '../../components/UploadButton2';
import DropZone from '../../components/DropZone';
import Icon from '../../components/Icon';

const ImageComponent = ({photos}) => {
    const returnComponent = photos.length > 1
        ? photos.map((photo, index) => {
            if (index !== 0) {
                console.log('index', index);
                return (<Col md={4} key={index}>
                    <Image src={photo.location} thumbnail alt="242x200"/>
                </Col>);
            } else {
                return <span></span>;
            }
        })
        : <span></span>;
    return returnComponent;
};

class DetailLinePage extends Component {

    constructor(props) {
        super(props);
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
                {photos && photos.length > 0 &&
                    <Thumbnail src={photos[0].location} alt="242x200">
                        <Row>
                            <ImageComponent photos={photos}/>
                        </Row>
                    </Thumbnail>
                }
                <div style={{
                    borderRadius: '4px',
                    position: 'relative',
                    width: '750px',
                    margin: '10px auto auto auto',
                    borderRadius: '3px',
                    border: '2px solid grey',
                    background: '#f7f7f7',
                    overflowY: 'hidden'

                }}>
                    <button type="button" onClick={() => console.log('clickbutton')}> x </button>
                    <DropZone
                        handleDrop={(e) => console.log('handle drop', e)}
                        multipleFiles={false}
                        dragOutJSX={[
                            <Icon key={2}  name="camera" />,
                            <span key={3} style={{
                                color: '#30577a',
                                fontSize: '2em',
                                lineHeight: '5em'
                            }}>Algo</span>
                        ]}
                        dragInJSX={[
                            <Icon key={2} name="camera" style={{
                                color: '#30577a',
                                fontSize: '2em',
                                marginRight: '5px'
                            }} />,
                            <span key={3} style={{
                                color: '#30577a',
                                fontSize: '2em',
                                lineHeight: '5em'
                            }}>Algo2</span>
                        ]}
                    >
                        <UploadButton
                            id="economicDocuments"
                            label={'hola'}
                            lg={true}
                            handleChange={(e) => console.log('upload button handleChange', e)}
                            validationConf={{
                                xml: {
                                    maxSize: 800
                                }
                            }}
                        />
                        <div style={{
                            height: '100px',
                            border: '1px dashed #404040',
                            height: '100px',
                            color: '#30577a'
                        }}>
                            <div style={{
                                width: '15%',
                                display: 'inline-block'
                            }}>
                            </div>
                            <div style={{
                                width: '70%',
                                display: 'inline-block',
                                height: '190px',
                                position: 'absolute',
                                textAlign: 'center'
                            }}>
                                <div styleName="iconUploadContainer">
                                    <Icon upload styleName="iconUpload" />
                                </div>
                                <span styleName="uploadMessage">{'message upload'}</span>
                                <div styleName="fileExtensions">
                                </div>
                            </div>

                        </div>
                    </DropZone>
                </div>
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    detailLine: getDetail(),
    fetch: getFetch()
});

const mapDispatchToProps = {
    getInitialData
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
