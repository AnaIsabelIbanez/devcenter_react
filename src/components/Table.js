import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';
import styled from 'styled-components';

const NoLoadingIndicator = () => (<div></div>);

const myTable = ({className, pages, currentPage, onPagination, noDataText, loading, totalResults, onChangePageSize, ...props}) => {

    return (
        <div className={className}>
            <ReactTable
                manual
                showPagination={false}
                multiSort
                pages={pages}
                className="-striped -highlight react-table"
                loading={loading === true}
                loadingText=""
                LoadingComponent={loading === true ? LoadingIndicator : NoLoadingIndicator}
                noDataText={noDataText}
                {...props}
            />
            {onPagination &&
                <Pagination
                    totalPages={pages}
                    totalResults={totalResults}
                    currentPage={currentPage}
                    onPageChanged={onPagination}
                    onChangePageSize={onChangePageSize}
                />}
        </div>
    );
};

export default styled(myTable)`
        .react-table {
            border-radius: 4px;
            border: 1px solid #ccc;
        } 
        .hide {
            display: none
        }
`;
