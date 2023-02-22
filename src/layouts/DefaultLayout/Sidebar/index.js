import images from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('logo')}>
                <img className={cx('logo-img')} src={images.logo} alt="logo" />
            </Link>
        </div>
    );
}

export default Sidebar;
