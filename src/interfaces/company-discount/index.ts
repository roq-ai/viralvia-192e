import { GetQueryInterface } from 'interfaces';

export interface CompanyDiscountInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CompanyDiscountGetQueryInterface extends GetQueryInterface {
  id?: string;
}
