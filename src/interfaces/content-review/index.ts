import { GetQueryInterface } from 'interfaces';

export interface ContentReviewInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ContentReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
}
