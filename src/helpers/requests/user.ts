import backendRequest from '../api';

import { IRegister } from '../../interfaces/register';

export const createUserRequired = (register: IRegister): Promise<IRegister> => {
  return backendRequest({
    endpoint: '/login',
    method: 'post',
    data: register,
  });
}
