const routes = {
    home: '/',
    search: '/search',
    explore: '/explore',
    reels: '/reels',
    inbox: '/inbox',
    profile: (nickname) => {
        return `/${nickname}`;
    },
};

export default routes;
