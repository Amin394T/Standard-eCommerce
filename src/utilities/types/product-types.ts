export type Product = {
  reference: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

export type CartItem = {
  reference: string;
  name: string;
  price: number;
  quantity: number;
};