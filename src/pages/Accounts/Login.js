import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import Button from '~/components/Button';
import styles from './Accounts.module.scss';
import Footer from '~/pages/components/Footer';
import logoLogin from '~/assets/images/logo-login.png';
import routes from '~/config';
import reducer, { initStateLogin } from './validateAccount/reducer';
import { passwordLogin, usernameLogin } from './validateAccount/actions';

const cx = classNames.bind(styles);

function Login({ setToken }) {
    const [disabled, setDisabled] = useState(true);
    const [state, dispatch] = useReducer(reducer, initStateLogin);
    const { messageUsername, messagePassword, values } = state;

    useEffect(() => {
        Object.keys(values).length === 2 ? setDisabled(false) : setDisabled(true);
    }, [values]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            await axios({
                method: 'POST',
                url: 'http://localhost:4000/accounts/login',
                data: {
                    username: values.username,
                    password: values.password,
                },
            }).then((data) => {
                console.log(data.data);
                if (data.data.statusCode === 200) {
                    setToken(data.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <div className={cx('image')}></div>
                <div className={cx('container-form')}>
                    <div className={cx('form-login')}>
                        <div className={cx('logo')}>
                            <img className={cx('logo-login')} src={logoLogin} alt="logo-login" />
                        </div>

                        <form className={cx('form')} onSubmit={handleSubmit}>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('input')}
                                    type="text"
                                    name="username"
                                    placeholder="Số điện thoại, tên người dùng hoặc email"
                                    onBlur={(e) => dispatch(usernameLogin(e.target.value))}
                                    onInput={(e) => dispatch(usernameLogin(e.target.value))}
                                />
                                <small className={cx('form-message')}>{messageUsername}</small>
                            </div>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('input')}
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    onBlur={(e) => dispatch(passwordLogin(e.target.value))}
                                    onInput={(e) => dispatch(passwordLogin(e.target.value))}
                                />
                                <small className={cx('form-message')}>{messagePassword}</small>
                            </div>
                            <Button className={cx('button')} primary disabled={disabled}>
                                Đăng nhập
                            </Button>
                        </form>

                        <div className={cx('middle')}>
                            <span className={cx('line')}></span>
                            <span className={cx('text--middle')}>hoặc</span>
                            <span className={cx('line')}></span>
                        </div>

                        <div className={cx('other')}>
                            <Button
                                className={cx('button--facebook')}
                                text
                                iconLeft={<FontAwesomeIcon icon={faSquareFacebook} />}
                            >
                                Đăng nhập bằng Facebook
                            </Button>
                            <Button to="/accounts/password/reset" className={cx('button--forgot')} text>
                                Quên mật khẩu?
                            </Button>
                        </div>
                    </div>
                    <div className={cx('redirect')}>
                        <p className={cx('redirect__text')}>
                            Bạn chưa có tài khoản ư?
                            <Link to={routes.register} className={cx('redirect__link')}>
                                Đăng ký
                            </Link>
                        </p>
                    </div>
                    <div className={cx('connect-app')}>
                        <p>Tải ứng dụng.</p>
                        <div className={cx('app')}>
                            <Link className={cx('app__link')}>
                                <img
                                    src="https://static.cdninstagram.com/rsrc.php/v3/y2/r/yKDBMIG1og3.png"
                                    alt="Tải xuống từ Google Play"
                                />
                            </Link>
                            <Link className={cx('app__link')}>
                                <img
                                    src="https://static.cdninstagram.com/rsrc.php/v3/ys/r/0evRgTlaFrn.png"
                                    alt="Tải xuống từ Microsoft"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.node.isRequired,
};

export default Login;
