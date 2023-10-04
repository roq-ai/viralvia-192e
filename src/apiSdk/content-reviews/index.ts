import queryString from 'query-string';
import { ContentReviewInterface, ContentReviewGetQueryInterface } from 'interfaces/content-review';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContentReviews = async (
  query?: ContentReviewGetQueryInterface,
): Promise<PaginatedInterface<ContentReviewInterface>> => {
  return fetcher('/api/content-reviews', {}, query);
};

export const createContentReview = async (contentReview: ContentReviewInterface) => {
  return fetcher('/api/content-reviews', { method: 'POST', body: JSON.stringify(contentReview) });
};

export const updateContentReviewById = async (id: string, contentReview: ContentReviewInterface) => {
  return fetcher(`/api/content-reviews/${id}`, { method: 'PUT', body: JSON.stringify(contentReview) });
};

export const getContentReviewById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/content-reviews/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteContentReviewById = async (id: string) => {
  return fetcher(`/api/content-reviews/${id}`, { method: 'DELETE' });
};
