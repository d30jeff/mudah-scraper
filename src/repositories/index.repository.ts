import { UserRepository } from '@repositories/user.repository';

export const repositories = {
  user: new UserRepository(),
};
