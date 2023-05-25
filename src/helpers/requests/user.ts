import backendRequest from '../api';

import { IRegister } from '../../interfaces/register';
interface User {
  id: number;
  name: string;
  email: string;
  photo?: string;
}

export const createUserRequired = (register: IRegister): Promise<IRegister> => {
  return backendRequest({
    endpoint: '/login',
    method: 'post',
    data: register,
  });
}

export const getUser = (id: string, token: string): Promise<User> => {
  return backendRequest({
    endpoint: `/user/${id}`,
    method: 'get',
    headers: { Authorization: `Bearer ${token}` },
  });
}
