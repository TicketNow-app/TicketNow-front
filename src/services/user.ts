import backendRequest from '../helpers/api';

import { IRegister } from '../interfaces/register';

export const createUserRequired = (register: IRegister) => {
  backendRequest({
    endpoint: '/login',
    method: 'post',
    data: register,
  });

  console.log('Usuário criado com sucesso!')
}
