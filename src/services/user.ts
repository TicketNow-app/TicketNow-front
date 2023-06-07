import backendRequest from '../helpers/api';

import { IRegister } from '../interfaces/register';
interface User {
  id: number;
  name: string;
  email: string;
  photo?: string;
}

interface validateUserCouponResponse {
  isValid: boolean;
}

export const createUserRequired = (register: IRegister): Promise<IRegister> => {
  return backendRequest({
    endpoint: '/login',
    method: 'post',
    data: register,
  });
};

export const getUser = (id: string, token: string): Promise<User> => {
  return backendRequest({
    endpoint: `/user/${id}`,
    method: 'get',
  });
};

export const validateUserCoupon = (coupon: object): Promise<validateUserCouponResponse> => {
  console.log(coupon);
  return backendRequest({
    endpoint: `/user/coupon/validate`,
    method: 'post',
    data: coupon,
  });
};

export const alterUser = user => {
  //TODO: TYPE
  return backendRequest({
    endpoint: `/user/alter`,
    method: 'post',
    data: user,
  });
};
