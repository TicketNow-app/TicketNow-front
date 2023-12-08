import { S3_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AppleAuthentication from 'expo-apple-authentication';
import React, { useEffect, useState } from 'react';

import { SignInCredentials } from '../interfaces/account';
import { User } from '../interfaces/user';

import { loginAuth } from '../services/account';
import { getUser } from '../services/user';

type AuthProviderProps = {
  children: React.ReactNode;
};

interface IAuthContextData {
  user: User;
  signInWithApple: () => Promise<void>;
  signInWithApp: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  userStorageLoading: boolean;
  updateUser: (user: User) => Promise<void>;
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
        };

        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signInWithApp(credentials: SignInCredentials) {
    try {
      const { login, password } = credentials;
      const userLogged = await loginAuth(login, password);

      const token = userLogged.token;

      if (token) {
        const image = S3_URL + userLogged.User.image;
        const user = {
          ...userLogged.User,
          image,
        };

        setUser(user);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(user));
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function updateUser(user: User) {
    setUser(user);
    await AsyncStorage.setItem(userStorageKey, JSON.stringify(user));
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
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
