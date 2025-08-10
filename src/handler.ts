import serverlessHttp from 'serverless-http';

import { app } from './app';

// serverless-http types are Express-centric, but runtime supports Fastify.
// Cast to any to satisfy TypeScript.
export const handler = serverlessHttp(app as any);
