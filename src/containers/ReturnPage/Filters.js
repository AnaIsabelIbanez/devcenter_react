import React, {Component} from 'react';
import styled from 'styled-components';
import {Form, FormGroup, Col, Checkbox, Button, ControlLabel, FormControl} from 'react-bootstrap';

import CustomGrid from '../../components/CustomGrid';

const StyledGrid = styled(CustomGrid)`
    && {
        padding: 20px;
    }
`;

export default class ReturnFilters extends Component {

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    render() {
        const {
            fields,
            changeField,
            launchFilter,
            clearFields
        } = this.props;
        return (
            <StyledGrid container>
                <Form horizontal onSubmit={(e) => {e.preventDefault(); launchFilter(fields);}}>
                    <FormGroup controlId="formValidationError1" validationState="error">
                        <ControlLabel>Input with error</ControlLabel>
                        <FormControl type="text" />
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail" validationState="error">
                        <ControlLabel>Número de devolución</ControlLabel>
                        <FormControl
                            type="text"
                            value={fields.return_id}
                            onChange={({target}) => changeField({return_id: target.value})}
                        />
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPass">
                        <ControlLabel>Número de pedido</ControlLabel>
                        <FormControl type="text" value={fields.order_id} />
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={4} sm={10}>
                            <Button
                                onClick={clearFields}
                            >
                                Clear
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </StyledGrid>
        );
    }
};
