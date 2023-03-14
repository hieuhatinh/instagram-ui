import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link className={cx('account-item')} to={routes.profile(data.nickname)}>
            <img className={cx('user-img')} src={data.image} alt={data.nickname} />

            <div className={cx('info')}>
                <span className={cx('nickname')}>
                    {data.nickname}
                    <span className={cx('tick')}>{data.tick}</span>
                </span>
                <span className={cx('user-name')}>
                    {data.username}.{data.describe}
                </span>
            </div>

            <button className={cx('button')}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
