import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/search',
        component: <Search />,
    },
    {
        path: '/explore',
        component: <Explore />,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
