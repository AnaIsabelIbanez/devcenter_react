import React from 'react';
import {ControlLabel, FormGroup, Col, FormControl, Grid, Row, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {getLiteral} from '../utils/utilities';


const myFilterButtons = ({className, onClearFields, ...props}) => (
    <Grid className={className}>
        <Row>
            <Col md={5} mdOffset={7}>
                <div className="pull-right">
                    <Col md={12}>
                        <Button type="submit">{getLiteral('common.filter')}</Button>
                        &nbsp;
                        <Button onClick={() => onClearFields()}>
                            {getLiteral('common.clear')}
                        </Button>
                    </Col>
                </div>
            </Col>
        </Row>
    </Grid>
);

export default styled(myFilterButtons)`
    margin: 20px 0;  
`;
