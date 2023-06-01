import backendRequest from '../helpers/api';

export const readFriends = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/friends/${id}`,
    method: 'get',
  });
}
