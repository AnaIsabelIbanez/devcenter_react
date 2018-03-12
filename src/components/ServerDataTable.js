import React, {Component} from 'react';
import queryString from 'query-string';
import {isEqual} from 'lodash';
import {removeKeys} from '../utils/utilities';
import styled from 'styled-components';

// import CustomGrid from './CustomGrid';

// const StyledGrid = styled(CustomGrid)`
//     && {
//         padding: 20px;
//     }
// `;

export default function withServerSideData(WrappedTable, keyResource) {
    return class ServerDataTable extends Component {

        constructor(props) {
            super(props);
            this.props.fetchData(this.props.baseUri);
        }

        getParsedSortFromTable(sort) {
            const currentSort = sort.map((sortElem) => {
                const symbol = sortElem.desc ? '-' : '';
                return `${symbol}${sortElem.id}`;
            });
            return currentSort.join(',');
        }

        componentWillUpdate(nextProps) {
            const nextFilters = nextProps.filters;
            if (!isEqual(nextFilters, this.props.filters)) {
                console.log('nextFilters', nextFilters);
                this.changeResults(this.getParsedFilters(nextFilters));
            }
        }

        getParsedFilters(filters) {
            let filterObj = {};
            Object.keys(filters).forEach((filterKey) => {
                const newFilter = {[`filter[${filterKey}]`]: filters[filterKey]};
                filterObj = {...filterObj, ...newFilter};
            });
            return filterObj;
        }

        changeResults = (newParameter, currentSort = this.props.currentSort) => {
            const selfLink = this.props.links.self;
            const currentQueryObject = queryString.parse(selfLink.substr(selfLink.indexOf('?') + 1));
            const queryObjNoFilters = removeKeys(currentQueryObject, /^filter\[/);
            const queryObject = {...queryObjNoFilters, ...newParameter};
            const query = queryString.stringify(queryObject);
            this.props.fetchData(`${this.props.baseUri}?${query}`, currentSort);
        }

        render() {
            return (
                <div>
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
                </div>
            );
        }
    };
}
