import { useQuery } from '@tanstack/react-query';

import backendRequest from '../helpers/api';

export const readCategories = (): Promise<any> => {
  const response = backendRequest({
    endpoint: '/categoryEvent/readAll',
    method: 'get',
  });

  return response;
};

export const useReadCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: readCategories,
  });
};
