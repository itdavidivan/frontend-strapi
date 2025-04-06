export type Car = {
  id: number;
  name: string;
  price: number;
  description: string;
  picture: string;
};

export type Profile = {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
