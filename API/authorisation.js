import POST from './post';

export default async () => {
  const token = window.localStorage.getItem('token');
  try {
    const res = await POST('authentication', { token });
    if (res.status === 'authenticated') return res;
    else throw new Error('user not authenticated');
  } catch (err) {
    console.error(err);
    // if (token) window.localStorage.removeItem('token')
    return null;
  }
};
