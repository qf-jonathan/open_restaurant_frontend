import { Order } from './order';

export interface Table {
  id: number;
  active: boolean;
  label: string;
  orders: Order[];
}
