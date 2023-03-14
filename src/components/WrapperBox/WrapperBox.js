import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './WrapperBox.module.scss';

const cx = classNames.bind(styles);

function WrapperBox({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

WrapperBox.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WrapperBox;
