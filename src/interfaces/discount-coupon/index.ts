import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface DiscountCouponInterface {
  id?: string;
  code: string;
  value: number;
  expiry_date: any;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface DiscountCouponGetQueryInterface extends GetQueryInterface {
  id?: string;
  code?: string;
  company_id?: string;
}
