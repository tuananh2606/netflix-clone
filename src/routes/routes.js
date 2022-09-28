import Home from '~/pages/Home';
import SearchPage from '~/pages/SearchPage';
import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: SearchPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/series', component: RegisterPage },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
