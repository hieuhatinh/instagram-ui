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

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <div className={cx('container-form')}>
                    <div className={cx('form-login')}>
                        <div className={cx('logo')}>
                            <img className={cx('logo-login')} src={logoLogin} alt="logo-login" />
                        </div>

                        <div className={cx('other')}>
                            <p className={cx('other-title')}>Đăng ký để xem ảnh và video từ bạn bè.</p>
                            <Button
                                style={{ color: '#fff' }}
                                className={cx('button--facebook')}
                                primary
                                iconLeft={<FontAwesomeIcon icon={faSquareFacebook} />}
                            >
                                Đăng nhập bằng Facebook
                            </Button>
                        </div>

                        <div className={cx('middle', 'my-40')}>
                            <span className={cx('line')}></span>
                            <span className={cx('text--middle')}>hoặc</span>
                            <span className={cx('line')}></span>
                        </div>

                        <form className={cx('form')}>
                            <div className={cx('form-group')}>
                                <input name="account" placeholder="Số điện thoại hoặc email" className={cx('input')} />
                                {/* <small className={cx('form-message')}>Bạn chưa nhập mật khẩu</small> */}
                            </div>
                            <div className={cx('form-group')}>
                                <input name="password" placeholder="Tên đầy dủ" className={cx('input')} />
                                {/* <small className={cx('form-message')}>Bạn chưa nhập mật khẩu</small> */}
                            </div>
                            <div className={cx('form-group')}>
                                <input name="password" placeholder="Tên người dùng" className={cx('input')} />
                                {/* <small className={cx('form-message')}>Bạn chưa nhập mật khẩu</small> */}
                            </div>
                            <div className={cx('form-group')}>
                                <input name="password" placeholder="Mật khẩu" className={cx('input')} />
                                {/* <small className={cx('form-message')}>Bạn chưa nhập mật khẩu</small> */}
                            </div>

                            <div className={cx('other')}>
                                <p className={cx('mt-8')}>
                                    Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên
                                    Instagram.{' '}
                                    <Link to="https://www.facebook.com/help/instagram/261704639352628">
                                        Tìm hiểu thêm
                                    </Link>
                                </p>
                                <p>
                                    Bằng cách đăng ký, bạn đồng ý với{' '}
                                    <Link to="https://help.instagram.com/581066165581870/?locale=vi_VN">
                                        Điều khoản
                                    </Link>
                                    ,{' '}
                                    <Link to="https://www.facebook.com/privacy/policy">Chính sách quyền riêng tư</Link>{' '}
                                    và
                                    <Link to="https://help.instagram.com/1896641480634370/">
                                        {' '}
                                        Chính sách Cookie
                                    </Link>{' '}
                                    của chúng tôi
                                </p>
                            </div>

                            <Button className={cx('button', 'mb-26')} primary disabled>
                                Đăng ký
                            </Button>
                        </form>
                    </div>
                    <div className={cx('redirect')}>
                        <p className={cx('redirect__text')}>
                            Bạn có tài khoản?
                            <Link to={routes.home} className={cx('redirect__link')}>
                                Đăng nhập
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

export default Register;