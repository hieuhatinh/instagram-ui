import routes from '~/config';
import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Inbox from '~/pages/Inbox';
import Reels from '~/pages/Reels';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.search,
        component: Search,
    },
    {
        path: routes.explore,
        component: Explore,
    },
    {
        path: routes.reels,
        component: Reels,
    },
    {
        path: routes.inbox,
        component: Inbox,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
