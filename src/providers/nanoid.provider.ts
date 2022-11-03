import {nanoid} from 'nanoid';

const AVAILABLE = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const generateID = (prefix: string, length = 21): string => {
  const ID = nanoid();
  return `${prefix}_${ID}`;
};
