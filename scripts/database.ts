/* eslint-disable import/no-extraneous-dependencies,no-console */
import { MongoMemoryReplSet } from 'mongodb-memory-server';
import pRetry from 'p-retry';

import { prismaDbPush } from './prisma';

let mongodb: MongoMemoryReplSet | null = null;

(async () => {
  // Use a single-node replica set so writeConcern("majority") succeeds immediately.
  mongodb = await MongoMemoryReplSet.create({
    replSet: {
      count: 1,
      storageEngine: 'wiredTiger',
    },
  });

  // Provide the db name directly; create() waits for PRIMARY.
  process.env.DATABASE_URL = mongodb.getUri('modernmern');

  await pRetry(prismaDbPush, { retries: 10 });

  console.log(`MongoDB ready - endpoint: ${mongodb.getUri()}`);
})();

process.on('SIGINT', () => {
  if (mongodb) {
    mongodb.stop();
  }

  process.exit();
});
