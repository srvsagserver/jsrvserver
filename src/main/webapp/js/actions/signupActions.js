import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        // TODO: change post url
        return axios.post('/api/users', userData);
    }
}
