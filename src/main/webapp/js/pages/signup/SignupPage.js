import React from 'react';
import SignupForm from '../../components/signup/SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

const SignupPage = ({ userSignupRequest }) => {
    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                {/*TODO: remove router from here and make it a redux state change*/}
                <SignupForm userSignupRequest={userSignupRequest}/>
            </div>
        </div>
    );
};

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest })(SignupPage);
