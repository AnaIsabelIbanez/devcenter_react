import React, {Component} from 'react';
import queryString from 'query-string';
import {isEqual} from 'lodash';

import {removeKeys} from '../utils/utilities';
import LoadingIndicator from '../components/LoadingIndicator';
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
                this.changeResults(true, this.getParsedFilters(nextFilters));
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

        changeResults = (isFilter, newParameter, currentSort = this.props.currentSort) => {
            const selfLink = this.props.links ? this.props.links.self : null;
            if (selfLink) {
                const currentQueryObject = queryString.parse(selfLink.substr(selfLink.indexOf('?') + 1));
                const queryObjNoFilters = isFilter ? removeKeys(currentQueryObject, /^filter\[/) : currentQueryObject;
                const queryObject = {...queryObjNoFilters, ...newParameter};
                const query = queryString.stringify(queryObject);
                this.props.fetchData(`${this.props.baseUri}?${query}`, currentSort);
            }
        }

        changePageSize = (valuePageSize) => {
            console.log('a',valuePageSize);
            const newParameter = {
                ['page[limit]']: valuePageSize,
                ['page[offset]']: 0
            };
            this.changeResults(false, newParameter);
        }

        render() {
            return (
                <div>
                    <div>
                        <WrappedTable
                            onSortedChange={(newSorted, column, shiftKey) => {
                                this.changeResults(false, {sort: this.getParsedSortFromTable(newSorted)}, newSorted);
                            }}
                            onPagination={({page}) => {
                                this.props.links && this.props.fetchData(this.props.links[page]);
                            }}
                            onChangePageSize={({target}) => {
                                this.changePageSize(target.value);
                            }}
                            {...this.props}
                        />
                    </div>
                </div>
            );
        }
    };
}
