import backendRequest from '../api';

export const readRecommendedEvents = (): Promise<any> => {
  return backendRequest({
    endpoint: '/events/recommended',
    method: 'get',
  });
}

export const readEvent = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/events/${id}`,
    method: 'get',
  });
}
