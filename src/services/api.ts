import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { User } from '../interfaces/user';

type UserAuth = {
  User: User;
  token: string;
};

const userStorageKey = '@ticketnow:user';

interface TicketNowRequest {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: any;
  headers?: any;
}

const backendRequest = async ({ endpoint, method, data, headers }: TicketNowRequest) => {
  const userStorage = (await AsyncStorage.getItem(userStorageKey)) as UserAuth | null;

  const response = await axios({
    method,
    url: `http://www.ticketnowapp.com${endpoint}`,
    data,
    headers: {
      Authorization: `Bearer ${userStorage?.token}`,
      ...headers,
    },
  });

  return response?.data;
};

export default backendRequest;
