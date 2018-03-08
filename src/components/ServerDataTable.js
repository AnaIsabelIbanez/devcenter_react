import React, {Component} from 'react';
import queryString from 'query-string';
import styled from 'styled-components';

import CustomGrid from './CustomGrid';

const StyledGrid = styled(CustomGrid)`
    && {
        padding: 20px;
    }
`;

export default function withServerSideData(WrappedTable, keyResource) {
    return class ServerDataTable extends Component {

        constructor(props) {
            super(props);
            this.props.fetchData(`/${keyResource}`);
        }

        getParsedSortFromTable(sort) {
            const currentSort = sort.map((sortElem) => {
                const symbol = sortElem.desc ? '-' : '';
                return `${symbol}${sortElem.id}`;
            });
            return currentSort.join(',');
        }

        getParsedFilters(filters) {
            return filters;
        }

        changeResults = (newParameter, currentSort = this.props.currentSort) => {
            const selfLink = this.props.links.self;
            const currentQueryObject = queryString.parse(selfLink.substr(selfLink.indexOf('?') + 1));
            const queryObject = {...currentQueryObject, ...newParameter};
            const query = queryString.stringify(queryObject);
            this.props.fetchData(`${keyResource}?${query}`, currentSort);
        }

        render() {
            return (
                <StyledGrid container>
                    <div>
                        <WrappedTable
                            onSortedChange={(newSorted, column, shiftKey) => {
                                this.changeResults({sort: this.getParsedSortFromTable(newSorted)}, newSorted);
                            }}
                            onPagination={({page}) => {
                                this.props.fetchData(this.props.links[page]);
                            }}
                            {...this.props}
                        />
                    </div>
                </StyledGrid>
            );
        }
    };
}
