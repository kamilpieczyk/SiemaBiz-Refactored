import key from './key';
import fetch from 'isomorphic-unfetch';

export const old = async (uri, body) => {
  const query = async () => {
    const data = await fetch(`${key}${uri}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return await data.json();
  };

  const response = await query();

  return response;
};

export default async (uri, body) => {
  const data = await fetch(`${key}${uri}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (data.status === 200) return await data.json();
  else if (data.status === 500) {
    throw new Error('internal server error');
  }
};
