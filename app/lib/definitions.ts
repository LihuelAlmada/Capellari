export type User = {
  email: string;
  id: string;
  name: string;
  password: string;
};

export type Product = {
  description: string;
  image_url: string;
  inStock: number;
  price: number;
  slug: string;
  title: string;
  type: string;
};

export type ProductInCart = {
  description: string;
  image_url: string;
  inStock: number;
  price: number;
  slug: string;
  title: string;
  type: string;
  quantity: number;
};