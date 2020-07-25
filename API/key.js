const key = () => {
  const protocol = 'http:';
  const host = 'localhost';
  const port = 5002;
  return `${protocol}//${host}:${port}/`;
};

export default key();
