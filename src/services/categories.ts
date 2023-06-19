import backendRequest from '../helpers/api';

export const readCategories = (): Promise<any> => {
  return backendRequest({
    endpoint: '/categories',
    method: 'get',
  });
};

export const readAllEventsByCategory = (categoryId: string): Promise<any> => {
  return backendRequest({
    endpoint: `/category-event/${categoryId}`,
    method: 'get',
  });
};
