import { useQuery } from '@tanstack/react-query';
import backendRequest from './api';
import { ResponsePendingFriendship } from '../interfaces/friendship';

const readPendingFriendSolicitations = (): Promise<ResponsePendingFriendship> => {
  const response = backendRequest({
    endpoint: `/test`,
    method: 'get',
  });

  return response;
};

export const useReadPendingFriendSolicitations = () => {
  return useQuery({
    queryKey: ['pendingFriendSolicitations'],
    queryFn: readPendingFriendSolicitations,
    refetchInterval: 6000,
    staleTime: 6000,
    retry: false,
  });
};

export const readFriends = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/friends/${id}`,
    method: 'get',
  });
};

export const excludeFriend = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/friends/delete/${id}`,
    method: 'delete',
  });
};

export const readFriendshipStatus = (userId, friendId): Promise<any> => {
  return backendRequest({
    endpoint: `/friends/status`,
    method: 'post',
    data: { userId, friendId },
  });
};
