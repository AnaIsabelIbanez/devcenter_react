import React from 'react';
import {Panel} from 'react-bootstrap';
import styled from 'styled-components';

const mySmallPanel = ({className, children, title}) => {
    return (
        <Panel className={className}>
            <Panel.Heading>{title}</Panel.Heading>
            <Panel.Body>
                {children}
            </Panel.Body>
        </Panel>
    );
};

export default styled(mySmallPanel)`
    .panel-heading {
        padding: 2px 5px;
    }
    .panel-body {
            padding: 5px;
    }
`;
