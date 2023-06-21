import backendRequest from '../helpers/api';

export const readTicket = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/tickets/${id}`,
    method: 'get',
  });
};

export const readTicketsByEvent = (eventId: number): Promise<any> => {
  return backendRequest({
    endpoint: `/tickets/event/${eventId}`,
    method: 'get',
  });
};
