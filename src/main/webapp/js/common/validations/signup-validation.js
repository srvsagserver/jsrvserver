import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    const requiredField = ' is required';

    if (Validator.isEmpty(data.login)) {
        errors.login = requiredField;
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = requiredField;
    }
    if (!Validator.isEmpty(data.email) && !Validator.isEmail(data.email)) {
        errors.email = ' is invalid';
    }
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = requiredField;
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = requiredField;
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = requiredField;
    }
    if (Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = requiredField;
    }
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = ' must match provided password';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
