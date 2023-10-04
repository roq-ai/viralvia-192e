import queryString from 'query-string';
import { ContentInterface, ContentGetQueryInterface } from 'interfaces/content';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContents = async (query?: ContentGetQueryInterface): Promise<PaginatedInterface<ContentInterface>> => {
  return fetcher('/api/contents', {}, query);
};

export const createContent = async (content: ContentInterface) => {
  return fetcher('/api/contents', { method: 'POST', body: JSON.stringify(content) });
};

export const updateContentById = async (id: string, content: ContentInterface) => {
  return fetcher(`/api/contents/${id}`, { method: 'PUT', body: JSON.stringify(content) });
};

export const getContentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/contents/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteContentById = async (id: string) => {
  return fetcher(`/api/contents/${id}`, { method: 'DELETE' });
};
