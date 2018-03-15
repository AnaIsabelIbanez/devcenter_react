import React from 'react';

import { isNotEmptyString } from '../utils/validators.js';

export default class ValidatorForm extends React.Component {

    state = {
        valid: true
    };

    validators = {
        required: isNotEmptyString
    }

    isValidValue(value, validations) {
        let valid = true;
        validations && validations.forEach((validation) => {
            if (!this.validators[validation](value)) {
                valid = false;
            }
        });
        return valid;
    };

    setValidationField(value, fieldName, touchedName, validations) {
        const valid = this.isValidValue(value, validations);
        this.setState({ validators: {
            ...this.state.validators,
            [fieldName]: valid}
        });
        this.setState({[touchedName]: true});
    };

    validateForm() {
        let valid = true;
        Object.keys(this.state.validators).forEach((validationState) => {
            if (this.state.validators[validationState] === false) {
                valid = false;
            }
        });
        return valid;
    };

}
