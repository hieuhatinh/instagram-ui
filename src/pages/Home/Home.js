import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss';
import SuggestAccount from '~/components/SuggestAccount';
import FooterItem from '~/pages/Home/FooterItem';

const cx = classNames.bind(styles);

const listMenu = [
    {
        title: 'Meta',
        href: 'https://about.meta.com/',
        textDecoration: true,
        target: '_blank',
    },
    {
        title: 'Giới thiệu',
        href: 'https://about.instagram.com/',
        textDecoration: true,
        target: '_blank',
    },
    {
        title: 'Blog',
        href: 'https://about.instagram.com/blog/',
        textDecoration: true,
        target: '_blank',
    },
    {
        title: 'Việc làm',
        to: '/about/jobs/',
    },
    {
        title: 'Trợ giúp',
        href: 'https://help.instagram.com/',
        textDecoration: true,
        target: '_blank',
    },
    {
        title: 'API',
        href: 'https://developers.facebook.com/docs/instagram',
        textDecoration: true,
        target: '_blank',
    },
    {
        title: 'Quyền riêng tư',
        to: '/legal/privacy/',
    },
    {
        title: 'Điều khoản',
        to: '/legal/terms',
    },
    {
        title: 'Tài khoản liên quan nhất',
        to: '/directory/profiles/',
    },
    {
        title: 'Vị trí',
        to: '/explore/locations/',
    },
    {
        title: 'Instagram Lite',
        to: '/web/lite/',
    },

    {
        title: 'Tải thông tin người liên hệ lên & người không phải người dùng',
        href: 'https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT1XOjNDxXm51E4jP4iCWFIMPwBVN9vfm_nvJ_lRmRvXSxQqjb94JDPjhK2HmQPtZXwgbmP9Qi8ZEW-G8RArczqafHHdJ9M9HL1z2ysGDsZVscjxx2D-Dl4Zc2FxZ1fd_nkBJY8IBSkcz5f7tXBrog',
    },
    {
        title: 'Meta đã xác minh',
        href: 'https://about.meta.com/technologies/meta-verified/',
        textDecoration: true,
        target: '_blank',
    },
];

function Home() {
    const listUser = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOwoHP06a4mcZgiJwAeddAp2JcgLShigUw&usqp=CAU',
            username: 'Nguyễn Văn Mạnh',
            nickname: 'nguyenvanmanh',
            describe: 'Gợi ý cho bạn',
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOwoHP06a4mcZgiJwAeddAp2JcgLShigUw&usqp=CAU',
            username: 'Nguyễn Văn Mạnh',
            nickname: 'nguyenvanmanh',
            describe: 'Gợi ý cho bạn',
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOwoHP06a4mcZgiJwAeddAp2JcgLShigUw&usqp=CAU',
            username: 'Nguyễn Văn Mạnh',
            nickname: 'nguyenvanmanh',
            describe: 'Phổ biến',
            tick: <FontAwesomeIcon icon={faCircleCheck} />,
        },
        {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOwoHP06a4mcZgiJwAeddAp2JcgLShigUw&usqp=CAU',
            username: 'Nguyễn Văn Mạnh',
            nickname: 'nguyenvanmanh',
            describe: 'Phổ biến',
            tick: <FontAwesomeIcon icon={faCircleCheck} />,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <SuggestAccount title="Gợi ý cho bạn" data={listUser} />

            <footer className={cx('footer')}>
                {listMenu.map((menu, index) => (
                    <FooterItem
                        className="footer-item"
                        key={index}
                        title={menu.title}
                        to={menu.to}
                        href={menu.href}
                        decoration={menu.textDecoration}
                        target={menu.target}
                    />
                ))}
            </footer>
        </div>
    );
}

export default Home;
