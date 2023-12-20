import { useQuery } from '@tanstack/react-query';

import backendRequest from './api';

import { readEventResponse } from '../interfaces/event';

const readEvents = (): Promise<readEventResponse[]> => {
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

const readEvent = (id: string): Promise<readEventResponse> => {
  const response = backendRequest({
    endpoint: `/event/read/${id}`,
    method: 'get',
  });

  return response;
};

export const useReadEvent = (id: string) => {
  return useQuery({
    queryKey: ['event'],
    queryFn: () => readEvent(id),
    refetchInterval: 6000,
    staleTime: 6000,
    retry: false,
  });
};
