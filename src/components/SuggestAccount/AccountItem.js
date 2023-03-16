import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './SuggestAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PreviewAccount from './PreviewAccount';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function AccountItem({ data, titleButton }) {
    const renderPreview = () => (
        <PopperWrapper>
            <PreviewAccount data={data} />
        </PopperWrapper>
    );

    return (
        <div className={cx('account-item')}>
            <div>
                <Tippy delay={[300, 200]} offset={[0, 3]} interactive placement="bottom-start" render={renderPreview}>
                    <Link to={routes.profile(data.nickname)}>
                        <img className={cx('user-img')} src={data.image} alt={data.nickname} />
                    </Link>
                </Tippy>
            </div>

            <div className={cx('info')}>
                <div>
                    <Tippy
                        delay={[300, 200]}
                        offset={[0, 7]}
                        interactive
                        placement="bottom-start"
                        render={renderPreview}
                    >
                        <Link to={routes.profile(data.nickname)}>
                            <span className={cx('nickname')}>
                                {data.nickname}
                                <span className={cx('tick')}>{data.tick}</span>
                            </span>
                        </Link>
                    </Tippy>
                </div>
                <span className={cx('text', 'user-name')}>{data.username}</span>
                <span className={cx('text', 'describe')}>{data.describe}</span>
            </div>

            <Button primary>{titleButton}</Button>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    titleButton: PropTypes.node.isRequired,
};

export default AccountItem;
