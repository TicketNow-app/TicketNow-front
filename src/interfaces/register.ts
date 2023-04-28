export interface IRegister {
  date: Date;
  email: string;
  password: string;
}

export interface IRegisterSecondStep{
  name: string;
  cpf: string;
  phone: string;
}
export interface IRegisterContext extends IRegister {
  secondStep?: IRegisterSecondStep;
}

export interface IRegisterComplete extends IRegister, IRegisterSecondStep {}
