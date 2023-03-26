import {
    ACCOUNT_LOGIN,
    PASSWORD_LOGIN,
    ACCOUNT_REGISTER,
    PASSWORD_REGISTER,
    EMAIL_REGISTER,
    PHONE_NUMBER_REGISTER,
} from './constant';

// initState
export const initStateLogin = {
    messageAccount: '',
    messagePassword: '',
    values: {},
};

export const initStateRegister = {
    messageAccount: '',
    messagePassword: '',
    messageEmail: '',
    messagePhoneNumber: '',
    values: {},
};

// reducer
const reducer = (state, action) => {
    let newState;

    switch (action.type) {
        case ACCOUNT_LOGIN:
            if (action.payload.trim() === '') {
                let { account, ...newValues } = state.values;
                newState = {
                    ...state,
                    messageAccount: 'Bạn cần nhập số điện thoại hoặc email',
                    values: newValues,
                };
            } else {
                newState = {
                    ...state,
                    messageAccount: '',
                    values: {
                        ...state.values,
                        account: action.payload,
                    },
                };
            }
            return newState;
        case PASSWORD_LOGIN:
            if (action.payload.trim() === '') {
                let { password, ...newValues } = state.values;
                newState = {
                    ...state,
                    messagePassword: 'Bạn cần nhập mật khẩu',
                    values: newValues,
                };
            } else {
                newState = {
                    ...state,
                    messagePassword: '',
                    values: {
                        ...state.values,
                        password: action.payload,
                    },
                };
            }
            return newState;
        case ACCOUNT_REGISTER:
            if (action.payload.trim() === '') {
                let { account, ...newValues } = state.values;
                newState = {
                    ...state,
                    messageAccount: 'Bạn cần nhập tên người dùng',
                    values: newValues,
                };
            } else {
                newState = {
                    ...state,
                    messageAccount: '',
                    values: {
                        ...state.values,
                        account: action.payload,
                    },
                };
            }
            return newState;

        case PASSWORD_REGISTER:
            if (action.payload.trim() === '') {
                let { password, ...newValues } = state.values;
                newState = {
                    ...state,
                    messagePassword: 'Bạn cần nhập mật khẩu',
                    values: newValues,
                };
            } else {
                newState = {
                    ...state,
                    messagePassword: '',
                    values: {
                        ...state.values,
                        password: action.payload,
                    },
                };
            }
            return newState;

        case EMAIL_REGISTER:
            let regular_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (!regular_email.test(action.payload.trim())) {
                let { email, ...newValues } = state.values;
                newState = {
                    ...state,
                    messageEmail: 'Email chưa đúng',
                    values: newValues,
                };
            } else {
                newState = {
                    ...state,
                    messageEmail: '',
                    values: {
                        ...state.values,
                        email: action.payload,
                    },
                };
            }
            return newState;

        case PHONE_NUMBER_REGISTER:
            /* Phone Test */
            let { phone_number, ...newValues } = state.values;
            let regular_phone_number = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (!regular_phone_number.test(action.payload.trim()) || action.payload.trim().length !== 10) {
                newState = {
                    ...state,
                    messagePhoneNumber: 'Số điện thoại chưa đúng',
                    values: newValues,
                };
            } else {
                newState = {
                    ...state,
                    messagePhoneNumber: '',
                    values: {
                        ...state.values,
                        phone_number: action.payload,
                    },
                };
            }
            return newState;

        default:
            throw new Error('Invalid action');
    }
};

export default reducer;
