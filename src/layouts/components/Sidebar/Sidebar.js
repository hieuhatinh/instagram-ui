import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
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
    GearIcon,
    ClockIcon,
    BookMarkIcon,
    MoonIcon,
    WarningIcon,
} from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const listMenu = [
    {
        title: 'Trang chủ',
        to: routes.home,
        iconLeft: <HomeIcon />,
        activeIcon: <HomeActiveIcon />,
    },
    {
        title: 'Tìm kiếm',
        noRoute: true,
        iconLeft: <SearchIcon />,
        activeIcon: <SearchActiveIcon />,
        onClick: true,
    },
    {
        title: 'Khám phá',
        to: routes.explore,
        iconLeft: <CompassIcon />,
        activeIcon: <CompassActiveIcon />,
    },
    {
        title: 'Reels',
        to: routes.reels,
        iconLeft: <WatchIcon />,
        activeIcon: <WatchActiveIcon />,
    },
    {
        title: 'Tin nhắn',
        to: routes.inbox,
        iconLeft: <MessageIcon />,
        activeIcon: <MessageActiveIcon />,
    },
    {
        title: 'Thông báo',
        noRoute: true,
        iconLeft: <HeartIcon />,
        activeIcon: <HeartActiveIcon />,
    },
    {
        title: 'Tạo',
        to: '#/*',
        iconLeft: <PlusIcon />,
        activeIcon: <PlusActiveIcon />,
    },
    {
        title: 'Trang cá nhân',
        to: routes.profile,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEUPFfhNo8pjE_ebpl8RUgDszCYLxmEILCw&usqp=CAU',
    },
];

const listMenuWatchMore = [
    {
        title: 'Cài đặt',
        iconRight: <GearIcon />,
    },
    {
        title: 'Hoạt động của bạn',
        iconRight: <ClockIcon />,
    },
    {
        title: 'Đã lưu',
        iconRight: <BookMarkIcon />,
    },
    {
        title: 'Chuyển chế độ',
        iconRight: <MoonIcon />,
    },
    {
        title: 'Báo cáo sự cố',
        iconRight: <WarningIcon />,
    },
];

function Sidebar() {
    const userAccount = 'nguyen_hieu';
    const [tabActive, setTabActive] = useState('Trang chủ');
    const [activeMore, setActiveMore] = useState(false);
    const [visible, setVisible] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);

    const hideSeeMore = () => setVisible(false);
    const showSeeMore = () => setVisible(true);

    const handleClickSeeMore = () => {
        setActiveMore(!activeMore);
        visible ? hideSeeMore() : showSeeMore();
    };

    const handleClickMenuItem = (title, noRoute) => {
        setTabActive(title);

        if (noRoute) {
            setHideMenu(!hideMenu);
        } else {
            setHideMenu(false);
        }
    };

    const renderMenuSeeMore = () => (
        <PopperWrapper>
            {listMenuWatchMore.map((item, index) => (
                <MenuItem key={index} className={cx('right-icon')} title={item.title} iconRight={item.iconRight} />
            ))}
            <MenuItem className={cx('right-icon', 'horizontal-line')} title="Chuyển tài khoản" />
            <MenuItem className={cx('right-icon')} title="Đăng xuất" />
        </PopperWrapper>
    );

    return (
        <aside className={cx('wrapper', hideMenu ? 'show' : '')}>
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
                        iconLeft={item.iconLeft}
                        activeIcon={item.activeIcon}
                        isActive={tabActive === item.title}
                        onClickTab={() => handleClickMenuItem(item.title, item.noRoute)}
                    />
                ))}
            </Menu>

            <Tippy
                visible={visible}
                interactive
                offset={[10, 0]}
                render={renderMenuSeeMore}
                onClickOutside={handleClickSeeMore}
            >
                <div className={cx('see-more')}>
                    <MenuItem
                        isActive={activeMore}
                        onClickTab={handleClickSeeMore}
                        title="Xem thêm"
                        iconLeft={<MenuIcon />}
                        activeIcon={<MenuActiveIcon />}
                    />
                </div>
            </Tippy>
        </aside>
    );
}

export default Sidebar;
