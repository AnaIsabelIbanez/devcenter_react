import React from 'react';

import Select from '../../components/Select';
import {ROL_WAREHOUSE, ROL_PRODUCTION, ROL_QUALITY} from '../App/constants';
import {getLiteral} from '../../utils/utilities';

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
            : <span>{row.original[attributeName]}</span>;
    };

    return [
        {
            Header: getLiteral('product.sku'),
            accessor: 'sku'
        },
        {
            Header: getLiteral('product.refCom'),
            accessor: 'ref_com'
        },
        {
            Header: getLiteral('product.ean'),
            accessor: 'ean'
        },
        {
            Header: getLiteral('return.returnReason'),
            accessor: 'member_reason'
        },
        {
            Header: getLiteral('return.partnerObservations'),
            accessor: 'member_observations'
        },
        {
            Header: getLiteral('product.reallyReceived'),
            accesor: 'sku_real_product'
        },
        {
            Header: getLiteral('return.warehouseReason'),
            accessor: 'warehouse_reason',
            Cell: row => <SelectCell
                row={row}
                rolName={ROL_WAREHOUSE}
                attributeName="warehouse_reason"
                options={reasons}
            />
        },
        {
            Header: getLiteral('return.warehouseSubreason'),
            accessor: 'warehouse_subreason',
            Cell: row => <SelectCell
                row={row}
                rolName={ROL_WAREHOUSE}
                attributeName="warehouse_subreason"
                options={subreasons}
            />
        },
        {
            Header: getLiteral('return.qualitySubreason'),
            accesor: 'quality_subreason',
            Cell: row => <SelectCell
                row={row}
                rolName={ROL_QUALITY}
                attributeName="quality_subreason"
                options={subreasons}
            />
        },
        {
            Header: getLiteral('return.productionSubreason'),
            accessor: 'production_subreason',
            Cell: row => <SelectCell
                row={row}
                rolName={ROL_PRODUCTION}
                attributeName="production_subreason"
                options={subreasons}
            />
        }
    ];
};
