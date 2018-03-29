import React from 'react';

import Select from '../../components/Select';
import {ROL_WAREHOUSE, ROL_PRODUCTION, ROL_QUALITY} from '../App/constants';
import {getLiteral} from '../../utils/utilities';

export default (rol, changeAttribute, showDetail, reasons, subreasons) => {
    const SelectCell = ({row, rolName, attributeName, options}) => {
        return rol === rolName
            ? <Select
                value={row.value}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
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
            accessor: 'sku',
            Cell: row => <span onClick={(e) => {
                e.stopPropagation();
                showDetail(row.value);
            }}>{row.original.ean}</span>
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

// function a(r, q, t) {
//     var s = parseFloat(r);
//     if (isNaN(s)) {
//         return q;
//     }
//     if (s < q) {
//         return q;
//     }
//     if (s > t) {
//         return t;
//     }
//     return s;
// }
//
// function j(w, O, H, B, I) {
//     O = a(O, 0, 100) / 100;
//     H = a(H, 0, 100) / 100;
//     B = a(B, 0, 100) / 100;
//     I = a(I, 0, 100) / 100;
//     var G, K, Q, D;
//     var z = O * H;
//     var q = H - z;
//     var M = O - z;
//     var P = 1 - H - M;
//     var J = P * B;
//     var L = P - J;
//     var A = q * B;
//     var N = q - A;
//     var s = M * B;
//     var F = M - s;
//     var v = z * B;
//     var t = z - v;
//     D = L * I;
//     G = K = Q = L - D;
//     G += 0.1373 * D;
//     K += 0.1216 * D;
//     Q += 0.1255 * D;
//     D = J * I;
//     G += 0.1098 * D;
//     K += 0.102 * D;
//     D = J - D;
//     G += D;
//     K += 0.949 * D;
//     D = N * I;
//     G += 0.1412 * D;
//     D = N - D;
//     G += 0.9255 * D;
//     Q += 0.549 * D;
//     D = A * I;
//     G += 0.1333 * D;
//     D = A - D;
//     G += 0.9294 * D;
//     K += 0.1098 * D;
//     Q += 0.1412 * D;
//     D = F * I;
//     K += 0.0588 * D;
//     Q += 0.1412 * D;
//     D = F - D;
//     K += 0.6784 * D;
//     Q += 0.9373 * D;
//     D = s * I;
//     K += 0.0745 * D;
//     D = s - D;
//     K += 0.651 * D;
//     Q += 0.3137 * D;
//     D = t * I;
//     Q += 0.0078 * D;
//     D = t - D;
//     G += 0.1804 * D;
//     K += 0.1922 * D;
//     Q += 0.5725 * D;
//     D = v * (1 - I);
//     G += 0.2118 * D;
//     K += 0.2119 * D;
//     Q += 0.2235 * D;
//     G = Math.round(a(G, 0, 1) * 255);
//     K = Math.round(a(K, 0, 1) * 255);
//     Q = Math.round(a(Q, 0, 1) * 255);
//     var u = G.toString(16).split('.')[0];
//     var C = K.toString(16).split('.')[0];
//     var E = Q.toString(16).split('.')[0];
//     if (u.length === 1) {
//         u = '0' + u;
//     }
//     if (C.length === 1) {
//         C = '0' + C;
//     }
//     if (E.length === 1) {
//         E = '0' + E;
//     }
//     w.css({'background-color': '#' + u + C + E}).show();
// }
//
// var e = $('#vbarclrmode');
// var d = $('#vbarclrc');
// var m = $('#vbarclrm');
// var g = $('#vbarclry');
// var o = $('#vbarclrk');
// var i = $('#vbarclrv');
// var k = $('#vbkgclrmode');
// var c = $('#vbkgclrc');
// var l = $('#vbkgclrm');
// var f = $('#vbkgclry');
// var n = $('#vbkgclrk');
// var h = $('#vbkgclrv');
// e.on('change', function () {
//     if (e.val() === '1') {
//         $('.paramgroup.vbarclr').addClass('active');
//         j(i, d.val(), m.val(), g.val(), o.val());
//     } else {
//         $('.paramgroup.vbarclr').removeClass('active');
//         j(i, 0, 0, 0, 100);
//     }
// });
// k.on('change', function () {
//     if (k.val() === '1') {
//         $('.paramgroup.vbkgclr').addClass('active');
//         j(h, c.val(), l.val(), f.val(), n.val());
//     } else {
//         if (k.val() === '2') {
//             $('.paramgroup.vbkgclr').removeClass('active');
//             h.hide();
//         } else {
//             $('.paramgroup.vbkgclr').removeClass('active');
//             j(h, 0, 0, 0, 0);
//         }
//     }
// });
//
