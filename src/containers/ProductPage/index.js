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
    getCategories,
    getColors,
    getFields,
    getFilters,
    getSizes,
    getBrands,
    getFetch,
    getSelectedProduct
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducers';
import saga from './saga/rootSagas';
import {fetchData} from '../common/table/actions';
import {launchFilter, changeField,clearFields} from '../common/filters/actions';
import {getInitialData, setSelectedProduct} from './actions';
import Table from '../../components/Table';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_PRODUCT_RESOURCE} from './constants';
import Filters from './Filters';
import DetailProduct from './DetailProduct';
import columns from './columnsDefinition';

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
            meta: {currentPage, totalPages, pageSize, totalResults},
            links,
            filterFields,
            launchFilter,
            changeField,
            clearFields,
            brands,
            categories,
            sizes,
            colors,
            filters,
            fetch,
            selectedProduct
        } = this.props;
        return (
            <div>
                <Filters
                    fields={filterFields}
                    changeField={changeField.bind(null, KEY_PRODUCT_RESOURCE)}
                    launchFilter={launchFilter.bind(null, KEY_PRODUCT_RESOURCE)}
                    clearFields={clearFields.bind(null, KEY_PRODUCT_RESOURCE)}
                    options={{brands, categories, sizes, colors}}
                    fetch={fetch}
                />
                <ServerDataTable
                    fetchData={this.props.fetchData.bind(null, KEY_PRODUCT_RESOURCE)}
                    columns={columns}
                    data={data}
                    sorted={currentSort}
                    pages={totalPages}
                    loading={fetch.product.fetching === true}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    totalResults={totalResults}
                    links={links}
                    baseUri={`/${KEY_PRODUCT_RESOURCE}`}
                    filters={filters}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                if (rowInfo) {
                                    this.props.setSelectedProduct(rowInfo.original);
                                }
                            }
                        };
                    }}
                    noDataText={'No rows found'}
                />

                {selectedProduct && <DetailProduct
                    attributes={selectedProduct}
                />}
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
    colors: getColors(),
    sizes: getSizes(),
    brands: getBrands(),
    categories: getCategories(),
    fetch: getFetch(),
    selectedProduct: getSelectedProduct()
});

const mapDispatchToProps = {
    fetchData,
    getInitialData,
    launchFilter,
    changeField,
    clearFields,
    setSelectedProduct
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'product', reducer});
const withSaga = injectSaga({key: 'product', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(ProductPage);
