import axios from 'axios';

export function userSigninRequest(credentials) {
    return dispatch => {
        var data = 'login=' + encodeURIComponent(credentials.login) +
            '&password=' + encodeURIComponent(credentials.password) +
            '&remember-me=' + credentials.rememberMe + '&submit=Login';
        return axios.post('/api/authentication', data);
    }
}
