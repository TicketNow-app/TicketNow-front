/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

import { User } from '../interfaces/user';
import { createAccount } from '../services/account';
import { createUser } from '../services/user';

type RegisterProviderProps = {
  children: React.ReactNode;
};

interface Account {
  email: string;
  password: string;
}

interface RegistrationContextType {
  account: Account;
  user: User;
  setAccount: (account: Account) => void;
  setUser: (user: User) => void;
  submitRegister: () => void;
}

const initialAccount: Account = {
  email: '',
  password: '',
};

const initialUser: User = {
  birth: new Date(),
  name: '',
  cpf: '',
  telephone: '',
};

export const RegistrationContext = createContext<RegistrationContextType>({
  account: initialAccount,
  user: initialUser,
  setAccount: () => {},
  setUser: () => {},
  submitRegister: () => Promise<void>,
});

export const RegistrationProvider = ({ children }: RegisterProviderProps) => {
  const [account, setAccount] = useState<Account>(initialAccount);
  const [user, setUser] = useState<User>(initialUser);

  async function submitRegister() {
    try {
      if (account && user) {
        const image = `https://ui-avatars.com/api/?name=${user.name}&length=2&size=1024&background=323643&color=FFFFFF&font-size=0.33`;
        const userComplete = {
          ...user,
          image,
          category: 'C',
          createdAt: new Date(),
        };

        const createdUser = await createUser(userComplete);

        const accountComplete = {
          ...account,
          id_user: createdUser.id,
        };

        await createAccount(accountComplete);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <RegistrationContext.Provider value={{ account, user, setAccount, setUser, submitRegister }}>
      {children}
    </RegistrationContext.Provider>
  );
};
