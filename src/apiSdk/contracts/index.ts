import queryString from 'query-string';
import { ContractInterface, ContractGetQueryInterface } from 'interfaces/contract';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContracts = async (
  query?: ContractGetQueryInterface,
): Promise<PaginatedInterface<ContractInterface>> => {
  return fetcher('/api/contracts', {}, query);
};

export const createContract = async (contract: ContractInterface) => {
  return fetcher('/api/contracts', { method: 'POST', body: JSON.stringify(contract) });
};

export const updateContractById = async (id: string, contract: ContractInterface) => {
  return fetcher(`/api/contracts/${id}`, { method: 'PUT', body: JSON.stringify(contract) });
};

export const getContractById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/contracts/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteContractById = async (id: string) => {
  return fetcher(`/api/contracts/${id}`, { method: 'DELETE' });
};
