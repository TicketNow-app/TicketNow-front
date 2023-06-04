import backendRequest from '../helpers/api';

export const readOrders = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/orders/${id}`,
    method: 'get',
  });
}

export const readOrder = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/orders/user/${id}`,
    method: 'get',
  });
}
