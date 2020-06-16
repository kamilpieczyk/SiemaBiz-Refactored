import key from './key';
import isoFetch from 'isomorphic-unfetch';

export default async uri => {
  const query = async () => {
    const data = await isoFetch(`${key}${uri}`);

    return await data.json();
  };

  const response = await query();

  return response;
};
