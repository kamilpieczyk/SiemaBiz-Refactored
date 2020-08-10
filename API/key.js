const key = () => {
  const protocol = 'http:';
  const host = 'coding-bear.co.uk';
  const port = 5002;
  return `${protocol}//${host}:${port}/`;
};

export default key();
