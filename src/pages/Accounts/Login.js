import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import Button from '~/components/Button';
import styles from './Accounts.module.scss';
import Footer from '~/pages/components/Footer';
import logoLogin from '~/assets/images/logo-login.png';
import routes from '~/config';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <div className={cx('image')}></div>
                <div className={cx('container-form')}>
                    <div className={cx('form-login')}>
                        <div className={cx('logo')}>
                            <img className={cx('logo-login')} src={logoLogin} alt="logo-login" />
                        </div>
                        <form className={cx('form')}>
                            <div className={cx('form-group')}>
                                <input
                                    name="account"
                                    placeholder="Số điện thoại, tên người dùng hoặc email"
                                    className={cx('input')}
                                />
                                {/* <small className={cx('form-message')}>Bạn chưa nhập mật khẩu</small> */}
                            </div>
                            <div className={cx('form-group')}>
                                <input name="password" placeholder="Mật khẩu" className={cx('input')} />
                                {/* <small className={cx('form-message')}>Bạn chưa nhập mật khẩu</small> */}
                            </div>
                            <Button className={cx('button')} primary disabled>
                                Đăng nhập
                            </Button>

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
                        </form>
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

export default Login;
