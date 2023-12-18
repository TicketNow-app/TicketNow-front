import backendRequest from './api';

export const readTicket = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/tickets/${id}`,
    method: 'get',
  });
};
