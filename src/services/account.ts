import backendRequest from '../helpers/api';

export const loginAuth = async (email: string, password: string) => {
  const response = await backendRequest({
    endpoint: '/account/validate',
    method: 'post',
    data: {
      email,
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
