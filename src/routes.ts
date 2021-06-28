import {RouteOptions} from 'fastify';
import routeHome from './router/route.home';

const routes: RouteOptions[] = [...routeHome];

export default routes;
