import { useEffect, useRef, useState } from 'react';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import WrapperBox from '~/components/WrapperBox';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const users = [
    {
        id: 1,
        image: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
        nickname: 'hoangthuylinhofficial',
        username: 'Hoàng Thùy Linh',
        describe: '940 nghìn người theo dõi',
        tick: <FontAwesomeIcon icon={faCircleCheck} />,
    },
    {
        id: 2,
        image: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
        nickname: 'hoangthuylinhofficial',
        username: 'Hoàng Thùy Linh',
    },
    {
        id: 3,
        image: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
        nickname: 'hoangthuylinhofficial',
        username: 'Hoàng Thùy Linh',
        describe: '940 nghìn người theo dõi',
        tick: <FontAwesomeIcon icon={faCircleCheck} />,
    },
    {
        id: 4,
        image: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
        nickname: 'hoangthuylinhofficial',
        username: 'Hoàng Thùy Linh',
        describe: '940 nghìn người theo dõi',
        tick: <FontAwesomeIcon icon={faCircleCheck} />,
    },
    {
        id: 5,
        image: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
        nickname: 'hoangthuylinhofficial',
        username: 'Hoàng Thùy Linh',
    },
    {
        id: 6,
        image: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
        nickname: 'hoangthuylinhofficial',
        username: 'Hoàng Thùy Linh',
        describe: '940 nghìn người theo dõi',
        tick: <FontAwesomeIcon icon={faCircleCheck} />,
    },
    {
        id: 7,
        image: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
        nickname: 'hoangthuylinhofficial',
        username: 'Hoàng Thùy Linh',
        describe: '940 nghìn người theo dõi',
        tick: <FontAwesomeIcon icon={faCircleCheck} />,
    },
    {
        id: 8,
        image: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
        nickname: 'hoangthuylinhofficial',
        username: 'Hoàng Thùy Linh',
    },
];

function Search() {
    const [value, setValue] = useState('');
    const [searched, setSeached] = useState([]);
    const [showIcon, setShowIcon] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setSeached(users);
    }, [value]);

    const handleShowIcon = () => {
        inputRef.current.focus();
        setShowIcon(false);
    };

    const handleClearValue = () => {
        setShowIcon(true);
        setValue('');
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')} onClick={() => setShowIcon(true)}>
                <h2 className={cx('title')}>Tìm kiếm</h2>
            </header>
            <div className={cx('container')}>
                <div className={cx('search')}>
                    {showIcon ? (
                        <i onClick={handleShowIcon}>
                            <SearchIcon className={cx('icon-search')} />
                        </i>
                    ) : (
                        <></>
                    )}
                    <input
                        onFocus={handleShowIcon}
                        ref={inputRef}
                        className={cx('search__input')}
                        value={value}
                        placeholder="Tìm kiếm"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {showIcon ? (
                        <></>
                    ) : (
                        <i onClick={handleClearValue}>
                            <FontAwesomeIcon className={cx('icon-clear')} icon={faCircleXmark} />
                        </i>
                    )}
                </div>
                <div className={cx('box-results')}>
                    <div className={cx('results')}>
                        <div className={cx('results__title')}>
                            <h4>Gần đây</h4>
                            <Button text>Xoá tất cả</Button>
                        </div>
                        {!searched ? (
                            <div className={cx('results__content')}>
                                <p className={cx('notice')}>Không có nội dung tìm kiếm mới đây.</p>
                            </div>
                        ) : (
                            <WrapperBox>
                                {searched.map((data) => (
                                    <AccountItem key={data.id} data={data} />
                                ))}
                            </WrapperBox>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
