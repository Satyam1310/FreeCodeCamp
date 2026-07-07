function uniteUnique(...arrays) {
  const result = [];

  for (const arr of arrays) {
    for (const item of arr) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }

  return result;
}