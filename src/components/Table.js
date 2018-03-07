import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Pagination from './Pagination';

export default ({pages, currentPage, onPagination, ...props}) => (
    <div>
        <ReactTable
            manual
            showPagination={false}
            multiSort
            pages={pages}
            className="-striped -highlight"
            {...props}
        />
        {onPagination && <Pagination
            totalPages={pages}
            currentPage={currentPage}
            onClick={onPagination}
        />}
    </div>
);
