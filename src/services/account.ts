import backendRequest from '../helpers/api';

import { User } from '../interfaces/user';

interface Account {
  User: User;
  token: string;
}

export const loginAuth = async (login: string, password: string): Promise<Account> => {
  const response = await backendRequest({
    endpoint: '/user/auth',
    method: 'post',
    data: {
      login,
      password,
    },
  });

  return response;
};

export const createAccount = async (account: any) => {
  return backendRequest({
    endpoint: '/account/create',
    method: 'post',
    data: account,
  });
};

export const alterAccount = async (account: any) => {
  return backendRequest({
    endpoint: '/account/alter',
    method: 'post',
    data: account,
  });
};
