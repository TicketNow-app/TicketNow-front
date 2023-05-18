import backendRequest from '../api';

export const readRecommendedEvents = (): Promise<any> => {
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

export const readEventsMap = (): Promise<any> => {
  return backendRequest({
    endpoint: '/map/events',
    method: 'get',
  });
}

export const readEventsDetailed = (userId: number): Promise<any> => {
  return backendRequest({
    endpoint: `/events/detailed/${userId}`,
    method: 'get',
  });
}
