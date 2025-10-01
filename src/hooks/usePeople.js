import { useQuery } from '@tanstack/react-query';
import client from '../api/client';

const fetchPeople = async ({ queryKey }) => {
  const [, params] = queryKey;
  const res = await client.get('/people', { params });
  return res.data;
};

export function usePeople({ per_page = 20 } = {}) {
  return useQuery(['people', { per_page }], fetchPeople);
}
