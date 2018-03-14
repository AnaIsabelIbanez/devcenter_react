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
    getSubreasons
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducer';
import saga from './saga/rootSaga';
import {fetchData} from '../common/actions/table';
import Table from '../../components/Table';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_LINE_RESOURCE} from './constants';
import columns from './columnsDefinition';
import Select from '../../components/Select';
import {
    getInitialData,
    changeAttributeTable
} from './actions';


const ServerDataTable = serverDataTableHoc(Table);

class ReturnPage extends Component {

    constructor(props) {
        super(props);
        this.props.getInitialData();
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
            rol
        } = this.props;
        return (
            <div>
                <ServerDataTable
                    fetchData={this.props.fetchData.bind(null, KEY_LINE_RESOURCE)}
                    columns={columns('warehouse', changeAttributeTable, reasons, subreasons)}
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
    subreasons: getSubreasons()
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
