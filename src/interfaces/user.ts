export interface IUser{
  id: number;
  name: string;
  email: string;
  password?: string;
  creation_date?: Date;
  photo?: string;
  cpf?: string;
  birth?: Date;
  coupon?: string;
  deleted_at?: Date;
}
