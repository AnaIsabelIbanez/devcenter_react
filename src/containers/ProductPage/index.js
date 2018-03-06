import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import queryString from 'query-string';

import CustomGrid from '../../components/CustomGrid';
import {getProducts, getShowSpinner, getMeta, getLinks} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducers';
import saga from './saga/rootSagas';
import {fetchData} from './actions';
import Pagination from '../../components/Pagination';

const StyledGrid = styled(CustomGrid)`
    && {
        padding: 20px;
    }
`;

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.props.fetchData();
    }

    // getUrlQuery() {
    //     return this.props.history.location.search;
    // }

    onPageChange(page, sizePerPage) {
        console.log(`page: ${page}, sizePerPage: ${sizePerPage}`);
    }

    // getInitialData(queryObject) {
    //     this.props.fetchData(queryObject);
    // }

    // reloadTable() {
    //     const query = this.getUrlQuery();
    //     this.queryParameters = query.substr(1);
    //     let filters = '';
    //     this.getInitialData(query);
    // }

    componentDidMount() {
        //this.reloadTable();
    }

    parseSortFromTable(sort) {
        const currentSort = sort.map((sortElem) => {
            const symbol = sortElem.desc ? '-' : '';
            return `${symbol}${sortElem.id}`;
        });
        return currentSort.join(',');
    }

    parseSortToTable(sort) {
        const currentSort = sort.split(',').map((sortElem) => {
            const isDescending = sortElem.substr(0, 1) === '-';
            const sortObject = isDescending
                ? {
                    id: sortElem.substr(1),
                    desc: true
                }
                : {
                    id: sortElem,
                    desc: false
                };

        });
    }

    getNewResults = (newPage, filters, currentSort) => {
        filters = filters ? filters : this.props.filters;
        newPage = newPage ? newPage : this.props.newPage;
        const filtersString = filters ? filters.join(',') : null;
        const queryObjLessTags = {'page[offset]': newPage, sort: this.parseSortFromTable(currentSort)};
        const queryObject = filtersString ? { filtersString, ...queryObjLessTags } : queryObjLessTags;
        const query = queryString.stringify(queryObject);
        //this.props.history.push(`/product?${query}`);
        this.props.fetchData(`?${query}`, currentSort);
    };

    // componentDidUpdate() {
    //     if (this.queryParameters !== this.props.history.location.search.substr(1)) {
    //         this.reloadTable();
    //     }
    // };

    render() {
        const {
            products,
            meta,
            links,
            loading
        } = this.props;
        const {
            currentSort,
            totalPages,
            pageSize,
            totalResults,
            currentPage
        } = meta;
        console.log('products', products);
        return (
            <StyledGrid container>
                <div>
                    <ReactTable
                        columns={[
                            {
                                Header: 'Source',
                                accessor: 'source'
                            },
                            {
                                Header: 'External id',
                                accessor: 'external_id'
                            },
                            {
                                Header: 'Sku',
                                accessor: 'sku'
                            }
                        ]}
                        manual
                        data={products}
                        multiSort
                        sorted={currentSort}
                        pages={totalPages} // Display the total number of pages
                        loading={loading} // Display the loading overlay when we need it
                        onPageChange={(a, b) => {console.log('a', a); console.log('b', b);}}
                        onSortedChange={(newSorted, column, shiftKey) => {
                            this.getNewResults(2, null, newSorted);
                        }}
                        onFetchData={(a, b) => {
                            // console.log('pageSize', a.pageSize);
                            // console.log('page', a.page);
                            // console.log('sorted', a.sorted);
                            // console.log('filtered', a.filtered);
                            //this.props.fetchData();
                        }}//this.props.fetchData()} // Request new data when things change
                        defaultPageSize={5}
                        className="-striped -highlight"
                    />
                    <Pagination
                        sliceStart={0}
                        sliceEnd={totalPages}
                        recordsPerPage={pageSize}
                        totalRecords={totalResults}
                        currentPage={currentPage}
                        onClick={(a, b) => { console.log('a', a); console.log('b', b); }}
                    />
                </div>
            </StyledGrid>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    products: getProducts(),
    showSpinner: getShowSpinner(),
    meta: getMeta(),
    links: getLinks()
});

const mapDispatchToProps = {fetchData};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'product', reducer});
const withSaga = injectSaga({key: 'product', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(ProductPage);
