import client from '../api/client';

export const likePerson = async ({ user_id, target_id }) => {
  const res = await client.post(`/people/${target_id}/like`, { user_id });
  return res.data;
};

export const dislikePerson = async ({ user_id, target_id }) => {
  const res = await client.post(`/people/${target_id}/dislike`, { user_id });
  return res.data;
};
