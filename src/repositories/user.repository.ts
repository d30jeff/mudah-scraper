import { Prisma } from '@prisma/client';
import { db } from '@providers/db.provider';

const fields = {
  ID: true,
  name: true,
  subject: true,
  location: true,
  phone: true,
  createdAt: true,
};

export const UserPublicSelect = Prisma.validator<Prisma.UserSelect>()(fields);

export type UserWithPublicFields = Prisma.UserGetPayload<{
  select: typeof UserPublicSelect;
}>;

export const UserPrivateSelect = Prisma.validator<Prisma.UserSelect>()({
  ...fields,
});

export type UserWithPrivateFields = Prisma.UserGetPayload<{
  select: typeof UserPrivateSelect;
}>;

export class UserRepository {
  upsert(params: Prisma.UserUpsertArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.user.upsert(params);
  }

  create(params: Prisma.UserCreateArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.user.create(params);
  }

  createMany(params: Prisma.UserCreateManyArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.user.createMany(params);
  }

  findFirst(params: Prisma.UserFindFirstArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.user.findFirst(params);
  }

  findMany(params: Prisma.UserFindManyArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.user.findMany(params);
  }

  count(params: Prisma.UserCountArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.user.count(params);
  }

  update(params: Prisma.UserUpdateArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.user.update(params);
  }

  delete(params: Prisma.UserDeleteArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.user.delete(params);
  }
}
