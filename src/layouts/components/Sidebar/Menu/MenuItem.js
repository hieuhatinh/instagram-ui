import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, img, icon, title, className }) {
    let Comp = NavLink;

    if (!to) {
        Comp = 'div';
    }

    const classes = cx('menu-item', {
        [className]: className,
    });

    return (
        <Comp className={classes} to={to}>
            {img ? (
                <img className={cx('left', 'avatar')} src={img} alt="avatar" />
            ) : (
                <span className={cx('left', 'icon')}>{icon}</span>
            )}
            <span className={cx('title')}>{title}</span>
        </Comp>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string,
    img: PropTypes.object,
    icon: PropTypes.node,
    title: PropTypes.string,
};

export default MenuItem;
