import backendRequest from '../helpers/api';
import { User } from '../interfaces/user';

interface validateUserCouponResponse {
  isValid: boolean;
}

export const createUser = (user: any) => {
  return backendRequest({
    endpoint: '/user/create',
    method: 'post',
    data: user,
  });
};

export const getUser = (id: string, token: string): Promise<User> => {
  return backendRequest({
    endpoint: `/user/${id}`,
    method: 'get',
  });
};

export const alterUser = (user: User): Promise<User> => {
  console.log('sending to back: ', user);
  return backendRequest({
    endpoint: `/user/alter`,
    method: 'post',
    data: user,
  });
};

export const validateUserCoupon = (coupon: object): Promise<validateUserCouponResponse> => {
  console.log('sending to back: ', coupon);
  return backendRequest({
    endpoint: `/user/coupon/validate`,
    method: 'get',
    data: coupon,
  });
};

export const getAllUsers = (): Promise<User[]> => {
  return backendRequest({
    endpoint: `/user/`,
    method: 'get',
  });
};
