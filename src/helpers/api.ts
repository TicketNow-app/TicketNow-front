import { APP_BASE_URL } from '@env'
import axios from 'axios';

interface TicketNowRequest {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: any;
}

const backendRequest = async ({ endpoint, method, data }: TicketNowRequest) => {
  try {
    const response = await axios({
      method,
      url: `${APP_BASE_URL}${endpoint}`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default backendRequest;
