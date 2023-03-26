import {
    ACCOUNT_LOGIN,
    PASSWORD_LOGIN,
    ACCOUNT_REGISTER,
    PASSWORD_REGISTER,
    EMAIL_REGISTER,
    PHONE_NUMBER_REGISTER,
} from './constant';

export const accountLogin = (payload) => {
    return {
        type: ACCOUNT_LOGIN,
        payload,
    };
};

export const passwordLogin = (payload) => {
    return {
        type: PASSWORD_LOGIN,
        payload,
    };
};

export const accoutRegister = (payload) => {
    return {
        type: ACCOUNT_REGISTER,
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
