import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
    getData,
    getShowSpinner,
    getMeta,
    getLinks,
    getReasons,
    getSubreasons,
    getDetail
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducer';
import saga from './saga/rootSaga';
import {fetchData} from '../common/actions/table';
import Table from '../../components/Table';
import DetailReturn from './DetailReturn';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_LINE_RESOURCE} from './constants';
import columns from './columnsDefinition';
import {
    getInitialData,
    changeAttributeTable
} from './actions';


const ServerDataTable = serverDataTableHoc(Table);

class ReturnPage extends Component {

    constructor(props) {
        super(props);
        this.props.getInitialData(this.props.match.params.id);
    }

    render() {
        const {
            data,
            meta: {currentPage, totalPages, pageSize},
            links,
            loading,
            reasons,
            subreasons,
            changeAttributeTable,
            //TODO: get roles from the user
            rol = 'warehouse',
            detail
        } = this.props;
        return (
            <div>
                <DetailReturn detail={detail} />
                <ServerDataTable
                    fetchData={this.props.fetchData.bind(null, KEY_LINE_RESOURCE)}
                    columns={columns(rol, changeAttributeTable, reasons, subreasons)}
                    data={data}
                    pages={totalPages}
                    loading={loading}
                    defaultPageSize={pageSize}
                    currentPage={currentPage}
                    links={links}
                    baseUri={`/return/${this.props.match.params.id}/${KEY_LINE_RESOURCE}`}
                />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    data: getData(),
    showSpinner: getShowSpinner(),
    meta: getMeta(),
    links: getLinks(),
    reasons: getReasons(),
    subreasons: getSubreasons(),
    detail: getDetail()
});

const mapDispatchToProps = {
    fetchData,
    getInitialData,
    changeAttributeTable
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'lines', reducer});
const withSaga = injectSaga({key: 'lines', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ReturnPage);
