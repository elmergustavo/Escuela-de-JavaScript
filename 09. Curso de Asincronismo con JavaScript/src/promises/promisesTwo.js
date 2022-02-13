const somethingWillHappenTwo = (condition) => {
  return new Promise((resolve, reject) => {
    condition
      ? setTimeout(() => resolve('True'), 2000)
      : reject(new Error('Whops.'));
  });
};

somethingWillHappenTwo(true)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
