import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
    getData,
    getShowSpinner,
    getMeta,
    getLinks
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


const ServerDataTable = serverDataTableHoc(Table);

class ReturnPage extends Component {

    getEditableColumns(rol, changeSubreason, subreasons) {
        return [{
            Header: 'Submotivo almacén',
            accessor: 'warehouse_subreason',
            Cell: row => {
                console.log('submotivo value', row.value);
                return <select
                // value={row.value}
                    value="dos"
                    onChange={({target}) => changeSubreason(target.value)}
                >   {subreasons.map((subreason, index) => {
                        return (<option key={index} value={subreason.id}>{subreason.text}</option>);
                    })}</select>;
            },
            sortable: false
        }, {
            Header: 'Submotivo almacén',
            accessor: 'warehouse_subreason',
            Cell: row => {
                console.log('submotivo value', row.value);
                return <select
                    // value={row.value}
                    value="dos"
                    onChange={({target}) => changeSubreason(target.value)}
                >   {subreasons.map((subreason, index) => {
                        return (<option key={index} value={subreason.id}>{subreason.text}</option>);
                    })}</select>;
            },
            sortable: false
        }];
    }

    render() {
        const {
            data,
            meta: {currentPage, totalPages, pageSize},
            links,
            loading
        } = this.props;
        console.log('props.match.params.id', this.props.match.params.id);
        return (
            <div>
                <ServerDataTable
                    fetchData={this.props.fetchData.bind(null, KEY_LINE_RESOURCE)}
                    columns={columns(() => console.log('algo'), [{id: 'uno', text: 'uno'}, {id: 'dos', text: 'dos'}])}
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
    links: getLinks()
});

const mapDispatchToProps = {
    fetchData
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'lines', reducer});
const withSaga = injectSaga({key: 'lines', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ReturnPage);
