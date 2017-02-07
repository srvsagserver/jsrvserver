import React from 'react';
import SigninForm from './SigninForm';
import { connect } from 'react-redux';
import { userSigninRequest } from '../../actions/signinActions';

class SigninPage extends  React.Component {
    render() {
        const { userSigninRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    {/*TODO: remove router from here and make it a redux state change*/}
                    <SigninForm userSigninRequest={userSigninRequest}/>
                </div>
            </div>
        )
    }
}

SigninPage.propTypes = {
    userSigninRequest: React.PropTypes.func.isRequired
};

export default connect(null, { userSigninRequest })(SigninPage);
