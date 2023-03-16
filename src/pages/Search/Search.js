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
    const [resultsSearch, setResultsSearch] = useState([]);
    const [searched, setSeached] = useState([]);
    const [showIcon, setShowIcon] = useState(true);

    const inputRef = useRef();

    // call api tìm kiếm user
    useEffect(() => {
        if (!value.trim()) {
            setResultsSearch([]);
            return;
        }
        setResultsSearch(users);
    }, [value]);

    const handleShowIcon = () => {
        inputRef.current.focus();
        setShowIcon(false);
    };

    const handleClearValue = () => {
        setShowIcon(true);
        setValue('');
        setResultsSearch([]);
    };

    // call api lưu kết quả tìm kiếm vào data base
    const handleClickItem = (data) => {
        let hasData = searched.includes(data);
        if (!hasData) {
            setSeached((prev) => [...prev, data]);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')} onClick={() => setShowIcon(true)}>
                <h2 className={cx('title')}>Tìm kiếm</h2>
            </header>
            <div className={cx('container')}>
                <div className={cx('search')}>
                    {showIcon ? (
                        <i className={cx('icon--search')} onClick={handleShowIcon}>
                            <SearchIcon />
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
                        <i className={cx('icon--clear')} onClick={handleClearValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </i>
                    )}
                </div>
                <div className={cx('box-results')}>
                    <div className={cx('results')}>
                        {resultsSearch.length === 0 ? (
                            <>
                                <div className={cx('results__title')}>
                                    <h4>Gần đây</h4>
                                    {searched.length !== 0 ? <Button text>Xoá tất cả</Button> : <></>}
                                </div>
                                {searched.length === 0 ? (
                                    <div className={cx('results__content')}>
                                        <p className={cx('notice')}>Không có nội dung tìm kiếm mới đây.</p>
                                    </div>
                                ) : (
                                    <WrapperBox>
                                        {searched.map((data) => (
                                            <AccountItem key={data.id} data={data} hasButton />
                                        ))}
                                    </WrapperBox>
                                )}
                            </>
                        ) : (
                            <WrapperBox>
                                {resultsSearch.map((data) => (
                                    <AccountItem key={data.id} data={data} onClick={(data) => handleClickItem(data)} />
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
