import { ContentInterface } from 'interfaces/content';
import { ContractInterface } from 'interfaces/contract';
import { DiscountCouponInterface } from 'interfaces/discount-coupon';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  content?: ContentInterface[];
  contract?: ContractInterface[];
  discount_coupon?: DiscountCouponInterface[];
  user?: UserInterface;
  _count?: {
    content?: number;
    contract?: number;
    discount_coupon?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
