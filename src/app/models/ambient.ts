import { Table } from './table';

export interface Ambient {
  id: number;
  name: string;
  active: boolean;
  tables: Table[];
}
