import { PaymentInterface } from 'interfaces/payment';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  start_date: any;
  end_date: any;
  terms: string;
  creator_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  payment?: PaymentInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    payment?: number;
  };
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
  terms?: string;
  creator_id?: string;
  company_id?: string;
}
