import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';


export default (changeSubreason, subreasons) => [
    {
        Header: 'SKU',
        accessor: 'sku'
    },
    {
        Header: 'Ref. Comercial',
        accessor: 'ref_com'
    },
    {
        Header: 'EAN',
        accessor: 'ean'
    },
    {
        Header: 'Motivo devolución',
        accessor: 'member_reason'
    },
    {
        Header: 'Observaciones socio',
        accessor: 'member_observations'
    },
    {
        Header: 'Producto realmente recepcionado',
        accesor: 'sku_real_product'
    },
    {
        Header: 'Motivo almacén',
        accessor: 'warehouse_reason'
    },
    {
        Header: 'Submotivo almacén',
        accessor: 'warehouse_subreason',
        Cell: row => {
            console.log('submotivo value', row.value);
            return <select
                // value={row.value}
                value="dos"
                onChange={({target}) => changeSubreason(target.value)}
            >   {subreasons.map((subreason, index) => {
                    return (<option key={index} value={subreason.id}>{subreason.text}</option>);
                })}</select>;
        },
        sortable: false
    },
    {
        Header: 'Submotivo calidad',
        accesor: 'quality_subreason'
    },
    {
        Header: 'Submotivo Producción',
        accessor: 'production_subreason'
    }
];
