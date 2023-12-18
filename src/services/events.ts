import { useQuery } from '@tanstack/react-query';

import backendRequest from './api';

import { readAllEventsResponse } from '../interfaces/event';

const readEvents = (): Promise<readAllEventsResponse[]> => {
  const response = backendRequest({
    endpoint: '/event/readAll',
    method: 'get',
  });

  return response;
};

export const useReadEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: readEvents,
    refetchInterval: 6000,
    staleTime: 6000,
    retry: false,
  });
};

export const readEvent = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/events/${id}`,
    method: 'get',
  });
};
