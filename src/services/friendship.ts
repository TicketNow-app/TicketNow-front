import backendRequest from '../helpers/api';

export const readFriends = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/friends/${id}`,
    method: 'get',
  });
}

export const readPendingFriendSolicitations = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/friends/pending/${id}`,
    method: 'get',
  });
}


export const excludeFriend = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/friends/delete/${id}`,
    method: 'delete',
  });
}
