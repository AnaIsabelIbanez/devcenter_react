import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl, Grid, Row, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {getLiteral} from '../utils/utilities';


const myFilterButtons = ({className, onClearFields, ...props}) => (
    <div className={className}>
        <Col md={12}>
            <Button type="submit">{getLiteral('common.filter')}</Button>
            &nbsp;
            <Button onClick={() => onClearFields()}>
                {getLiteral('common.clear')}
            </Button>
        </Col>
    </div>
);

export default styled(myFilterButtons)`
    margin: 20px 0;  
`;
