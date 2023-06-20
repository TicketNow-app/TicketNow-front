export interface User {
  id?: number;
  image?: string;
  name?: string;
  cpf?: string;
  telephone?: string;
  birth?: string;
  category?: 'P' | 'C';
  coupon?: string;
  created_at?: string;
  deleted_at?: string;
}

export interface UserWithAccount extends User {
  email?: string;
  password?: string;
}
