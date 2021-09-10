const getBoundary = (k, sum) => {
  while (k - sum >= 0) {
    k -= sum;
  }
  return k;
};
