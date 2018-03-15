import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import styled from 'styled-components';
// import 'react-table/react-table.css';

import CustomGrid from '../../components/CustomGrid';
import {
    getData,
    getShowSpinner,
    getMeta,
    getLinks,
    getCurrentSort,
    getColumns,
    getFilters,
    getFields,
    getReasons,
    getReturnTypes,
    getWarehouseNames,
    getSubreasons
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducer';
import saga from './saga/rootSaga';
import {fetchData} from '../common/actions/table';
import Table from '../../components/Table';
import Filters from './Filters';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_RETURN_RESOURCE} from './constants';
import {getInitialData} from './actions';
import {launchFilter, changeField, clearFields} from '../common/actions/filter';
import columns from './columnsDefinition';


const ServerDataTable = serverDataTableHoc(Table, KEY_RETURN_RESOURCE);

class ReturnPage extends Component {

    constructor(props) {
        super(props);
        this.props.getInitialData();
    }

    render() {
        const {
            data,
            currentSort,
            meta: {currentPage, totalPages, pageSize},
            links,
            loading,
            filters,
            filterFields,
            launchFilter,
            changeField,
            clearFields,
            reasons,
            returnTypes,
            warehouseNames,
            subreasons
        } = this.props;
        return (
            <div>
                <Filters
                    fields={filterFields}
                    changeField={changeField.bind(null, KEY_RETURN_RESOURCE)}
                    launchFilter={launchFilter.bind(null, KEY_RETURN_RESOURCE)}
                    clearFields={clearFields.bind(null, KEY_RETURN_RESOURCE)}
                    options={{subreasons, reasons, returnTypes, warehouseNames}}
                />
                <ServerDataTable
                    fetchData={this.props.fetchData.bind(null, KEY_RETURN_RESOURCE)}
                    columns={columns}
                    data={data}
                    sorted={currentSort}
                    pages={totalPages}
                    loading={loading}
                    defaultPageSize={pageSize}
                    currentPage={currentPage}
                    links={links}
                    filters={filters}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                if (rowInfo) {
                                    this.props.history.push(`/return/${rowInfo.original.id}`);
                                }
                            }
                        };
                    }}
                    baseUri={`/${KEY_RETURN_RESOURCE}`}
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
    currentSort: getCurrentSort(),
    filterFields: getFields(),
    filters: getFilters(),
    reasons: getReasons(),
    returnTypes: getReturnTypes(),
    warehouseNames: getWarehouseNames(),
    subreasons: getSubreasons()
});

const mapDispatchToProps = {
    fetchData,
    launchFilter,
    changeField,
    clearFields,
    getInitialData
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'return', reducer});
const withSaga = injectSaga({key: 'return', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ReturnPage);
