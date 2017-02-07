import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    const requiredField = ' is required';

    if (Validator.isEmpty(data.login)) {
        errors.login = requiredField;
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = requiredField;
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
