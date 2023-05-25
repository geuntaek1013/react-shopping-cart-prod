import { HOSTS } from '../constants';

export interface ProductInfo {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface CartItemInfo {
  id: number;
  quantity: number;
  product: ProductInfo;
}

export type Host = (typeof HOSTS)[number];
