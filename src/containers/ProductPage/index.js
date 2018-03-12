import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import styled from 'styled-components';
// import 'react-table/react-table.css';

// import CustomGrid from '../../components/CustomGrid';
import {getData, getShowSpinner, getMeta, getLinks, getCurrentSort, getColumns} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer/rootReducers';
import saga from './saga/rootSagas';
import {fetchData} from '../common/actions/table';
import Table from '../../components/Table';
import serverDataTableHoc from '../../components/ServerDataTable';
import {KEY_PRODUCT_RESOURCE} from './constants';

// const StyledGrid = styled(CustomGrid)`
//     && {
//         padding: 20px;
//     }
// `;

const ServerDataTable = serverDataTableHoc(Table, KEY_PRODUCT_RESOURCE);

class ProductPage extends Component {

    render() {
        const {
            data,
            currentSort,
            meta: {currentPage, totalPages, pageSize},
            links,
            loading,
            columns
        } = this.props;
        return (
            <div>
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
    columns: getColumns()
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
