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
