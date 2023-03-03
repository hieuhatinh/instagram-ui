import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, image, icon, activeIcon, title }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {image ? (
                <img className={cx('left', 'avatar')} src={image} alt="avatar" />
            ) : (
                <>
                    <span className={cx('left', 'icon')}>{icon}</span>
                    <span className={cx('left', 'active-icon')}>{activeIcon}</span>
                </>
            )}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string,
    img: PropTypes.node,
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
    title: PropTypes.string,
};

export default MenuItem;
