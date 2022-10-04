import Home from '~/pages/Home';
import SearchPage from '~/pages/SearchPage';
import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';
import MovieDetails from '~/pages/MovieDetails';
import NavigationPage from '~/pages/NavigationPage';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: SearchPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/:category', component: NavigationPage },
    { path: '/:category/:id', component: MovieDetails },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
