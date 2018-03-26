import React from 'react';

import {Button, Col, FormControl, Grid, Row} from 'react-bootstrap';
import styled from 'styled-components';
import Icon from './Icon';
import {getLiteral} from '../utils/utilities';

const myPagination = ({
    className,
    currentPage,
    totalPages,
    totalResults,
    onPageChanged,
    pageSizeValue,
    onChangePageSize
}) => {
    //const totalPages = Math.ceil(totalRecords / recordsPerPage);
    // const currentPage = Math.ceil(sliceEnd / recordsPerPage);
    return (
        <Row className={className}>
            <Col md={9}>
                <span>
                    {getLiteral('common.pageInfo', {
                        currentPage: currentPage,
                        totalPages: totalPages,
                        totalResults: totalResults
                    })}
                </span>
                <span>
                    <Button
                        bsStyle="link"
                        disabled={currentPage === 1}
                        onClick={() => onPageChanged({page: 'first'})}
                    >
                        <Icon name="angle-double-left" />
                    </Button>
                    {currentPage !== 1 && <span>
                        <Button
                            bsStyle="link"
                            disabled={currentPage === 1}
                            onClick={() => onPageChanged({page: 'first'})}
                        >
                        1
                        </Button>  -
                        <Button
                            bsStyle="link"
                            onClick={() => onPageChanged({page: 'prev'})}
                        >
                            {currentPage - 1}
                        </Button>
                    </span>}
                    <Button
                        className="current-page"
                        bsStyle="link"
                        disabled
                    >
                        {currentPage}
                    </Button>
                    {currentPage !== totalPages && <span>
                        <Button
                            bsStyle="link"
                            onClick={() => onPageChanged({page: 'next'})}
                        >
                            {currentPage + 1}
                        </Button> -
                        <Button
                            bsStyle="link"
                            onClick={() => onPageChanged({page: 'last'})}
                        >
                            {totalPages}
                        </Button>
                    </span>}
                    <Button
                        bsStyle="link"
                        disabled={currentPage === totalPages}
                        onClick={() => onPageChanged({page: 'last'})}
                    >
                        <Icon name="angle-double-right" />
                    </Button>
                </span>
            </Col>
            <Col md={2}>
                {onChangePageSize && <span className="pull-right">{getLiteral('common.pageSize')}</span>}
            </Col>
            <Col md={1}>
                {onChangePageSize && <FormControl
                    componentClass="select"
                    value={pageSizeValue}
                    onChange={onChangePageSize}
                >
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </FormControl>
                }
            </Col>
        </Row>
    );
};

// myPagination.defaultProps = {
//     maxVisiblePages: 5
// };

export default styled(myPagination)`
    margin: 20px 0;
    
    .current-page {
        font-weight: bolder;
        border: 1px solid gray;
        border-radius: 3px;
        color: gray;
    }
`;
