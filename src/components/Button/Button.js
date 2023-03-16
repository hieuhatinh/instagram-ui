import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    disabled = false,
    primary = false,
    className,
    iconLeft,
    iconRight,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if ((key.startsWith = 'on' && typeof props[key] === 'function')) {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
    });

    return (
        <Comp className={classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    className: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
