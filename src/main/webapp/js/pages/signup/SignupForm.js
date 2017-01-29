import React from 'react';

import TextFieldGroup from '../../components/common/TextFieldGroup';
import validateInput from '../../common/validations/signup-validation'

class SignupForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email:'',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            serverSideError: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userSignupRequest(this.state).then(
                // TODO: add success function
                () => {},
                ({ response }) => {
                    if (response.errors) {
                        this.setState({errors: response.errors})
                    } else {
                        this.setState({serverSideError: response.statusText})
                    }

                    this.setState({isLoading: false});
                }
            );
        }
    }

    render() {
        const { errors } = this.state;
        const { serverSideError } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                {serverSideError && <div className="alert alert-danger" role="alert">{serverSideError}</div>}
                <h1>Join us!</h1>
                <TextFieldGroup
                    name="username"
                    label="User Name"
                    error={errors.username}
                    onChange={this.onChange}
                    value={this.state.username}
                />

                <TextFieldGroup
                    name="email"
                    label="Email"
                    type="email"
                    error={errors.email}
                    onChange={this.onChange}
                    value={this.state.email}
                />

                <TextFieldGroup
                    name="password"
                    label="Password"
                    type="password"
                    error={errors.password}
                    onChange={this.onChange}
                    value={this.state.password}
                />

                <TextFieldGroup
                    name="passwordConfirmation"
                    label="Password Confirmation"
                    type="password"
                    error={errors.passwordConfirmation}
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                />

                {/*TODO: make button a separate component with loading indicator*/}
                <div className="form-group">
                    <button className="btn btn-primary" disabled={this.state.isLoading}>
                        Sign Up
                    </button>
                </div>
            </form>
        )
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

export default SignupForm;
