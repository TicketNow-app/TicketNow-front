import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AppleAuthentication from 'expo-apple-authentication';
import React, { useEffect, useState } from 'react';

import { loginAuth } from '../services/login';
import { getUser } from '../services/user';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface User {
  id: number;
  image?: string;
  name: string;
  cpf?: string;
  telephone?: string;
  birth?: string;
  category?: 'P' | 'C';
  coupon?: string;
  createdAt?: Date;
  deletedAt?: Date | null;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: User;
  signInWithApple: () => Promise<void>;
  signInWithApp: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  userStorageLoading: boolean;
}

const AuthContext = React.createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  const userStorageKey = '@ticketnow:user';

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const name = credential.fullName!.givenName!;
        const photo = `https://ui-avatars.com/api/?name=${credential.fullName.givenName}}&length=2&size=1024&background=323643&color=FFFFFF&font-size=0.33`;
        const userLogged = {
          id: Number(credential.user),
          email: credential.email!,
          name,
          photo,
        }

        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signInWithApp(credentials: SignInCredentials) {
    try {
      const { email, password } = credentials;
      const userLogged = await loginAuth(email, password);

      const token = userLogged.token;
      const id = userLogged.account.id_user.id

      if (token) {
        const user = await getUser(id, token);
        setUser(user);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(user));
      }
    }
    catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem(userStorageKey);

      if (userStorage) {
        const userLogged = JSON.parse(userStorage) as User;
        setUser(userLogged);
      }

      setUserStorageLoading(false);
    }

    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithApple,
        signInWithApp,
        signOut,
        userStorageLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
