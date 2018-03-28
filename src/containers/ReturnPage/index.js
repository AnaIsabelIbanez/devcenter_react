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
    getSubreasons,
    getFetch,
    getFiltering
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducer';
import saga from './saga/rootSaga';
import {fetchData} from '../common/table/actions';
import Table from '../../components/Table';
import Filters from './Filters';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_RETURN_RESOURCE} from './constants';
import {changeActiveTab} from '../App/actions';
import {getInitialData} from './actions';
import {launchFilter, changeField, clearFields, clearFilters} from '../common/filters/actions';
import columns from './columnsDefinition';
import {Col, Grid, Row} from 'react-bootstrap';


const ServerDataTable = serverDataTableHoc(Table, KEY_RETURN_RESOURCE);

class ReturnPage extends Component {

    constructor(props) {
        super(props);
        this.props.changeActiveTab(this.props.location.pathname.substring(1));
        this.props.getInitialData();
    }

    componentWillUpdate() {
        if (this.props.fetch.return.fetching && this.props.filtering === true) {
            this.props.clearFilters(KEY_RETURN_RESOURCE);
        }
    }

    render() {
        const {
            data,
            currentSort,
            meta: {currentPage, totalPages, pageSize, totalResults},
            links,
            filters,
            filterFields,
            launchFilter,
            changeField,
            clearFields,
            reasons,
            returnTypes,
            warehouseNames,
            subreasons,
            fetch
        } = this.props;
        return (
            <Grid className="extended">
                <Row>
                    <Col>
                        <Filters
                            fields={filterFields}
                            changeField={changeField.bind(null, KEY_RETURN_RESOURCE)}
                            launchFilter={launchFilter.bind(null, KEY_RETURN_RESOURCE)}
                            clearFields={clearFields.bind(null, KEY_RETURN_RESOURCE)}
                            options={{subreasons, reasons, returnTypes, warehouseNames}}
                            buttonDisabled={links === undefined}
                            fetchStatus={fetch}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ServerDataTable
                            fetchData={this.props.fetchData.bind(null, KEY_RETURN_RESOURCE)}
                            columns={columns}
                            data={data}
                            sorted={currentSort}
                            pages={totalPages}
                            loading={fetch.return.fetching === true}
                            pageSize={data.length ? data.length : 4}
                            currentPage={currentPage}
                            totalResults={totalResults}
                            filtering={this.props.filtering}
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
                            noDataText={'No rows found'}
                            baseUri={`/${KEY_RETURN_RESOURCE}`}
                        />
                    </Col>
                </Row>
            </Grid>
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
    subreasons: getSubreasons(),
    fetch: getFetch(),
    filtering: getFiltering()
});

const mapDispatchToProps = {
    fetchData,
    launchFilter,
    changeField,
    clearFields,
    getInitialData,
    changeActiveTab,
    clearFilters
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'return', reducer});
const withSaga = injectSaga({key: 'return', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ReturnPage);
