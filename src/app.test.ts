import supertest from 'supertest';

import { app } from './app';

describe('Fastify app', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Routing', () => {
    it('should return `Hello world` when GET index', async () => {
      const response = await supertest(app.server).get('/');

      expect(response.statusCode).toEqual(200);
      expect(response.body.msg).toEqual('Hello World');
    });

    it('should return `NOT FOUND` when GET a not found route', async () => {
      const response = await supertest(app.server).get('/random-page');

      expect(response.statusCode).toEqual(404);
      expect(response.body.error).toEqual('NOT FOUND');
    });
  });
});
