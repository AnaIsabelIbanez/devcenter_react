import React from 'react';

import {Button} from 'react-bootstrap';

import { KeyboardArrowLeft, KeyboardArrowRight }  from 'material-ui-icons';

const generatePageNumbers = (currentPage, totalPages, maxVisiblePages) => {
    const middle = Math.round(maxVisiblePages / 2);
    const startPage = currentPage <= middle ? 0 : currentPage - middle;
    const diffToFinal = totalPages - currentPage;
    const sliceFrom = diffToFinal < middle ? totalPages - maxVisiblePages : startPage;
    const sliceTo = sliceFrom + maxVisiblePages;

    return Array(totalPages)
        .fill(0)
        .map((x, i) => i + 1)
        .slice(sliceFrom, sliceTo);
};

const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
};

const Pagination = ({
    sliceStart,
    sliceEnd,
    recordsPerPage,
    totalRecords,
    onClick,
    currentPage,
    maxVisiblePages
}) => {
    const totalPages = Math.ceil(totalRecords / recordsPerPage);
    // const currentPage = Math.ceil(sliceEnd / recordsPerPage);
    return (
        <div style={style}>
            <Button
                bsStyle="link"
                disabled={currentPage === 1}
                onClick={() => onClick({newSliceStart: 0})}
            >
                <KeyboardArrowLeft/>
            </Button>
            <Button
                bsStyle="link"
                disabled={currentPage === 1}
                onClick={() => onClick({newSliceStart: sliceStart - recordsPerPage})}
            >
                <KeyboardArrowLeft/>
            </Button>
            <Button
                bsStyle="link"
                disabled
            >
                {1}
            </Button>
            <Button
                bsStyle="link"
                disabled={currentPage === totalPages}
                onClick={() => onClick({newSliceStart: sliceStart + recordsPerPage})}
            >
                <KeyboardArrowRight/>
            </Button>
            <Button
                bsStyle="link"
                disabled={currentPage === totalPages}
                onClick={() =>
                    onClick({newSliceStart: totalPages * recordsPerPage - recordsPerPage})
                }
            >
                <KeyboardArrowRight/>
            </Button>
        </div>
    );
};

Pagination.defaultProps = {
    maxVisiblePages: 5
};

export default Pagination;
