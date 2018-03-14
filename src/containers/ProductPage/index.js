import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import styled from 'styled-components';

import {
    getData,
    getShowSpinner,
    getMeta, getLinks,
    getCurrentSort,
    getColumns,
    getCategories,
    getColors,
    getFields,
    getFilters,
    getSizes,
    getBrands
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducers';
import saga from './saga/rootSagas';
import {fetchData} from '../common/actions/table';
import {launchFilter, changeField,clearFields} from '../common/actions/filter';
import {getInitialData} from './actions';
import Table from '../../components/Table';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_PRODUCT_RESOURCE} from './constants';
import Filters from './Filters';

// const StyledGrid = styled(CustomGrid)`
//     && {
//         padding: 20px;
//     }
// `;

const ServerDataTable = serverDataTableHoc(Table, KEY_PRODUCT_RESOURCE);

class ProductPage extends Component {

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
            columns,
            filterFields,
            launchFilter,
            changeField,
            clearFields,
            brands,
            categories,
            sizes,
            colors,
            filters
        } = this.props;
        return (
            <div>
                <Filters
                    fields={filterFields}
                    changeField={changeField.bind(null, KEY_PRODUCT_RESOURCE)}
                    launchFilter={launchFilter.bind(null, KEY_PRODUCT_RESOURCE)}
                    clearFields={clearFields.bind(null, KEY_PRODUCT_RESOURCE)}
                    options={{brands, categories, sizes, colors}}
                />
                <ServerDataTable
                    fetchData={this.props.fetchData.bind(null, KEY_PRODUCT_RESOURCE)}
                    columns={columns}
                    data={data}
                    sorted={currentSort}
                    pages={totalPages}
                    loading={loading}
                    defaultPageSize={pageSize}
                    currentPage={currentPage}
                    links={links}
                    baseUri={`/${KEY_PRODUCT_RESOURCE}`}
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
    columns: getColumns(),
    filterFields: getFields(),
    filters: getFilters(),
    colors: getColors(),
    sizes: getSizes(),
    brands: getBrands(),
    categories: getCategories()
});

const mapDispatchToProps = {
    fetchData,
    getInitialData,
    launchFilter,
    changeField,
    clearFields
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'product', reducer});
const withSaga = injectSaga({key: 'product', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(ProductPage);
