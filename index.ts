import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyHealth from 'fastify-healthcheck';
import {config} from './src/config';
import routes from './src/routes';

const {port} = config;

const logger = {
  level: 'info',
  prettyPrint: true,
};

// Instance Fastify
const server = fastify({logger});

// Register CORS
server.register(fastifyCors);

// Register Health Check
server.register(fastifyHealth);

// Register Route
routes.forEach((route) => {
  server.route(route);
});

server.get('/', async (req, reply) => {
  reply.send({message: 'Hello World'});
});

// Start Server
const start = async () => {
  await server.listen(port, '0.0.0.0');
};

start();

export default server;
