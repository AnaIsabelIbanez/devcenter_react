import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import { getLiteral } from '../utils/utilities';

const Header = ({history, changeActiveTab, activeTab}) => (
    history.location.pathname.includes('/barcode/') ?
        <span></span> :
        (<Nav bsStyle="tabs" activeKey={activeTab} onSelect={tab => {
            history.push(`/${tab}`);
            changeActiveTab(tab);
        }}>
            <NavItem eventKey="product">
                {getLiteral('product.products')}
            </NavItem>
            <NavItem eventKey="return">
                {getLiteral('return.returns')}
            </NavItem>
            <NavItem eventKey="inbound">
                {getLiteral('inboundQuality.inboundQuality')}
            </NavItem>
        </Nav>)
);

export default Header;
