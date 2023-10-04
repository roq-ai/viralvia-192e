import { GetQueryInterface } from 'interfaces';

export interface ContentTypeInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ContentTypeGetQueryInterface extends GetQueryInterface {
  id?: string;
}
