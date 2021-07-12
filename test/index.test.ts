import server from '../index';
import {routeType} from '../src/config';

describe('Test Fastify', () => {
  it('Root mock', async () => {
    const app = server;
    const data = await app.inject({
      method: 'GET',
      url: '/',
    });

    expect(data).toEqual(data);
  });

  it('Home mock', async () => {
    const app = server;
    const data = await app.inject({
      method: 'GET',
      url: `${routeType.publicV1}/home`,
    });

    expect(data).toEqual(data);
  });
});
