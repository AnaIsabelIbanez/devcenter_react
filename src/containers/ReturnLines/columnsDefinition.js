import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';


export default [
    {
        Header: 'Número de devolución',
        accessor: 'return_id'
    },
    {
        Header: 'Número de pedido',
        accessor: 'order_id'
    },
    {
        Header: 'Identificador campaña',
        accessor: 'campaign_id'
    },
    {
        Header: 'Campaign name',
        accessor: 'campaign_name'
    },
    {
        Header: 'Almacén de destino',
        accessor: 'warehouse_name'
    },
    {
        Header: 'Devolución tratada por el Almacén',
        Cell: row => {
            return <Checkbox checked={row.original.warehouse_date} readOnly/>;
        },
        sortable: false
    },
    {
        Header: 'Fecha recepción en el Almacén',
        accessor: 'warehouse_date'
    },
    {
        Header: 'Deolución tratada por Calidad',
        Cell: row => {
            return <Checkbox checked={row.original.quality_date} readOnly/>;
        },
        sortable: false
    },
    {
        Header: 'Fecha de tratamiento por Calidad',
        accessor: 'quality_date'
    },
    {
        Header: 'Devolución tratada por Producción',
        Cell: row => {
            return <Checkbox checked={row.original.production_date} readOnly/>;
        },
        sortable: false
    },
    {
        Header: 'Fecha de tratamiento por Producción',
        accessor: 'production_date'
    }
];
