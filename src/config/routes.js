const routes = {
    home: '/',
    search: '/search',
    explore: '/explore',
    reels: '/reels',
    inbox: '/inbox',
    profile: (nickname) => {
        return `/${nickname}`;
    },
    login: '/',
    register: '/accounts/register',
};

export default routes;
