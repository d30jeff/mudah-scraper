import { PrismaClient } from '@prisma/client';
import { config } from '@providers/config.provider';
import { generateID } from '@providers/nanoid.provider';
import { snakeCase } from 'snake-case';

const prismaWriteConnection = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
  datasources: {
    db: {
      url: config.DATABASE_URL,
    },
  },
});

const prismaReadConnection = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
  datasources: {
    db: {
      url: config.DATABASE_READ_REPLICA_URL,
    },
  },
});

prismaWriteConnection.$use(async (params, next) => {
  if (params.args.data) {
    let data = [];
    if (params.args.data.constructor === Array) {
      data = params.args.data;
    } else {
      data = [params.args.data];
    }

    for (const d of data) {
      d.ID = generateID(snakeCase(params.model));
    }
  }

  const result = await next(params);
  return result;
});

export const db = {
  write: prismaWriteConnection,
  read: prismaReadConnection,
};
