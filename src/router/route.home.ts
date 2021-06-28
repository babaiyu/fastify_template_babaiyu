import {RouteOptions} from 'fastify';
import {routeType} from '../config';
import controllerHome from '../controller/controller.home';

const routeHome: RouteOptions[] = [
  {
    method: 'GET',
    url: `${routeType.publicV1}/home`,
    handler: controllerHome.home,
  },
];

export default routeHome;
