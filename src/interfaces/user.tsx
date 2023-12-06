export interface User {
  id: string;
  image: string;
  first_name: string;
  last_name: string;
  nickname: string;
  balance: string;
  cpf: string;
  birth: string;
  telephone: string;
  email: string;
  category: 'P' | 'C';
  share_presence: boolean;
  created_at: string;
  deleted_at: string;
  status: '0' | '1';
  company: string;
}
