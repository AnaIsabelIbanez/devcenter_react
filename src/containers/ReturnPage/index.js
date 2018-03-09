import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import styled from 'styled-components';
// import 'react-table/react-table.css';

import CustomGrid from '../../components/CustomGrid';
import {getData, getShowSpinner, getMeta, getLinks, getCurrentSort, getColumns, getFilters, getFields } from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducer';
import saga from './saga/rootSaga';
import {fetchData} from '../common/actions/table';
import Table from '../../components/Table';
import Filters from './Filters';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_RETURN_RESOURCE} from './constants';
import {launchFilter, changeField, clearFields} from './actions';
import columns from './columnsDefinition';


const ServerDataTable = serverDataTableHoc(Table, KEY_RETURN_RESOURCE);

class ReturnPage extends Component {

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
            clearFields
        } = this.props;
        return (
            <div>
                <Filters
                    fields={filterFields}
                    changeField={changeField}
                    launchFilter={launchFilter}
                    clearFields={clearFields}
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
    filters: getFilters()
});

const mapDispatchToProps = {
    fetchData,
    launchFilter,
    changeField,
    clearFields
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'return', reducer});
const withSaga = injectSaga({key: 'return', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ReturnPage);
