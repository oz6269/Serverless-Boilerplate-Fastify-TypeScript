import helmet from '@fastify/helmet';
import { PrismaClient } from '@prisma/client';
import type { FastifyReply, FastifyRequest } from 'fastify';
import fastify from 'fastify';

const app = fastify();

// Security headers
app.register(helmet);

const prisma = new PrismaClient();

app.get('/', async () => ({
  msg: 'Hello World',
}));

app.get('/prisma', async () => {
  await prisma.user.create({
    data: {
      email: 'random@example.com',
    },
  });

  return {
    msg: 'Add a new unique user without duplicate',
  };
});

app.setNotFoundHandler((_: FastifyRequest, reply: FastifyReply) => {
  reply.code(404).send({ error: 'NOT FOUND' });
});

export { app };
