import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
    getData,
    getShowSpinner,
    getFields,
    getFetch
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducers';
import saga from './saga/rootSagas';
import {getInitialData} from './actions';
import DetailLine from './DetailLine';

class DetailLinePage extends Component {

    constructor(props) {
        super(props);
        this.props.getInitialData();
    }

    render() {
        const {
            data,
            changeField,
            fetch
        } = this.props;
        return (
            <div>
                <DetailProduct
                    attributes={data}
                />
                <DetailReturn detail={data.return} />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    data: getData(),
    showSpinner: getShowSpinner(),
    fetch: getFetch()
});

const mapDispatchToProps = {
    getInitialData,
    changeField
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'lineDetail', reducer});
const withSaga = injectSaga({key: 'lineDetail', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(DetailLinePage);
