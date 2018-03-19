import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';
import SelectForm from './SelectForm';

const NoLoadinIndicator = () => (<div></div>);

export default ({pages, currentPage, onPagination, noDataText, loading, totalResults, onChangePageSize, ...props}) => {
    return (
        <div>
            <ReactTable
                manual
                showPagination={false}
                multiSort
                pages={pages}
                className="-striped -highlight"
                loading={loading === true}
                loadingText=""
                LoadingComponent={loading === true ? LoadingIndicator : NoLoadinIndicator}
                noDataText={noDataText}
                {...props}
            />
            {onPagination && <span>Página {currentPage} de {pages} ({totalResults} elementos)
                <Pagination
                    totalPages={pages}
                    currentPage={currentPage}
                    onClick={onPagination}
                /></span>}
            {onChangePageSize && <SelectForm
                style={{display: 'inline', width: 'auto'}}
                width={1}
                value={props.pageSize}
                onChange={onChangePageSize}
                options={[20, 100, 500]}
                convert= {(item) => ({
                    'id': item,
                    'text': item
                })}
            />}
        </div>
    );
};
