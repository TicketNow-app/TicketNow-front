export interface SignInCredentials {
  login: string;
  password: string;
}

export interface Account {
  email: string;
  password: string;
  status: 'A' | 'P' | 'I';
  id_user: number | null;
  id_company?: number | null;
}
