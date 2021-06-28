import {FastifyRequest as Request, FastifyReply as Reply} from 'fastify';

const home = async (req: Request, reply: Reply) => {
  reply.code(200).send('This is HOME');
};

export default {home};
