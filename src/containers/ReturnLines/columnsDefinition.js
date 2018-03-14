import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';
import Select from '../../components/Select';

export default (rol, changeAttribute, reasons, subreasons) => {
    const SelectCell = ({row, rolName, attributeName, options}) => {
        return rol === rolName
            ? <Select
                value={row.value}
                onChange={(value) => {
                    changeAttribute({[`${attributeName}`]: value}, row.original);
                }}
                options={options}
            />
            : <span>{row.value}</span>;
    };

    return [
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
            accessor: 'warehouse_reason',
            Cell: row => <SelectCell
                row={row}
                rolName="warehouse"
                attributeName="warehouse_reason"
                options={reasons}
            />
        },
        {
            Header: 'Submotivo almacén',
            accessor: 'warehouse_subreason',
            Cell: row => <SelectCell
                row={row}
                rolName="warehouse"
                attributeName="warehouse_subreason"
                options={subreasons}
            />
        },
        {
            Header: 'Submotivo calidad',
            accesor: 'quality_subreason',
            Cell: row => <SelectCell
                row={row}
                rolName="quality"
                attributeName="quality_subreason"
                options={subreasons}
            />
        },
        {
            Header: 'Submotivo Producción',
            accessor: 'production_subreason',
            Cell: row => <SelectCell
                row={row}
                rolName="production"
                attributeName="production_subreason"
                options={subreasons}
            />
        }
    ];
};
