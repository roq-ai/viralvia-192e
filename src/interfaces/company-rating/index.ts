import { GetQueryInterface } from 'interfaces';

export interface CompanyRatingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CompanyRatingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
