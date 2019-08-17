export interface Order {
  id: number;
  menu: number;
  table: number;
  state: number;
  detail: string;
  requested_at: string;
  dispatched_at: string;
}
