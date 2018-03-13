import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';
import Select from '../../components/Select';


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
            return <select
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
        accesor: 'quality_subreason',
        Cell: row => {
            return (<Select
                value={'uno'}
                onChange={({target}) => console.log(target.value)}
                options={[{id: 'uno', text: 'uno'}, {id: 'dos', text: 'dos'}]}
            />);
        }
    },
    {
        Header: 'Submotivo Producción',
        accessor: 'production_subreason'
    }
];
