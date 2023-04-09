import axios from 'axios';

const BASE_URL = 'http://192.168.0.103:3000'; // Altere para a URL do seu backend

interface TicketNowRequest {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: any;
}

const backendRequest = async ({ endpoint, method, data }: TicketNowRequest) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default backendRequest;
