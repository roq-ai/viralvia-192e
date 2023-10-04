import queryString from 'query-string';
import { ContentTypeInterface, ContentTypeGetQueryInterface } from 'interfaces/content-type';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContentTypes = async (
  query?: ContentTypeGetQueryInterface,
): Promise<PaginatedInterface<ContentTypeInterface>> => {
  return fetcher('/api/content-types', {}, query);
};

export const createContentType = async (contentType: ContentTypeInterface) => {
  return fetcher('/api/content-types', { method: 'POST', body: JSON.stringify(contentType) });
};

export const updateContentTypeById = async (id: string, contentType: ContentTypeInterface) => {
  return fetcher(`/api/content-types/${id}`, { method: 'PUT', body: JSON.stringify(contentType) });
};

export const getContentTypeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/content-types/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteContentTypeById = async (id: string) => {
  return fetcher(`/api/content-types/${id}`, { method: 'DELETE' });
};
