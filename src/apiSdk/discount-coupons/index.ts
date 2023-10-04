import queryString from 'query-string';
import { DiscountCouponInterface, DiscountCouponGetQueryInterface } from 'interfaces/discount-coupon';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDiscountCoupons = async (
  query?: DiscountCouponGetQueryInterface,
): Promise<PaginatedInterface<DiscountCouponInterface>> => {
  return fetcher('/api/discount-coupons', {}, query);
};

export const createDiscountCoupon = async (discountCoupon: DiscountCouponInterface) => {
  return fetcher('/api/discount-coupons', { method: 'POST', body: JSON.stringify(discountCoupon) });
};

export const updateDiscountCouponById = async (id: string, discountCoupon: DiscountCouponInterface) => {
  return fetcher(`/api/discount-coupons/${id}`, { method: 'PUT', body: JSON.stringify(discountCoupon) });
};

export const getDiscountCouponById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/discount-coupons/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDiscountCouponById = async (id: string) => {
  return fetcher(`/api/discount-coupons/${id}`, { method: 'DELETE' });
};
