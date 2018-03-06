import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    text-align: center;
    font-size: 1.7em;
    font-weight: bold;
    padding: 1em;
    margin-bottom: 1.5em; 
    background: #323232;
    color: white;
`;

const Header = () => (
    <StyledHeader>
        React Components
    </StyledHeader>
);

export default Header;
