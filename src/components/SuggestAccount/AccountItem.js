import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './SuggestAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PreviewAccount from './PreviewAccount';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = () => (
        <PopperWrapper>
            <PreviewAccount data={data} />
        </PopperWrapper>
    );

    return (
        <div className={cx('account-item')}>
            <Tippy delay={[300, 200]} offset={[0, 7]} interactive placement="bottom-start" render={renderPreview}>
                <img className={cx('user-img')} src={data.image} alt="" />
            </Tippy>

            <div className={cx('info')}>
                <Tippy delay={[300, 200]} offset={[0, 7]} interactive placement="bottom-start" render={renderPreview}>
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
