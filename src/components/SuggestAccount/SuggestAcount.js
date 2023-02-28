import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import styles from './SuggestAccount.module.scss';

const cx = classNames.bind(styles);

function SuggestAccount({ title, data }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>{title}</span>
            <div className={cx('list-account')}>
                {data.map((item) => (
                    <AccountItem key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

SuggestAccount.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default SuggestAccount;
