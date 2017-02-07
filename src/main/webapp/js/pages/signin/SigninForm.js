import React from 'react';
import update from 'react-addons-update';

import TextFieldGroup from '../../components/common/TextFieldGroup';
import validateInput from '../../common/validations/signin-validation'

class SigninForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                login: '',
                password: '',
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
            this.props.userSigninRequest(this.state.userData).then(
                // TODO: add success function
                () => {
                    this.setState({serverSideError: '', isLoading: false});
                    this.setState({serverSideSuccess: 'Success!'});
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
                <h1>Sign in</h1>
                <TextFieldGroup
                    name="login"
                    label="Login"
                    error={errors.login}
                    onChange={this.onChange}
                    value={this.state.userData.login}
                />

                <TextFieldGroup
                    name="password"
                    label="Password"
                    type="password"
                    error={errors.password}
                    onChange={this.onChange}
                    value={this.state.userData.password}
                />

                {/*TODO: make button a separate component with loading indicator*/}
                <div className="form-group">
                    <button className="btn btn-primary" disabled={this.state.isLoading}>
                        Sign In
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.goHome}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}

SigninForm.propTypes = {
    userSigninRequest: React.PropTypes.func.isRequired
};

SigninForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SigninForm;
