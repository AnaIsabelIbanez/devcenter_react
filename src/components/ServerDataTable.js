import React, {Component} from 'react';
import queryString from 'query-string';
import {isEmpty, isEqual} from 'lodash';

import {removeKeys} from '../utils/utilities';

export default function withServerSideData(WrappedTable) {
    return class ServerDataTable extends Component {

        constructor(props) {
            super(props);
            if (this.props.dataInitialized === true) {
                this.props.fetchData(this.props.baseUri);
            }
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
            const nextFiltering = nextProps.filtering;
            if (!isEqual(nextFiltering, this.props.filtering) && nextProps.filtering === true) {
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
            const selfLink = this.props.links && this.props.links.self ? this.props.links.self : '';
            const currentQueryObject = queryString.parse(selfLink.substr(selfLink.indexOf('?') + 1));
            let queryObj = isFilter ? removeKeys(currentQueryObject, /^filter\[/) : currentQueryObject;
            if (!isEmpty(newParameter)) {
                queryObj = {...queryObj, ...newParameter};
            }
            const query = queryString.stringify(queryObj);
            this.props.fetchData(`${this.props.baseUri}?${query}`, currentSort);
        }

        changePageSize = (valuePageSize) => {
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
                            onSortedChange={(newSorted) => {
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
