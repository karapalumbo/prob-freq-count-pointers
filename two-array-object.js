// add whatever parameters you deem necessary
function twoArrayObject(key, value) {
  if (key === null) return {};
  let obj = {};

  for (let i = 0; i < key.length; i++) {
    if (value) {
      obj[key[i]] = value[i];
    } else {
      obj[key[i][0]] = key[i][1];
    }
  }
  return obj;
}

// Write a function called twoArrayObject
// which accepts two arrays of varying lengths.
// The first array consists of keys and the second one consists of values.
// Your function should return an object created from the keys and values.
// If there are not enough values, the rest of keys should have a value of null.
// If there not enough keys, just ignore the rest of values.
