import { Link } from 'react-router-dom';

import images from '~/assets/images';
import classNames from 'classnames/bind';
import routes from '~/config';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import {
    HomeIcon,
    HomeActiveIcon,
    SearchIcon,
    SearchActiveIcon,
    CompassIcon,
    CompassActiveIcon,
    WatchIcon,
    WatchActiveIcon,
    MessageIcon,
    MessageActiveIcon,
    HeartIcon,
    HeartActiveIcon,
    PlusIcon,
    PlusActiveIcon,
    MenuIcon,
    MenuActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const listMenu = [
    {
        title: 'Trang chủ',
        to: routes.home,
        icon: <HomeIcon />,
        activeIcon: <HomeActiveIcon />,
    },
    {
        title: 'Tìm kiếm',
        to: '#',
        icon: <SearchIcon />,
        activeIcon: <SearchActiveIcon />,
    },
    {
        title: 'Khám phá',
        to: routes.explore,
        icon: <CompassIcon />,
        activeIcon: <CompassActiveIcon />,
    },
    {
        title: 'Reels',
        to: routes.reels,
        icon: <WatchIcon />,
        activeIcon: <WatchActiveIcon />,
    },
    {
        title: 'Tin nhắn',
        to: routes.inbox,
        icon: <MessageIcon />,
        activeIcon: <MessageActiveIcon />,
    },
    {
        title: 'Thông báo',
        to: '#',
        icon: <HeartIcon />,
        activeIcon: <HeartActiveIcon />,
    },
    {
        title: 'Tạo',
        to: '#/*',
        icon: <PlusIcon />,
        activeIcon: <PlusActiveIcon />,
    },
    {
        title: 'Trang cá nhân',
        to: routes.profile,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEUPFfhNo8pjE_ebpl8RUgDszCYLxmEILCw&usqp=CAU',
    },
];

function Sidebar() {
    const userAccount = 'nguyen_hieu';

    return (
        <aside className={cx('wrapper')}>
            <Link to={routes.home} className={cx('logo')}>
                <img className={cx('logo-img')} src={images.logo} alt="logo" />
            </Link>

            <Menu>
                {listMenu.map((item, index) => (
                    <MenuItem
                        key={index}
                        image={item.img}
                        title={item.title}
                        to={typeof item.to === 'function' ? item.to(userAccount) : item.to}
                        icon={item.icon}
                        activeIcon={item.activeIcon}
                    />
                ))}
            </Menu>

            <div className={cx('see-more')}>
                <MenuItem title="Xem thêm" icon={<MenuIcon />} activeIcon={<MenuActiveIcon />} />
            </div>
        </aside>
    );
}

export default Sidebar;
