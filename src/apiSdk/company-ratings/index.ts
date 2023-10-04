import queryString from 'query-string';
import { CompanyRatingInterface, CompanyRatingGetQueryInterface } from 'interfaces/company-rating';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCompanyRatings = async (
  query?: CompanyRatingGetQueryInterface,
): Promise<PaginatedInterface<CompanyRatingInterface>> => {
  return fetcher('/api/company-ratings', {}, query);
};

export const createCompanyRating = async (companyRating: CompanyRatingInterface) => {
  return fetcher('/api/company-ratings', { method: 'POST', body: JSON.stringify(companyRating) });
};

export const updateCompanyRatingById = async (id: string, companyRating: CompanyRatingInterface) => {
  return fetcher(`/api/company-ratings/${id}`, { method: 'PUT', body: JSON.stringify(companyRating) });
};

export const getCompanyRatingById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/company-ratings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCompanyRatingById = async (id: string) => {
  return fetcher(`/api/company-ratings/${id}`, { method: 'DELETE' });
};
