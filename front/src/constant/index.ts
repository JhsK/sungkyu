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
  isAuthenticated?: boolean;
}

export interface postCreateType {
  title: string;
  content: string;
  tag?: string[];
}

export interface Model {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface PostTag {
  PostId: number;
  TagId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Tags extends Model {
  name: string;
  PostTag: PostTag;
}

export interface PostModel extends Model {
  title: string;
  UserId: number;
  Tags?: Tags[];
  Images?: ImageModel[];
  content: string;
}

export interface TagModel extends Model {
  name: string;
}

export interface ImageModel {
  id: number;
  PostId: number;
  image_url: string;
}
