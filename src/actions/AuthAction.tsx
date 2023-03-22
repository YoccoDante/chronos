import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_MESSAGE,
} from "./Types";

import AuthService from "../services/auth/AuthService";

type LoginAction = {
    username: string,
    password: string
}

export const Login = ({ username, password }: LoginAction) => (dispatch: any) => {
    return AuthService.login({ username, password }).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};