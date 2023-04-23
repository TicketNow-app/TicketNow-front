import backendRequest from '../api';

import { IRegister } from '../../interfaces/register';
import { IUser } from '../../interfaces/user';

export const createUserRequired = (register: IRegister): Promise<IRegister> => {
  return backendRequest({
    endpoint: '/login',
    method: 'post',
    data: register,
  });
}

export const getUser = (id: string, token: string): Promise<IUser> => {
  return backendRequest({
    endpoint: `/user/${id}`,
    method: 'get',
    headers: { Authorization: `Bearer ${token}` },
  });
}
