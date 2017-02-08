import React from 'react';
import update from 'react-addons-update';

import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../common/validations/signup-validation'

class SignupForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                login: '',
                email:'',
                firstName: '',
                lastName: '',
                password: '',
                passwordConfirmation: '',
                langKey: 'en'
            },
            errors: {},
            isLoading: false,
            serverSideError: '',
            serverSideSuccess: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.goHome = this.goHome.bind(this);
    }

    onChange(event) {
        let newState = update(this.state, {
            userData: {
                [event.target.name]: {$set: event.target.value}
            }
        });

        this.setState(newState);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state.userData);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userSignupRequest(this.state.userData).then(
                // TODO: add success function
                () => {
                    this.setState({serverSideError: '', isLoading: false});
                    this.setState({serverSideSuccess: 'Success!'});
                    this.context.router.push('/signin');
                },
                ({ response }) => {
                    this.setState({serverSideSuccess: ''});

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

    goHome() {
        this.context.router.push('/');
    }

    render() {
        const { errors } = this.state;
        const { serverSideError } = this.state;
        const { serverSideSuccess } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                {serverSideError && <div className="alert alert-danger" role="alert">{serverSideError}</div>}
                {serverSideSuccess && <div className="alert alert-success" role="alert">{serverSideSuccess}</div>}
                <h1>Join us!</h1>
                <TextFieldGroup
                    name="login"
                    label="Login"
                    error={errors.login}
                    onChange={this.onChange}
                    value={this.state.userData.login}
                />

                <TextFieldGroup
                    name="email"
                    label="Email"
                    type="email"
                    error={errors.email}
                    onChange={this.onChange}
                    value={this.state.userData.email}
                />

                <TextFieldGroup
                    name="firstName"
                    label="First Name"
                    error={errors.firstName}
                    onChange={this.onChange}
                    value={this.state.userData.firstName}
                />

                <TextFieldGroup
                    name="lastName"
                    label="Last Name"
                    error={errors.lastName}
                    onChange={this.onChange}
                    value={this.state.userData.lastName}
                />

                <TextFieldGroup
                    name="password"
                    label="Password"
                    type="password"
                    error={errors.password}
                    onChange={this.onChange}
                    value={this.state.userData.password}
                />

                <TextFieldGroup
                    name="passwordConfirmation"
                    label="Password Confirmation"
                    type="password"
                    error={errors.passwordConfirmation}
                    onChange={this.onChange}
                    value={this.state.userData.passwordConfirmation}
                />

                {/*TODO: make button a separate component with loading indicator*/}
                <div className="form-group">
                    <button className="btn btn-primary" disabled={this.state.isLoading}>
                        Sign Up
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.goHome}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default SignupForm;
