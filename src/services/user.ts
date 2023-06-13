import backendRequest from '../helpers/api';
interface User {
  id: number;
  name: string;
  email: string;
  photo?: string;
}

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

export const validateUserCoupon = (coupon: object): Promise<validateUserCouponResponse> => {
  return backendRequest({
    endpoint: `/user/coupon/validate`,
    method: 'post',
    data: coupon,
  });
};

export const alterUser = (user: any) => {
  //TODO: TYPE
  return backendRequest({
    endpoint: `/user/alter`,
    method: 'post',
    data: user,
  });
};
