import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss';
import SuggestAccount from '~/components/SuggestAccount';
import Footer from '~/pages/components/Footer';

const cx = classNames.bind(styles);

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

            <Footer />
        </div>
    );
}

export default Home;
