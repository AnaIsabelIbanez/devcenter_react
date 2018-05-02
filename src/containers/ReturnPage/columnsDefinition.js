import React from 'react';

import {formatIsoString, getLiteral} from '../../utils/utilities';

export default [
    {
        Header: getLiteral('return.returnNum'),
        accessor: 'return_id'
    },
    {
        Header: getLiteral('return.orderNum'),
        accessor: 'order_id'
    },
    {
        Header: getLiteral('common.campaingId'),
        accessor: 'campaign_id'
    },
    {
        Header: getLiteral('common.compaignName'),
        accessor: 'campaign_name'
    },
    {
        Header: getLiteral('return.destinationWarehouse'),
        accessor: 'warehouse_name'
    },
    {
        Header: getLiteral('return.managedWarehouse'),
        Cell: row => {
            return <input type="checkbox" checked={row.original.warehouse_date} disabled readOnly/>;
        },
        sortable: false
    },
    {
        Header: getLiteral('return.receivedDateWarehouse'),
        accessor: 'warehouse_date',
        Cell: row => formatIsoString(row.value)
    },
    {
        Header: getLiteral('return.managedQuality'),
        Cell: row => {
            return <input type="checkbox" checked={row.original.warehouse_date} disabled readOnly/>;
        },
        sortable: false
    },
    {
        Header: getLiteral('return.qualityDate'),
        accessor: 'quality_date',
        Cell: row => formatIsoString(row.value)
    },
    {
        Header: getLiteral('return.managedProduction'),
        Cell: row => {
            return <input type="checkbox" checked={!row.original.warehouse_date} disabled readOnly/>;
        },
        sortable: false
    },
    {
        Header: getLiteral('return.productionDate'),
        accessor: 'production_date',
        Cell: row => formatIsoString(row.value)
    }
];
