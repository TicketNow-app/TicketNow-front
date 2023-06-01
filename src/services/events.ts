import backendRequest from '../helpers/api';

export const readEvents = (): Promise<any> => {
  return backendRequest({
    endpoint: '/events',
    method: 'get',
  });
}

export const readEvent = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/events/${id}`,
    method: 'get',
  });
}
