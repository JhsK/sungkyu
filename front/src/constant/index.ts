export interface LogInInput {
  email: string;
  password: string;
}

export interface JoinInput extends LogInInput {
  password_confirmation: string;
  username: string;
}

export interface currentUserType {
  id?: number;
  email?: string;
  username?: string;
  createdAt?: string;
  updatedAt?: string;
  isAuthenticated: boolean;
}

export interface postCreateType {
  title: string;
  content: string;
}

export interface Model {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface PostModel extends Model {
  title: string;
  UserId: number;
}
