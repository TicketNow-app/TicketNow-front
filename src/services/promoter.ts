import backendRequest from '../helpers/api';

export const readSales = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/sales/${id}`,
    method: 'get',
  });
};

export const readSalesGroupByEvent = (promoter_id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/orders/promoter/${promoter_id}`,
    method: 'get',
  });
};
