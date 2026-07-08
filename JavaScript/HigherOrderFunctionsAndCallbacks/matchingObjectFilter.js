function whatIsInAName(arr, source) {
  const keys = Object.keys(source);

  return arr.filter(obj =>
    keys.every(key => obj[key] === source[key])
  );
}