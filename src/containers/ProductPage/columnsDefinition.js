import React from 'react';

import {getLiteral} from '../../utils/utilities';

export default [
    {
        Header: getLiteral('product.sku'),
        accessor: 'sku'
    },
    {
        Header: getLiteral('product.ean'),
        accessor: 'ean'
    },
    {
        Header: getLiteral('product.brand'),
        accessor: 'brand'
    },
    {
        Header: getLiteral('product.refCom'),
        accessor: 'ref_com'
    },
    {
        Header: getLiteral('product.refLog'),
        accessor: 'ref_logistic'
    },
    {
        Header: getLiteral('product.shortDescription'),
        accessor: 'short_description'
    },
    {
        Header: getLiteral('product.category'),
        accessor: 'category'
    },
    {
        Header: getLiteral('product.size'),
        accessor: 'size'
    },
    {
        Header: getLiteral('product.color'),
        accessor: 'color'
    },
    {
        Header: getLiteral('common.campaingId'),
        accessor: 'campaign_id'
    },
    {
        Header: getLiteral('common.compaignName'),
        accessor: 'campaign_name'
    }
];
