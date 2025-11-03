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
  type: string;
  status: "in-stock" | "sold-out" | "deleted" | "on-hold" | "hidden";
  discount: number;
  specification: { [key: string]: string | number | boolean | null | undefined | object  };
  delivery: {
    range: string;
    cost: number;
    time: string;
  };
  policy: {
    type: "exchange" | "refund";
    method: "drop-off" | "pick-up" | "in-store" | "none";
    period: string;
  };
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
