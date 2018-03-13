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
    getSubreasons
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
import Select from '../../components/Select';
import {getInitialData} from './actions';


const ServerDataTable = serverDataTableHoc(Table);

class ReturnPage extends Component {

    constructor(props) {
        super(props);
        this.props.getInitialData();
    }

    getEditableColumns(rol, changeSubreason, subreasons) {
        return [{
            Header: 'Motivo almacén',
            accessor: 'warehouse_reason',
            Cell: row => {
                return <Select
                    value={'uno'}
                    onChange={({target}) => console.log(target.value)}
                    options={[{id: 'uno', text: 'uno_warehouse_reason'}, {id: 'dos', text: 'dos'}]}
                />;
            }
        }, {
            Header: 'Submotivo almacén',
            accessor: 'warehouse_subreason',
            Cell: row => {
                return <Select
                    value={'uno'}
                    onChange={({target}) => console.log(target.value)}
                    options={[{id: 'uno', text: 'uno_warehouse_subreason'}, {id: 'dos', text: 'dos'}]}
                />;
            }
        }, {
            Header: 'Submotivo calidad',
            accessor: 'quality_subreason',
            Cell: row => {
                return <Select
                    value={'uno'}
                    onChange={({target}) => console.log(target.value)}
                    options={[{id: 'uno', text: 'uno_quality_subreason'}, {id: 'dos', text: 'dos'}]}
                />;
            }
        }, {
            Header: 'Submotivo Producción',
            accessor: 'production_subreason',
            Cell: row => {
                return <Select
                    value={'uno'}
                    onChange={({target}) => console.log(target.value)}
                    options={[{id: 'uno', text: 'uno_production_subreason'}, {id: 'dos', text: 'dos'}]}
                />;
            }
        }];
    }

    render() {
        const {
            data,
            meta: {currentPage, totalPages, pageSize},
            links,
            loading,
            reasons
        } = this.props;
        return (
            <div>
                <ServerDataTable
                    fetchData={this.props.fetchData.bind(null, KEY_LINE_RESOURCE)}
                    columns={columns(() => console.log('algo'), reasons)}
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
    links: getLinks(),
    reasons: getReasons(),
    subreasons: getSubreasons()
});

const mapDispatchToProps = {
    fetchData,
    getInitialData
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'lines', reducer});
const withSaga = injectSaga({key: 'lines', saga});

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ReturnPage);
