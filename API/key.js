let key = () => {
  const protocol = 'https:';
  const host = 'siema-biz-forum.com';
  return `${protocol}//${host}/`;
};

if (process.env.NODE_ENV === 'development')
  key = () => {
    const protocol = 'http:';
    const host = 'localhost';
    const port = 5002;
    return `${protocol}//${host}:${port}/`;
  };

export default key();
