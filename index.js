function locate(array, target) {
  // do work here
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      hash[array[i][j]] = i;
    }
  }

  if (hash.hasOwnProperty(target)) {
    return true;
  } else {
    return false;
  }
}

module.exports = locate;
