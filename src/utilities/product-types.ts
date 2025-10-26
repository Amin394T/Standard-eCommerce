export type Product = {
  reference: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  owner: string;
  date: Date;
  status: string;
};

export type Review = {
  product: string;
  user: {
    username: string;
    city: string;
  };
  rating: number;
  comment: string;
  date: Date;
};

export type CartItem = {
  reference: string;
  name: string;
  price: number;
  quantity: number;
};
