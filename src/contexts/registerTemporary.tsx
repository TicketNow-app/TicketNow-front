import React, { createContext, useState } from 'react';
import { IRegister, IRegisterSecondStep } from '../interfaces/register';

import { IRegisterContext } from '../interfaces/register';

interface IRegisterTemporaryContext {
  registerTemporary: IRegisterContext;
  updateRegisterTemporary: (registerTemporary: IRegisterContext) => void;
}

export const RegisterTemporaryContext = createContext({} as IRegisterTemporaryContext);

export const RegisterTemporaryProvider = ({ children }: any) => {
  const [registerTemporary, setRegisterTemporary] = useState<IRegisterContext>({} as IRegisterContext);

  const updateRegisterTemporary = (registerTemporary: IRegisterContext) => {
    setRegisterTemporary(registerTemporary);
  }

  return(
    <RegisterTemporaryContext.Provider value={{ registerTemporary, updateRegisterTemporary }}>
      {children}
    </RegisterTemporaryContext.Provider>
  )
}
