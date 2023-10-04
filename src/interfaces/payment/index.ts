import { ContractInterface } from 'interfaces/contract';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  amount: number;
  payment_date: any;
  payment_method: string;
  contract_id: string;
  created_at?: any;
  updated_at?: any;

  contract?: ContractInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_method?: string;
  contract_id?: string;
}
