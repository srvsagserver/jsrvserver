import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    const requiredField = 'This field is required';

    if (Validator.isEmpty(data.username)) {
        errors.username = requiredField;
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = requiredField;
    }
    if (!Validator.isEmpty(data.email) && !Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = requiredField;
    }
    if (Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = requiredField;
    }
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
