import routes from '~/config';
import { Login, Register } from '~/pages/Accounts';
import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Inbox from '~/pages/Inbox';
import Reels from '~/pages/Reels';

import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: routes.login,
        component: Login,
    },
    {
        path: routes.register,
        component: Register,
    },
];

const privateRoutes = [
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

export { publicRoutes, privateRoutes };
