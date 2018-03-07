import React from 'react';

import {Button} from 'react-bootstrap';

import {KeyboardArrowLeft, KeyboardArrowRight} from 'material-ui-icons';

const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
};

const Pagination = ({
    totalPages,
    onClick,
    currentPage
}) => {
    //const totalPages = Math.ceil(totalRecords / recordsPerPage);
    // const currentPage = Math.ceil(sliceEnd / recordsPerPage);
    return (
        <div style={style}>
            <Button
                bsStyle="link"
                disabled={currentPage === 1}
                onClick={() => onClick({page: 'first'})}
            >
                <KeyboardArrowLeft/>
            </Button>
            {currentPage !== 1 && <span>
                <Button
                    bsStyle="link"
                    disabled={currentPage === 1}
                    onClick={() => onClick({page: 'first'})}
                >
                1
                </Button>  -
                <Button
                    bsStyle="link"
                    onClick={() => onClick({page: 'prev'})}
                >
                    {currentPage - 1}
                </Button>
            </span>}
            <Button
                bsStyle="link"
                disabled
            >
                {currentPage}
            </Button>
            {currentPage !== totalPages && <span>
                <Button
                    bsStyle="link"
                    onClick={() => onClick({page: 'next'})}
                >
                    {currentPage + 1}
                </Button> -
                <Button
                    bsStyle="link"
                    onClick={() => onClick({page: 'last'})}
                >
                    {totalPages}
                </Button>
            </span>}
            <Button
                bsStyle="link"
                disabled={currentPage === totalPages}
                onClick={() => onClick({page: 'last'})}
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
