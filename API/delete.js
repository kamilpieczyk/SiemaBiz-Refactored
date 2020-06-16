import key from './key';
import isoFetch from 'isomorphic-unfetch';

export default async uri => {
  const data = await isoFetch(`${key}${uri}`, {
    method: 'delete',
  });
  if (data.status === 200) {
    return await data.json();
  } else {
    return {
      status: 'server error',
    };
  }
};
