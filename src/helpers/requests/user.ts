import backendRequest from '../api';

import { IRegisterComplete } from '../../interfaces/register';
import { IUser } from '../../interfaces/user';



export const createUser = (register: IRegisterComplete ): Promise<IRegisterComplete> => {

  const userInfos = {
    im_user: '',
    nm_user: register.name,
    cd_cpf: register.cpf,
    dt_birth: register.date,
    ds_category_user: 'U',
    cd_coupon: null,
    dt_created_at: new Date(),
    dt_deleted_at: null,
    // cd_phone: register.secondStep?.phone,
  }

  return(
    backendRequest({
      endpoint: '/user',
      method: 'post',
      data: userInfos,
    })
    .then((response) => {
      const loginInfos = {
        id_user: response.id_user,
        cd_email: register.email,
        cd_password: register.password,
        ic_status: 'A',
        cd_user: null
      }

      return(
        backendRequest({
          endpoint: '/login',
          method: 'post',
          data: loginInfos,
        })
      )
    })
  )
}

export const getUser = (id: string, token: string): Promise<IUser> => {
  return backendRequest({
    endpoint: `/user/${id}`,
    method: 'get',
    headers: { Authorization: `Bearer ${token}` },
  });
}
