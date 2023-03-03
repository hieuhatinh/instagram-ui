import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './PreviewAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '~/components/Button';
import { UserPlus } from '~/components/Icons';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function PreviewAccount({ data }) {
    const havePosts = true;

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link to={routes.profile(data.nickname)}>
                    <img className={cx('user-img')} src={data.image} alt={data.nickname} />
                </Link>

                <div className={cx('info')}>
                    <Link to={routes.profile(data.nickname)}>
                        <span className={cx('nickname')}>
                            {data.nickname}
                            <span className={cx('tick')}>{data.tick}</span>
                        </span>
                    </Link>
                    <span className={cx('user-name')}>{data.username}</span>
                </div>
            </header>

            <div className={cx('content')}>
                <div className={cx('statistical')}>
                    <strong className={cx('number')}>0</strong>
                    <span className={cx('describe')}>bài viết</span>
                </div>
                <div className={cx('statistical')}>
                    <strong className={cx('number')}>5</strong>
                    <span className={cx('describe')}>người theo dõi</span>
                </div>
                <div className={cx('statistical')}>
                    <strong className={cx('number')}>5</strong>
                    <span className={cx('describe')}>đang theo dõi</span>
                </div>
            </div>

            <div className={cx('posts')}>
                {havePosts ? (
                    <div className={cx('have-posts')}>
                        <a href="/" className={cx('link-img')}>
                            <img
                                className={cx('img-posts')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOwoHP06a4mcZgiJwAeddAp2JcgLShigUw&usqp=CAU"
                                alt=""
                            />
                        </a>
                        <a href="/" className={cx('link-img')}>
                            <img
                                className={cx('img-posts')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOwoHP06a4mcZgiJwAeddAp2JcgLShigUw&usqp=CAU"
                                alt=""
                            />
                        </a>
                        <a href="/" className={cx('link-img')}>
                            <img
                                className={cx('img-posts')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOwoHP06a4mcZgiJwAeddAp2JcgLShigUw&usqp=CAU"
                                alt=""
                            />
                        </a>
                    </div>
                ) : (
                    <div className={cx('no-posts')}>
                        <i className={cx('icon')}>
                            <FontAwesomeIcon className={cx('icon-item')} icon={faInstagram} />
                        </i>
                        <span className={cx('notification')}>Chưa có bài viết nào</span>
                        <span className={cx('instruct')}>
                            khi nguyenvanmanh chia sẻ, bạn sẽ nhìn thấy ảnh và thước phim của họ tại đây
                        </span>
                    </div>
                )}
            </div>

            <footer className={cx('footer')}>
                <Button className={cx('button')} primary iconLeft={<UserPlus width="2rem" height="2rem" />}>
                    Theo dõi
                </Button>
            </footer>
        </div>
    );
}

PreviewAccount.propTypes = {
    data: PropTypes.object.isRequired,
};

export default PreviewAccount;
