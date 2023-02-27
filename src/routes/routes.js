import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Inbox from '~/pages/Inbox';
import Reels from '~/pages/Reels';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/explore',
        component: Explore,
    },
    {
        path: '/reels',
        component: Reels,
    },
    {
        path: '/inbox',
        component: Inbox,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
