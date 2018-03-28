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
    getDetail,
    getFetch
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducer';
import saga from './saga/rootSaga';
import {changeActiveTab} from '../App/actions';
import {fetchData} from '../common/table/actions';
import Table from '../../components/Table';
import DetailReturn from './DetailReturn';
import serverDataTableHoc from '../../components/ServerDataTable';
import LoadingIndicator from '../../components/LoadingIndicator';
import {KEY_LINE_RESOURCE} from './constants';
import columns from './columnsDefinition';
import {
    getInitialData,
    changeAttributeTable
} from './actions';


const ServerDataTable = serverDataTableHoc(Table);

class ReturnLine extends Component {

    constructor(props) {
        super(props);
        this.props.changeActiveTab('return');
        this.props.getInitialData(this.props.match.params.id);
    }

    showDetail = (ean) => {
        this.props.history.push(`/product/${ean}`);
    }

    render() {
        const {
            tableData,
            meta: {currentPage, totalPages, pageSize, totalResults},
            links,
            loading,
            reasons,
            subreasons,
            changeAttributeTable,
            //TODO: get roles from the user
            rol = 'WAREHOUSE',
            detail = { data: { attributes: {}}},
            fetch
        } = this.props;
        const {data = {attributes: {}}} = detail;
        return (
            <div>
                <h3>Return detail</h3>
                {fetch.detailLine.fetching === true
                    ? <LoadingIndicator/>
                    : <DetailReturn className="extended" detail={data.attributes} />
                }
                <ServerDataTable
                    fetchData={this.props.fetchData.bind(null, KEY_LINE_RESOURCE)}
                    columns={columns(rol, changeAttributeTable, this.showDetail, reasons, subreasons)}
                    data={tableData}
                    pages={totalPages}
                    loading={fetch.detailLine.fetching === true}
                    pageSize={tableData.length ? tableData.length : 4}
                    currentPage={currentPage}
                    totalResults={totalResults}
                    dataInitialized
                    links={links}
                    baseUri={`/return/${this.props.match.params.id}/${KEY_LINE_RESOURCE}`}
                    noDataText={'No rows found'}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('column', column);
                                if (rowInfo && column.id !== 'sku') {
                                    this.props.history.push(`/line/${rowInfo.original.id}`);
                                }
                            }
                        };
                    }}
                />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    tableData: getData(),
    showSpinner: getShowSpinner(),
    meta: getMeta(),
    links: getLinks(),
    reasons: getReasons(),
    subreasons: getSubreasons(),
    detail: getDetail(),
    fetch: getFetch()
});

const mapDispatchToProps = {
    fetchData,
    getInitialData,
    changeAttributeTable,
    changeActiveTab
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'lines', reducer});
const withSaga = injectSaga({key: 'lines', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ReturnLine);
