import queryString from 'query-string';
import { PaymentInterface, PaymentGetQueryInterface } from 'interfaces/payment';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPayments = async (query?: PaymentGetQueryInterface): Promise<PaginatedInterface<PaymentInterface>> => {
  return fetcher('/api/payments', {}, query);
};

export const createPayment = async (payment: PaymentInterface) => {
  return fetcher('/api/payments', { method: 'POST', body: JSON.stringify(payment) });
};

export const updatePaymentById = async (id: string, payment: PaymentInterface) => {
  return fetcher(`/api/payments/${id}`, { method: 'PUT', body: JSON.stringify(payment) });
};

export const getPaymentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/payments/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePaymentById = async (id: string) => {
  return fetcher(`/api/payments/${id}`, { method: 'DELETE' });
};
