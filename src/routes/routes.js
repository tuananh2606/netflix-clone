import Home from '~/pages/Home';
import SearchPane from '~/pages/SearchPane';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: SearchPane },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
