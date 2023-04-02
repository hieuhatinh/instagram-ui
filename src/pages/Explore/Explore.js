import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Explore.module.scss';
import Footer from '~/pages/components/Footer';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <>
            <div className={cx('container')}>
                <Container>
                    <Row md={3}>
                        <Col md={4} className={cx('col')}>
                            <Link className={cx('link-image')}>
                                <img
                                    className={cx('image')}
                                    src="https://gamek.mediacdn.vn/133514250583805952/2022/5/18/photo-1-16528608926331302726659.jpg"
                                    alt="img"
                                />
                                <div className={cx('post-image')}>
                                    <span className={cx('info')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                        <span>1.836</span>
                                    </span>
                                    <span className={cx('info')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                                        <span>230</span>
                                    </span>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default Explore;
