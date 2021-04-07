import key from './key';
import fetch from 'isomorphic-unfetch';

export default async (uri, body) => {
  const passport = window.localStorage.getItem('passport');
  const data = await fetch(`${key}${uri}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      authorisation: `bearer ${passport}`,
    },
    body: JSON.stringify(body),
  });
  if (data.status === 401) return { status: 'unauthorised' };
  else if (data.status === 200) return await data.json();
  else if (data.status === 500) {
    throw new Error('internal server error');
  }
};
