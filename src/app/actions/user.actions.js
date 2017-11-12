import { userConstants } from '../constants';
import { userServices } from '../services';
import { alertActions } from './';


function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userServices.login(username, password)
            then(
                user => {
                  dispatch(success(user));
                  history.push('/');
                },
                error => {
                  dispatch(failure(error));
                  dispatch(alertActions.error(error));
            });
    };


    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(message) {
        return { type: userConstants.LOGIN_FAILURE, message };
    }
}

export const userActions = {
    login
};