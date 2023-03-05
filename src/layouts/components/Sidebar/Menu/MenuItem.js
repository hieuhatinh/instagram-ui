import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ image, title, to, icon, activeIcon, isActive, onClickTab }) {
    const classes = (nav) =>
        cx('menu-item', {
            active: isActive ? (nav.isActive = true) : (nav.isActive = false),
        });

    return (
        <NavLink className={classes} to={to} onClick={onClickTab}>
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
    image: PropTypes.node,
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
    isActive: PropTypes.bool,
    onClickTab: PropTypes.func,
};

export default MenuItem;
