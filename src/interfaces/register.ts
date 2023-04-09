export interface IRegisterForm {
  date: Date;
  email: string;
  password: string;
}

export interface IRegister {
  cd_email: string;
  cd_password: string
  ic_status: 'A' | 'I';
  id_user: number;
}
