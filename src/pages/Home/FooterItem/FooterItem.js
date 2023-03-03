import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './FooterItem.module.scss';

const cx = classNames.bind(styles);

function FooterItem({ title, to, href, decoration = false, target, className }) {
    let Comp = Link;

    const classes = {
        [className]: className,
    };

    const props = {};
    props.target = target;

    if (href) {
        Comp = 'a';
        props.href = href;
    } else if (to) {
        props.to = to;
    }

    if (decoration) {
        classes.decoration = 'text-decoration';
    }

    return (
        <Comp className={cx(Object.values(classes))} {...props}>
            {title}
        </Comp>
    );
}

FooterItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    decoration: PropTypes.bool,
    target: PropTypes.string,
    className: PropTypes.string,
};

export default FooterItem;
