import Router from './Router';
import Home from './controllers/home';
import Login from './controllers/login';
import Register from './controllers/register';
import Account from './controllers/account';
import './index.scss';

const routes = [
  {
    url: '/',
    controller: Home
  },
  {
    url: '/login',
    controller: Login
  },
  {
    url: '/register',
    controller: Register
  },
  {
    url: '/account',
    controller: Account
  }
];

new Router(routes);
