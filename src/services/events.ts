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

const readEvent = (): Promise<readEventResponse> => {
  try {
    const response = backendRequest({
      endpoint: `/event/read/`,
      method: 'get',
      data: {
        id: '38082123-b165-4a4c-8f83-24b976d0d96a',
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const useReadEvent = () => {
  return useQuery({
    queryKey: ['event'],
    queryFn: readEvent,
    refetchInterval: 6000,
    staleTime: 6000,
    retry: false,
  });
};
