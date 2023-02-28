import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Button from '../Button';
import styles from './SuggestAccount.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('account-item')}>
            <img className={cx('user-img')} src={data.image} alt="" />

            <div className={cx('info')}>
                <Tippy render={(attrs) => <span>hello</span>}>
                    <span className={cx('nickname')}>
                        {data.nickname}
                        <span className={cx('tick')}>{data.tick}</span>
                    </span>
                </Tippy>
                <span className={cx('user-name')}>{data.username}</span>
                <span className={cx('describe')}>{data.describe}</span>
            </div>

            <Button primary>Theo dõi</Button>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
