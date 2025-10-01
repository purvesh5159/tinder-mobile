import { useQuery } from '@tanstack/react-query';
import client from '../api/client';

const fetchLikedPeople = async ({ queryKey }) => {
  const [, userId] = queryKey;
  const res = await client.get('/people/liked', { params: { user_id: userId } });
  return res.data.data || res.data;
};

export function useLikedPeople(userId) {
  return useQuery(['likedPeople', userId], fetchLikedPeople);
}
