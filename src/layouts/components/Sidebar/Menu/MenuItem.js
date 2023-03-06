import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ className, image, title, to, iconLeft, iconRight, activeIcon, isActive, onClickTab }) {
    const classes = (nav) =>
        cx(
            'menu-item',
            { [className]: className },
            { active: isActive ? (nav.isActive = true) : (nav.isActive = false) },
        );

    return (
        <NavLink className={classes} to={to} onClick={onClickTab}>
            {image ? (
                <img className={cx('left', 'avatar')} src={image} alt="avatar" />
            ) : (
                <>
                    {iconLeft && <span className={cx('left', 'icon')}>{iconLeft}</span>}
                    <span className={cx('left', 'active-icon')}>{activeIcon}</span>
                </>
            )}
            <span className={cx('title')}>{title}</span>
            {iconRight && <span className={cx('right', 'icon')}>{iconRight}</span>}
        </NavLink>
    );
}

MenuItem.propTypes = {
    className: PropTypes.string,
    image: PropTypes.node,
    title: PropTypes.string,
    to: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    activeIcon: PropTypes.node,
    isActive: PropTypes.bool,
    onClickTab: PropTypes.func,
};

export default MenuItem;
