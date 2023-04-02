import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMusic, faPlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComment } from '@fortawesome/free-regular-svg-icons';

import styles from './Reels.module.scss';
import { HeartActiveIcon, HeartIcon, MessageIcon } from '~/components/Icons';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Reels() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container__video')}>
                    <video
                        className={cx('video')}
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        autoplay={true}
                        loop
                    ></video>

                    <div className={cx('pause')}>
                        <FontAwesomeIcon className={cx('pause__icon')} icon={faPlay} />
                    </div>

                    <div className={cx('controlls')}>
                        <div className={cx('volume')}>
                            <div className={cx('volume__icon')}>
                                <FontAwesomeIcon className={cx('icon__item')} icon={faVolumeHigh} />
                            </div>
                        </div>
                        <div className={cx('controlls__footer')}>
                            <div className={cx('footer__user')}>
                                <Link className={cx('link__user')}>
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="avatar"
                                    />
                                    <h5>condsty</h5>
                                </Link>
                                <span>•</span>
                                <Button className={cx('btn-follow')} text>
                                    Theo dõi
                                </Button>
                            </div>
                            <div className={cx('footer__content')}>
                                <p className={cx('text__content')}>Love formula</p>
                            </div>
                            <Link className={cx('music')}>
                                <FontAwesomeIcon icon={faMusic} />
                                <span className={cx('name')}>Kina · Can We Kiss Forever? (feat. Adriana Proenza)</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('icon', 'like')}>
                        <HeartIcon className={cx('icon-item')} />
                        {/* <HeartActiveIcon /> */}
                        <span>31,2N</span>
                    </div>
                    <div className={cx('icon', 'comment')}>
                        <FontAwesomeIcon className={cx('icon-item')} icon={faComment} />
                        <span>331</span>
                    </div>
                    <div className={cx('icon', 'direct-share')}>
                        <MessageIcon className={cx('icon-item')} />
                    </div>
                    <div className={cx('icon', 'save')}>
                        <FontAwesomeIcon className={cx('icon-item')} icon={faBookmark} />
                    </div>
                    <div className={cx('icon', 'other')}>
                        <FontAwesomeIcon className={cx('icon-item')} icon={faEllipsis} />
                    </div>
                    <div className={cx('icon', 'direct-share')}></div>
                </div>
            </div>
        </div>
    );
}

export default Reels;
