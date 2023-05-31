import backendRequest from '../api';

export const loginAuth = async (email: string, password: string) => {
  const response = await backendRequest({
    endpoint: '/login/validate',
    method: 'post',
    data: {
      email: email,
      password: password,
    },
  });

  return response;
};
