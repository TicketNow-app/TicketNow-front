import axios from 'axios';

interface TicketNowRequest {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: any;
  headers?: any;
}

const backendRequest = async ({ endpoint, method, data, headers }: TicketNowRequest) => {
  const response = await axios({
    method,
    url: `https://ticketnow-api.onrender.com${endpoint}`,
    data,
    headers: headers || { 'Content-Type': 'application/json' },
  });
  return response?.data;
};

export default backendRequest;
