import queryString from 'query-string';
import { CompanyDiscountInterface, CompanyDiscountGetQueryInterface } from 'interfaces/company-discount';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCompanyDiscounts = async (
  query?: CompanyDiscountGetQueryInterface,
): Promise<PaginatedInterface<CompanyDiscountInterface>> => {
  return fetcher('/api/company-discounts', {}, query);
};

export const createCompanyDiscount = async (companyDiscount: CompanyDiscountInterface) => {
  return fetcher('/api/company-discounts', { method: 'POST', body: JSON.stringify(companyDiscount) });
};

export const updateCompanyDiscountById = async (id: string, companyDiscount: CompanyDiscountInterface) => {
  return fetcher(`/api/company-discounts/${id}`, { method: 'PUT', body: JSON.stringify(companyDiscount) });
};

export const getCompanyDiscountById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/company-discounts/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCompanyDiscountById = async (id: string) => {
  return fetcher(`/api/company-discounts/${id}`, { method: 'DELETE' });
};
