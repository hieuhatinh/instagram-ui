import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClapperboard, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import { faComment, faCompass, faHeart, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const listMenu = [
    {
        title: 'Trang chủ',
        to: '/',
        icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        title: 'Tìm kiếm',
        to: '/',
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    },
    {
        title: 'Khám phá',
        to: '/explore',
        icon: <FontAwesomeIcon icon={faCompass} />,
    },
    {
        title: 'Reels',
        to: '/reels',
        icon: <FontAwesomeIcon icon={faClapperboard} />,
    },
    {
        title: 'Tin nhắn',
        to: '/inbox',
        icon: <FontAwesomeIcon icon={faComment} />,
    },
    {
        title: 'Thông báo',
        to: '/',
        icon: <FontAwesomeIcon icon={faHeart} />,
    },
    {
        title: 'Tạo',
        to: '/',
        icon: <FontAwesomeIcon icon={faSquarePlus} />,
    },
    {
        title: 'Trang cá nhân',
        to: '/',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEUPFfhNo8pjE_ebpl8RUgDszCYLxmEILCw&usqp=CAU',
    },
];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Link to="/" className={cx('logo')}>
                <img className={cx('logo-img')} src={images.logo} alt="logo" />
            </Link>

            <Menu>
                {listMenu.map((item, index) => (
                    <MenuItem key={index} img={item.img} title={item.title} to={item.to} icon={item.icon} />
                ))}
            </Menu>

            <div className={cx('see-more')}>
                <MenuItem title="Xem thêm" icon={<FontAwesomeIcon icon={faBars} />} />
            </div>
        </aside>
    );
}

export default Sidebar;
