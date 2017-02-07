import axios from 'axios';

export function userSigninRequest(userData) {
    return dispatch => {
        // TODO: change url
        return axios.post('/api/signin', userData);
    }
}
