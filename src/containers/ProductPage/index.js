import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

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
    getSelectedProduct,
    getFiltering,
    getMainPhoto,
    getSmallPhotos
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducers';
import saga from './saga/rootSagas';
import {fetchData} from '../common/table/actions';
import {changeActiveTab} from '../App/actions';
import {launchFilter, changeField, clearFields, clearFilters} from '../common/filters/actions';
import {getInitialData, setSelectedProduct, setMainPhoto} from './actions';
import Table from '../../components/Table';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_PRODUCT_RESOURCE} from './constants';
import Filters from './Filters';
import DetailProduct from './DetailProduct';
import columns from './columnsDefinition';
import {Col, Grid, Row} from 'react-bootstrap';
import {getLiteral} from '../../utils/utilities';

// const StyledGrid = styled(CustomGrid)`
//     && {
//         padding: 20px;
//     }
// `;

const ServerDataTable = serverDataTableHoc(Table, KEY_PRODUCT_RESOURCE);

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.props.changeActiveTab('product');
        this.props.getInitialData(this.props.match.params.id);
    }

    componentDidUpdate() {
        if (this.props.fetch.product.fetching && this.props.filtering === true) {
            this.props.clearFilters(KEY_PRODUCT_RESOURCE);
        }
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
            selectedProduct,
            mainPhoto,
            smallPhotos,
            setMainPhoto
        } = this.props;

        return (
            <Grid fluid>
                <Row>
                    <Col>
                        <Filters
                            fields={filterFields}
                            changeField={changeField.bind(null, KEY_PRODUCT_RESOURCE)}
                            launchFilter={launchFilter.bind(null, KEY_PRODUCT_RESOURCE)}
                            clearFields={clearFields.bind(null, KEY_PRODUCT_RESOURCE)}
                            options={{brands, categories, sizes, colors}}
                            fetch={fetch}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {<ServerDataTable
                            fetchData={this.props.fetchData.bind(null, KEY_PRODUCT_RESOURCE)}
                            columns={columns}
                            className={selectedProduct ? 'hide' : 'show'}
                            data={data}
                            sorted={currentSort}
                            pages={totalPages}
                            loading={fetch.product.fetching === true}
                            pageSize={data.length ? data.length : 4}
                            currentPage={currentPage}
                            totalResults={totalResults}
                            links={links}
                            baseUri={`/${KEY_PRODUCT_RESOURCE}`}
                            filters={filters}
                            filtering={this.props.filtering}
                            getTdProps={(state, rowInfo, column, instance) => {
                                return {
                                    onClick: (e, handleOriginal) => {
                                        if (rowInfo) {
                                            this.props.setSelectedProduct(rowInfo.original);
                                        }
                                    }
                                };
                            }}
                            noDataText={getLiteral('common.noResults')}
                        />}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {selectedProduct && <DetailProduct
                            attributes={selectedProduct}
                            mainPhoto={mainPhoto}
                            smallPhotos={smallPhotos}
                            setMainPhoto={setMainPhoto}
                        />}
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
    colors: getColors(),
    sizes: getSizes(),
    brands: getBrands(),
    categories: getCategories(),
    fetch: getFetch(),
    selectedProduct: getSelectedProduct(),
    filtering: getFiltering(),
    mainPhoto: getMainPhoto(),
    smallPhotos: getSmallPhotos()
});

const mapDispatchToProps = {
    fetchData,
    getInitialData,
    launchFilter,
    changeField,
    clearFields,
    setSelectedProduct,
    changeActiveTab,
    clearFilters,
    setMainPhoto
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'product', reducer});
const withSaga = injectSaga({key: 'product', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(ProductPage);
