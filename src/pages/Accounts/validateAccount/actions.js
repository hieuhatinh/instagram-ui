import {
    USERNAME_LOGIN,
    PASSWORD_LOGIN,
    USERNAME_REGISTER,
    PASSWORD_REGISTER,
    EMAIL_REGISTER,
    PHONE_NUMBER_REGISTER,
    FULL_NAME_REGISTER,
} from './constant';

export const usernameLogin = (payload) => {
    return {
        type: USERNAME_LOGIN,
        payload,
    };
};

export const passwordLogin = (payload) => {
    return {
        type: PASSWORD_LOGIN,
        payload,
    };
};

export const usernameRegister = (payload) => {
    return {
        type: USERNAME_REGISTER,
        payload,
    };
};

export const passwordRegister = (payload) => {
    return {
        type: PASSWORD_REGISTER,
        payload,
    };
};

export const emailRegister = (payload) => {
    return {
        type: EMAIL_REGISTER,
        payload,
    };
};

export const phoneNumberRegister = (payload) => {
    return {
        type: PHONE_NUMBER_REGISTER,
        payload,
    };
};

export const fullNameRegister = (payload) => {
    return {
        type: FULL_NAME_REGISTER,
        payload,
    };
};
