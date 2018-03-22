import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

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

class DetailLinePage extends Component {

    constructor(props) {
        super(props);
        this.props.getInitialData(this.props.match.params.id);
    }

    render() {
        const {
            data//,
            // changeField,
            // fetch
        } = this.props;
        return (
            <div>
                <DetailLine
                    detail={data}
                />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    data: getDetail(),
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
